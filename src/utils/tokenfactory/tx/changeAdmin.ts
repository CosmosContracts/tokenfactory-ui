import { type SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { calculateFee, GasPrice } from "@cosmjs/stargate"
import { osmosis } from "juno-network"

const { MessageComposer, MsgChangeAdmin } = osmosis.tokenfactory.v1beta1

export const changeAdmin = async (
	address: string,
	newAdmin: string,
	denom: string,
	getSigningCosmWasmClient: () => Promise<SigningCosmWasmClient>
) => {
	const client = await getSigningCosmWasmClient()

	const message = MsgChangeAdmin.fromPartial({
		denom,
		newAdmin,
		sender: address
	})

	const transaction = MessageComposer.withTypeUrl.changeAdmin(message)

	const gasEstimation = await client.simulate(
		address,
		[transaction],
		"Change Token Admin"
	)
	if (!gasEstimation) {
		throw new Error("Gas Estimation failed...")
	}

	const fee = calculateFee(
		Math.round(gasEstimation * 1.5),
		GasPrice.fromString("0.075ujuno")
	)

	return await client.signAndBroadcast(
		address,
		[transaction],
		fee,
		"Change Token Admin"
	)
}
