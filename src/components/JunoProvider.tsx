/* eslint-disable no-case-declarations */
import { getModal } from "./Modals/WalletModal/getModal"
import { type GeneratedType, Registry } from "@cosmjs/proto-signing"
import { AminoTypes, GasPrice } from "@cosmjs/stargate"
import { wallets as cosmostationWallets } from "@cosmos-kit/cosmostation"
import { wallets as keplrWallets } from "@cosmos-kit/keplr"
import { wallets as leapWallets } from "@cosmos-kit/leap"
import { wallets as ledgerWallets } from "@cosmos-kit/ledger"
import { ChainProvider } from "@cosmos-kit/react-lite"
import { wallets as stationWallets } from "@cosmos-kit/station"
import { useSetupJuno } from "@hooks/rpc/useSetupJuno"
import { junoAssetList } from "@utils/constants/assetList"
import { junoChainInfo } from "@utils/constants/chainInfo"
import { useMount } from "ahooks"
import {
	cosmosAminoConverters,
	cosmosProtoRegistry,
	cosmwasmAminoConverters,
	cosmwasmProtoRegistry,
	ibcAminoConverters,
	ibcProtoRegistry,
	junoAminoConverters,
	junoProtoRegistry,
	osmosisAminoConverters,
	osmosisProtoRegistry
} from "juno-network"
import { type PropsWithChildren } from "react"

const protoRegistry: ReadonlyArray<[string, GeneratedType]> = [
	...cosmosProtoRegistry,
	...cosmwasmProtoRegistry,
	...ibcProtoRegistry,
	...osmosisProtoRegistry,
	...junoProtoRegistry
]

const aminoConverters = {
	...cosmosAminoConverters,
	...cosmwasmAminoConverters,
	...ibcAminoConverters,
	...osmosisAminoConverters,
	...junoAminoConverters
}

export const JunoProvider = ({ children }: PropsWithChildren) => {
	const { mutate: setupJuno } = useSetupJuno()

	const registry = new Registry(protoRegistry)
	const aminoTypes = new AminoTypes(aminoConverters)

	useMount(() => {
		setupJuno()
	})

	return (
		<ChainProvider
			// @ts-expect-error chain-registry types are outdated, works nonetheless
			assetLists={[junoAssetList]}
			// @ts-expect-error chain-registry types are outdated, works nonetheless
			chains={[junoChainInfo]}
			endpointOptions={{
				endpoints: {
					juno: {
						rpc: ["https://rpc-juno.itastakers.com"]
					}
				},
				isLazy: true
			}}
			disableIframe
			key="junoProvider"
			signerOptions={{
				preferredSignType: () => {
					return "direct"
				},
				signingCosmwasm: () => {
					return {
						aminoTypes,
						broadcastPollIntervalMs: 500,
						broadcastTimeoutMs: 10_000,
						gasPrice: GasPrice.fromString("0.075ujuno"),
						registry
					}
				},
				signingStargate: () => {
					return {
						aminoTypes,
						broadcastPollIntervalMs: 500,
						broadcastTimeoutMs: 10_000,
						gasPrice: GasPrice.fromString("0.075ujuno"),
						registry
					}
				}
			}}
			walletConnectOptions={{
				signClient: {
					metadata: {
						description: "Juno Network - TokenFactory",
						icons: ["/assets/logo_transparent.svg"],
						name: "Juno Network - TokenFactory",
						url: "https://factory.junonetwork.io"
					},
					name: "Juno TokenFactory",
					projectId: import.meta.env.VITE_WCCLIENT as string,
					relayUrl: "wss://relay.walletconnect.org"
				}
			}}
			walletModal={getModal()}
			wallets={[
				...keplrWallets,
				...leapWallets,
				...cosmostationWallets,
				...ledgerWallets,
				...stationWallets
			]}
		>
			{children}
		</ChainProvider>
	)
}
