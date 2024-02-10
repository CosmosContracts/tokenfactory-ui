import { useChain } from "@cosmos-kit/react-lite"
import { useMutation } from "@tanstack/react-query"
import { burnToken } from "@utils/tokenfactory/tx/burnToken"
import DefaultToast from "components/Toasts/DefaultToast"
import SuccessToast from "components/Toasts/SuccessToast"
import { useRef } from "react"
import { type Id, toast } from "react-toastify"
import { handleTxError } from "utils/ui/handleTxError"

export const useBurnToken = () => {
	const { address, getSigningCosmWasmClient, isWalletConnected } = useChain(
		import.meta.env.VITE_CHAINNETWORK
	)

	const toastId = useRef<Id>()

	return useMutation({
		mutationFn: async ({
			amount,
			denom
		}: {
			amount: string
			denom: string
		}) => {
			if (!isWalletConnected || !address) {
				throw new Error("Please connect your wallet.")
			}

			toastId.current = toast(
				DefaultToast({ isPromise: true, toastText: "Burning Token..." }),
				{
					autoClose: false,
					type: "default"
				}
			)

			return await burnToken(address, denom, amount, getSigningCosmWasmClient)
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
				render: SuccessToast({ data, txType: "Burned Tokens!" }),
				type: "success"
			})
		}
	})
}
