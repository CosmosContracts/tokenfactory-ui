/* eslint-disable @typescript-eslint/naming-convention */
import { useChain } from "@cosmos-kit/react-lite"
import { useQueryClientStore } from "@state/queryClientState"
import { useQuery } from "@tanstack/react-query"
import { cosmos } from "juno-network"

const { createRPCQueryClient } = cosmos.ClientFactory

export const useTokenInfo = (denom: string) => {
	const { address } = useChain(import.meta.env.VITE_CHAINNETWORK)
	const { queryClient } = useQueryClientStore()

	const { data, isLoading } = useQuery<{
		balance: string | undefined
		totalSupply: string | undefined
	}>({
		enabled: Boolean(address && queryClient),
		notifyOnChangeProps: ["data", "error"],
		queryFn: async () => {
			const rpcQueryClient = await createRPCQueryClient({
				rpcEndpoint: "https://rpc-juno.itastakers.com"
			})

			const tokenBalance = await rpcQueryClient.cosmos.bank.v1beta1.balance({
				address: address!,
				denom
			})

			const tokenSupply = await rpcQueryClient.cosmos.bank.v1beta1.supplyOf({
				denom
			})

			return {
				balance: tokenBalance.balance?.amount,
				totalSupply: tokenSupply.amount?.amount
			}
		},
		queryKey: ["@juno", "tokenInfo", denom],
		refetchOnMount: true,
		refetchOnReconnect: true,
		refetchOnWindowFocus: true,
		retry: false
	})

	return [data, isLoading] as const
}
