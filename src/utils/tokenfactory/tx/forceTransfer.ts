import { type SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { calculateFee, GasPrice } from "@cosmjs/stargate"
import { osmosis } from "juno-network"

const { MessageComposer, MsgForceTransfer } = osmosis.tokenfactory.v1beta1

export const forceTransfer = async (
	address: string,
	denom: string,
	amount: string,
	toAddress: string,
	getSigningCosmWasmClient: () => Promise<SigningCosmWasmClient>,
	fromAddress?: string
) => {
	const client = await getSigningCosmWasmClient()

	const message = MsgForceTransfer.fromPartial({
		amount: { amount: amount.toString(), denom },
		sender: address,
		transferFromAddress: fromAddress ?? address,
		transferToAddress: toAddress
	})

	const transaction = MessageComposer.withTypeUrl.forceTransfer(message)

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
