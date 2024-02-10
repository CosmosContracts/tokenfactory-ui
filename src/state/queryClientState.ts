import { type CosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { type Tendermint37Client } from "@cosmjs/tendermint-rpc"
import { create } from "zustand"

type QueryClientState = {
	cmtClient: Tendermint37Client | null
	queryClient: CosmWasmClient | null
	setCmtClient: (client: Tendermint37Client | null) => void
	setQueryClient: (client: CosmWasmClient | null) => void
}

export const useQueryClientStore = create<QueryClientState>()((set) => ({
	cmtClient: null,
	queryClient: null,
	setCmtClient: (cmtClient) => set((state) => ({ ...state, cmtClient })),
	setQueryClient: (queryClient) => set((state) => ({ ...state, queryClient }))
}))
