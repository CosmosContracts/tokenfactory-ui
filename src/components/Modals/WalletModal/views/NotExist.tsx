import { LogoStatus } from "../components"
import { InstallWalletButton } from "../components/buttons/InstallWalletButton"
import { SimpleDisplayModalContent } from "../components/ui/ModalContent"
import { SimpleModalHead } from "../components/ui/ModalHead"
import { SimpleModalView } from "../components/ui/ModalView"
import { type WalletViewProps } from "@cosmos-kit/core"
import { useCallback } from "react"
import { FaDownload } from "react-icons/fa6"

export const NotExistView = ({
	onClose,
	onReturn,
	wallet
}: WalletViewProps) => {
	const {
		downloadInfo,
		walletInfo: { logo, prettyName }
	} = wallet

	const onInstall = useCallback(() => {
		if (downloadInfo?.link) {
			window.open(downloadInfo?.link, "_blank")
		}
	}, [downloadInfo])

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
				<InstallWalletButton
					buttonText={`Install ${prettyName}`}
					disabled={Boolean(!downloadInfo)}
					icon={FaDownload}
					onClick={() => onInstall()}
				/>
			}
			contentDesc={
				downloadInfo?.link
					? `If ${prettyName} is installed on your device, please refresh this page or follow the browser instructions.`
					: "Download link not provided."
			}
			contentHeader={`${prettyName} could not be found.`}
			logo={logo as string}
			status={LogoStatus.Error}
		/>
	)

	return <SimpleModalView modalContent={modalContent} modalHead={modalHead} />
}
