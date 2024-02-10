import { type Metadata } from "juno-network/types/codegen/cosmos/bank/v1beta1/bank"
import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

type SelectedTokenState = {
	selectedSubdenom: string
	selectedToken: Metadata
	setSelectedToken: (selectedToken: Metadata, selectedSubdenom: string) => void
}

export const useSelectedTokenStore = create<SelectedTokenState>()(
	devtools(
		persist(
			(set) => ({
				selectedSubdenom: "",
				selectedToken: {
					base: "",
					denomUnits: [
						{
							aliases: [""],
							denom: "",
							exponent: 0
						}
					],
					description: "",
					display: "",
					name: "",
					symbol: "",
					uri: "",
					uriHash: ""
				},
				setSelectedToken: (selectedToken, selectedSubdenom) =>
					set((state) => ({ ...state, selectedSubdenom, selectedToken }))
			}),
			{
				name: "tokenfactory-navState",
				version: 0
			}
		)
	)
)
