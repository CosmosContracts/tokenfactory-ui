/* eslint-disable @typescript-eslint/naming-convention */
import { useChain } from "@cosmos-kit/react-lite"
import { useQueryClientStore } from "@state/queryClientState"
import { useQuery } from "@tanstack/react-query"
import { osmosis } from "juno-network"

const { createRPCQueryClient } = osmosis.ClientFactory

export const useTokenFactoryDenoms = () => {
	const { address } = useChain(import.meta.env.VITE_CHAINNETWORK)
	const { queryClient } = useQueryClientStore()

	const { data, isLoading } = useQuery<string[]>({
		enabled: Boolean(address && queryClient),
		notifyOnChangeProps: ["data", "error"],
		queryFn: async () => {
			const rpcQueryClient = await createRPCQueryClient({
				rpcEndpoint: "https://rpc-juno.itastakers.com"
			})

			const tokensFromCreator =
				await rpcQueryClient.osmosis.tokenfactory.v1beta1.denomsFromCreator({
					creator: address!
				})

			return tokensFromCreator.denoms
		},
		queryKey: ["@juno", "denoms", address],
		refetchOnMount: true,
		refetchOnReconnect: true,
		refetchOnWindowFocus: true,
		retry: false
	})

	return [data, isLoading] as const
}
