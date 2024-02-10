import {
	HttpBatchClient,
	type HttpBatchClientOptions,
	type HttpEndpoint,
	type RpcClient,
	Tendermint37Client
} from "@cosmjs/tendermint-rpc"

export const connectWithBatchClient = async (
	endpoint: HttpEndpoint | string,
	options?: Partial<HttpBatchClientOptions>
): Promise<Tendermint37Client> => {
	const rpcClient: RpcClient = new HttpBatchClient(endpoint, options)
	// eslint-disable-next-line canonical/id-match
	const tmClient = await Tendermint37Client.create(rpcClient)
	return tmClient
}
