import { type SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { calculateFee, GasPrice } from "@cosmjs/stargate"
import { osmosis } from "juno-network"

const { MessageComposer, MsgCreateDenom } = osmosis.tokenfactory.v1beta1

export const createToken = async (
	address: string,
	denom: string,
	getSigningCosmWasmClient: () => Promise<SigningCosmWasmClient>
) => {
	const client = await getSigningCosmWasmClient()

	const message = MsgCreateDenom.fromPartial({
		sender: address,
		subdenom: denom
	})

	const transaction = MessageComposer.withTypeUrl.createDenom(message)

	const gasEstimation = await client.simulate(
		address,
		[transaction],
		"Create Token"
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
		"Create Token"
	)
}
