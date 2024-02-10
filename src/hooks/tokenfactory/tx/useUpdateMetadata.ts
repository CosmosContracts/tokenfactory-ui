import { useChain } from "@cosmos-kit/react-lite"
import { useMutation } from "@tanstack/react-query"
import { updateMetadata } from "@utils/tokenfactory/tx/updateMetadata"
import DefaultToast from "components/Toasts/DefaultToast"
import SuccessToast from "components/Toasts/SuccessToast"
import { type MsgSetDenomMetadata } from "juno-network/types/codegen/osmosis/tokenfactory/v1beta1/tx"
import { useRef } from "react"
import { type Id, toast } from "react-toastify"
import { handleTxError } from "utils/ui/handleTxError"

export const useUpdateMetadata = () => {
	const { address, getSigningCosmWasmClient, isWalletConnected } = useChain(
		import.meta.env.VITE_CHAINNETWORK
	)

	const toastId = useRef<Id>()

	return useMutation({
		mutationFn: async (message: MsgSetDenomMetadata) => {
			if (!isWalletConnected || !address) {
				throw new Error("Please connect your wallet.")
			}

			toastId.current = toast(
				DefaultToast({
					isPromise: true,
					toastText: "Updating Token Metadata..."
				}),
				{
					autoClose: false,
					type: "default"
				}
			)

			return await updateMetadata(message, getSigningCosmWasmClient)
		},
		onError(error) {
			handleTxError({ error, toastId })
		},
		onSuccess(data) {
			toast.update(toastId.current!, {
				autoClose: 5_000,
				progressStyle: {
					background: "rgba(2, 226, 150, 1)",
					boxShadow: "var(--chakra-shadows-md)",
					height: "0.6rem"
				},
				render: SuccessToast({ data, txType: "Updated Token Metadata!" }),
				type: "success"
			})
		}
	})
}
