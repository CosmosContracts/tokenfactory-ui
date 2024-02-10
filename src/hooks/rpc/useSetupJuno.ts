import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { connectWithBatchClient } from "@services/httpBatchClient"
import { useQueryClientStore } from "@state/queryClientState"
import { useMutation } from "@tanstack/react-query"

export const useSetupJuno = () => {
	const { setCmtClient, setQueryClient } = useQueryClientStore()
	const rpcEndpoint = "https://rpc-juno.itastakers.com"

	const mutation = useMutation({
		mutationFn: async () => {
			try {
				const tendermintClient = await connectWithBatchClient(rpcEndpoint)
				const cosmwasmClient = await CosmWasmClient.create(tendermintClient)

				setCmtClient(tendermintClient)
				setQueryClient(cosmwasmClient)
			} catch (error) {
				setCmtClient(null)
				setQueryClient(null)
				throw new Error(
					"Error while connecting to Juno over RPC. Error: " + error
				)
			}
		},
		onSuccess: () => {
			// eslint-disable-next-line no-console
			console.log("Connected to Juno over RPC")
		}
	})

	return mutation
}
