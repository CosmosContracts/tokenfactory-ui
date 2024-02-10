import { ConnectWalletButton } from "../components/buttons/ConnectWalletButton"
import { SimpleDisplayModalContent } from "../components/ui/ModalContent"
import { SimpleModalHead } from "../components/ui/ModalHead"
import { SimpleModalView } from "../components/ui/ModalView"
import { Icon } from "@chakra-ui/react"
import { type WalletViewProps } from "@cosmos-kit/core"
import { useCallback } from "react"
import { FaReply } from "react-icons/fa"

export const ConnectedView = ({
	onClose,
	onReturn,
	wallet
}: WalletViewProps) => {
	const {
		address,
		walletInfo: { logo, prettyName }
	} = wallet

	const onDisconnect = useCallback(
		async () => await wallet.disconnect(true),
		[wallet]
	)

	const modalHead = (
		<SimpleModalHead
			backButton
			onBack={onReturn}
			onClose={onClose}
			title={prettyName}
		/>
	)

	const modalContent = (
		<SimpleDisplayModalContent
			bottomButton={
				<ConnectWalletButton
					buttonText="Disconnect"
					leftIcon={<Icon as={FaReply} />}
					onClick={onDisconnect}
				/>
			}
			address={address}
			logo={logo as string}
		/>
	)

	return <SimpleModalView modalContent={modalContent} modalHead={modalHead} />
}
