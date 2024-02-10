import { type SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { calculateFee, GasPrice } from "@cosmjs/stargate"
import { osmosis } from "juno-network"

const { MessageComposer, MsgBurn } = osmosis.tokenfactory.v1beta1

export const burnToken = async (
	address: string,
	denom: string,
	amount: string,
	getSigningCosmWasmClient: () => Promise<SigningCosmWasmClient>
) => {
	const client = await getSigningCosmWasmClient()

	const message = MsgBurn.fromPartial({
		amount: { amount: amount.toString(), denom },
		sender: address
	})

	const transaction = MessageComposer.withTypeUrl.burn(message)

	const gasEstimation = await client.simulate(
		address,
		[transaction],
		"Burn Token"
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
		"Burn Token"
	)
}
