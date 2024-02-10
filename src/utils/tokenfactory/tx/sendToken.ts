import { type SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { calculateFee, GasPrice } from "@cosmjs/stargate"
import { cosmos } from "juno-network"
// import { type MsgSend } from "juno-network/types/codegen/cosmos/bank/v1beta1/tx"

const { MessageComposer, MsgSend } = cosmos.bank.v1beta1

export const sendToken = async (
	fromAddress: string,
	toAddress: string,
	denom: string,
	amount: string,
	getSigningCosmWasmClient: () => Promise<SigningCosmWasmClient>
) => {
	const client = await getSigningCosmWasmClient()

	// const message: MsgSend = {
	// 	amount: [{ amount: amount.toString(), denom }],
	// 	fromAddress,
	// 	toAddress
	// }

	const message = MsgSend.fromPartial({
		amount: [{ amount: amount.toString(), denom }],
		fromAddress,
		toAddress
	})

	const transaction = MessageComposer.withTypeUrl.send(message)

	const gasEstimation = await client.simulate(
		fromAddress,
		[transaction],
		"Send Token"
	)
	if (!gasEstimation) {
		throw new Error("Gas Estimation failed...")
	}

	const fee = calculateFee(
		Math.round(gasEstimation * 1.5),
		GasPrice.fromString("0.075ujuno")
	)

	return await client.signAndBroadcast(
		fromAddress,
		[transaction],
		fee,
		"Send Token"
	)
}
