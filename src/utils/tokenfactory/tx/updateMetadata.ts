import { type SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { calculateFee, GasPrice } from "@cosmjs/stargate"
import { osmosis } from "juno-network"
import { type MsgSetDenomMetadata } from "juno-network/types/codegen/osmosis/tokenfactory/v1beta1/tx"

const { MessageComposer, MsgSetDenomMetadata: MessageSetDenomMeta } =
	osmosis.tokenfactory.v1beta1

export const updateMetadata = async (
	message_: MsgSetDenomMetadata,
	getSigningCosmWasmClient: () => Promise<SigningCosmWasmClient>
) => {
	const client = await getSigningCosmWasmClient()

	const message = MessageSetDenomMeta.fromPartial(message_)

	const transaction = MessageComposer.withTypeUrl.setDenomMetadata(message)

	const gasEstimation = await client.simulate(
		message_.sender,
		[transaction],
		"Update Token Metadata"
	)
	if (!gasEstimation) {
		throw new Error("Gas Estimation failed...")
	}

	const fee = calculateFee(
		Math.round(gasEstimation * 1.5),
		GasPrice.fromString("0.075ujuno")
	)

	return await client.signAndBroadcast(
		message_.sender,
		[transaction],
		fee,
		"Update Token Metadata"
	)
}
