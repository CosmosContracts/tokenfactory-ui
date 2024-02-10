import { useChain } from "@cosmos-kit/react-lite"
import { useMutation } from "@tanstack/react-query"
import { sendToken } from "@utils/tokenfactory/tx/sendToken"
import DefaultToast from "components/Toasts/DefaultToast"
import SuccessToast from "components/Toasts/SuccessToast"
import { useRef } from "react"
import { type Id, toast } from "react-toastify"
import { handleTxError } from "utils/ui/handleTxError"

export const useSendToken = () => {
	const { address, getSigningCosmWasmClient, isWalletConnected } = useChain(
		import.meta.env.VITE_CHAINNETWORK
	)

	const toastId = useRef<Id>()

	return useMutation({
		mutationFn: async ({
			amount,
			denom,
			toAddress
		}: {
			amount: string
			denom: string
			toAddress: string
		}) => {
			if (!isWalletConnected || !address) {
				throw new Error("Please connect your wallet.")
			}

			toastId.current = toast(
				DefaultToast({ isPromise: true, toastText: "Sending Token..." }),
				{
					autoClose: false,
					type: "default"
				}
			)

			return await sendToken(
				address,
				toAddress,
				denom,
				amount,
				getSigningCosmWasmClient
			)
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
				render: SuccessToast({ data, txType: "Sent Tokens!" }),
				type: "success"
			})
		}
	})
}
