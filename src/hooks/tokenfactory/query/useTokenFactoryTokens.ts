/* eslint-disable @typescript-eslint/naming-convention */
import { useTokenFactoryDenoms } from "./useTokenFactoryDenoms"
import { useChain } from "@cosmos-kit/react-lite"
import { useQueryClientStore } from "@state/queryClientState"
import { useQuery } from "@tanstack/react-query"
import { cosmos, osmosis } from "juno-network"
import { type Metadata } from "juno-network/types/codegen/cosmos/bank/v1beta1/bank"

const { createRPCQueryClient: createCosmosRPCQueryClient } =
	cosmos.ClientFactory
const { createRPCQueryClient: createTokenfactoryRPCQueryClient } =
	osmosis.ClientFactory

export const useTokenFactoryTokens = () => {
	const { address } = useChain(import.meta.env.VITE_CHAINNETWORK)
	const { queryClient } = useQueryClientStore()
	const [assetList] = useTokenFactoryDenoms()

	const { data, isLoading } = useQuery<Metadata[]>({
		enabled: Boolean(
			address && queryClient && assetList && assetList.length >= 1
		),
		notifyOnChangeProps: ["data", "error"],
		queryFn: async () => {
			const rpcQueryClient = await createCosmosRPCQueryClient({
				rpcEndpoint: "https://rpc-juno.itastakers.com"
			})

			const tfQueryClient = await createTokenfactoryRPCQueryClient({
				rpcEndpoint: "https://rpc-juno.itastakers.com"
			})

			const metadatas: Metadata[] = []

			for (const denom of assetList!) {
				const resp = await rpcQueryClient.cosmos.bank.v1beta1.denomMetadata({
					denom
				})

				const tfResp =
					await tfQueryClient.osmosis.tokenfactory.v1beta1.denomAuthorityMetadata(
						{
							denom
						}
					)

				if (resp?.metadata && tfResp.authorityMetadata?.admin === address) {
					metadatas.push(resp.metadata)
				}
			}

			return metadatas
		},
		queryKey: ["@juno", "tokens", address],
		refetchOnMount: true,
		refetchOnReconnect: true,
		refetchOnWindowFocus: true,
		retry: false
	})

	return [data, isLoading] as const
}
