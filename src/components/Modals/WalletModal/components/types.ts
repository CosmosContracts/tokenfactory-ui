import { type MouseEventHandler, type ReactNode, type RefObject } from "react"
import { type IconType } from "react-icons"

export enum WalletStatus {
	Connected = "Connected",
	Connecting = "Connecting",
	Disconnected = "Disconnected",
	Error = "Error",
	NotExist = "NotExist",
	Rejected = "Rejected"
}

export type StyleDataType = {
	category: string
	componentName: string
	style: string
}

export type ConnectWalletButtonType = {
	/**
	 * Text to display for button.
	 *
	 * If in need, set false to unset default string.
	 */
	buttonText?: string | false
	/**
	 * Button display disabled.
	 */
	disabled?: boolean
	/**
	 * Props JSX.Element to custom icon.
	 */
	leftIcon?: ReactNode
	/**
	 * Button display spinning indicator.
	 */
	loading?: boolean
	/**
	 * A function called to handle connect.
	 */
	onClick?: MouseEventHandler<HTMLButtonElement>
	/**
	 * Props JSX.Element to custom icon.
	 */
	rightIcon?: ReactNode
}

/* ====================================================== */
/*                   Copy Address Button                  */
/* ====================================================== */
export type CopyAddressType = {
	/**
	 * Text to display for address.
	 */
	address?: string
	/**
	 * Button display disabled.
	 */
	disabled?: boolean
	/**
	 * Button display loading.
	 */
	loading?: boolean
	/**
	 * Set the max length of address.
	 */
	maxDisplayLength?: number
}

export enum LogoStatus {
	Error = "error",
	Loading = "loading",
	Warning = "warning"
}

export enum WalletMode {
	Extension = "extension",
	WalletConnect = "wallet-connect"
}

export enum QRCodeStatus {
	Done = "Done",
	Error = "Error",
	Expired = "Expired",
	Pending = "Pending"
}

export type DownloadInfo = {
	browser?: string
	icon?: IconType
	link: string
	os?: string
}

export type Downloads = {
	default: string
	desktop: DownloadInfo[]
	mobile: DownloadInfo[]
	tablet: DownloadInfo[]
}

export type SimpleModalHeadType = {
	/**
	 * If is true, display the back button.
	 */
	backButton: boolean
	/**
	 * Can add a stable class name to control CSS.
	 */
	className?: string
	/**
	 * A function called to handle modal content display.
	 */
	onBack?: MouseEventHandler<HTMLButtonElement>
	/**
	 * A function called to handle modal close.
	 */
	onClose: MouseEventHandler<HTMLButtonElement>
	/**
	 * Text to display for modal head.
	 */
	title: string
}

export type SimpleModalViewType = {
	modalContent: ReactNode
	modalHead: ReactNode
}

export type SimpleConnectModalType = {
	/**
	 * The ref of element to receive focus when the modal opens.
	 *
	 * Props ref will set default focus on the list first button.
	 *
	 * If is undefined will set focus on close button.
	 */
	initialRef: RefObject<HTMLButtonElement>
	/**
	 * A function called to close modal.
	 */
	modalOnClose: () => void
	/**
	 * If true, the modal will be open.
	 */
	modalOpen: boolean
	/**
	 * The component of display on modal content.
	 */
	modalView: ReactNode
}

export type InstallWalletButtonType = {
	/**
	 * Text to display for button.
	 */
	buttonText?: string
	/**
	 * Button display disabled.
	 */
	disabled: boolean
	/**
	 * Props react-icons item to a custom icon.
	 *
	 * see `IconType` : https://github.com/react-icons/react-icons/blob/master/packages/react-icons/src/iconBase.tsx
	 */
	icon?: IconType
	/**
	 * A function called to handle download wallet.
	 */
	onClick?: MouseEventHandler<HTMLButtonElement>
}

export type ConnectModalContentType = {
	address?: string
	/**
	 * Props the `CopyAddressButton` component.
	 */
	addressButton?: ReactNode
	/**
	 * Props the `ConnectWalletButton` component.
	 */
	bottomButton?: ReactNode
	/**
	 * Describe the status.
	 */
	contentDesc?: string
	/**
	 * Bold text of the header.
	 */
	contentHeader?: string
	/**
	 * Main logo on content.
	 */
	logo?: string
	/**
	 * The border around logo.
	 *
	 * see `LogoStatus` : https://github.com/cosmology-tech/cosmology-ui/blob/main/packages/utils/src/utils/types.ts#L221-L225
	 */
	status?: LogoStatus
	/**
	 * Connected user name.
	 */
	username?: string
	/**
	 * Connected Wallet icon.
	 */
	walletIcon?: string
}

export type QRCodeType = {
	/**
	 * Describe how to connect wallet.
	 */
	description?: string
	/**
	 * The description for the QR code error.
	 */
	errorDesc?: string
	/**
	 * The title describes the QR code error.
	 */
	errorTitle?: string
	/**
	 * Link for connecting wallet from app.
	 */
	link: string
	/**
	 * A function called to handle refresh.
	 */
	onRefresh?: () => void
	/**
	 * QRCode size. Default is `230px`.
	 */
	qrCodeSize?: number
	/**
	 * The QRCode display status.
	 */
	status: QRCodeStatus
}

export type QRCodeDisplayErrorType = {
	/**
	 * A function called to handle refresh.
	 */
	onRefresh: () => void
	/**
	 * QRCode size. Default is `230px`.
	 */
	qrCodeSize?: number
}

export type Wallet = {
	/**
	 * Description when rejected.
	 *
	 * see `Downloads` : https://github.com/cosmology-tech/cosmology-ui/blob/main/packages/utils/src/utils/types.ts#L224-L249
	 */
	downloads?: Downloads
	/**
	 * Wallet icon.
	 */
	logo?: string
	/**
	 * Disabled button when on mobile or tablet.
	 */
	mobileDisabled: boolean
	/**
	 * Connect wallet by extension or wallet-connect.
	 *
	 * see `WalletMode` : https://github.com/cosmology-tech/cosmology-ui/blob/main/packages/utils/src/utils/types.ts#L227-L230
	 */
	mode: WalletMode
	/**
	 * Wallet name.
	 */
	name: string
	/**
	 * A function called to handle clicked button.
	 */
	onClick?: MouseEventHandler<HTMLDivElement>
	/**
	 * Display wallet name.
	 */
	prettyName?: string
	/**
	 * Description when rejected.
	 */
	rejectMessage?: string
	/**
	 * Display sub icon.
	 */
	subLogo?: string
}

export type DisplayWalletListType = {
	/**
	 * The ref of element to receive focus when the modal opens.
	 *
	 * Props ref will set default focus on the list first button.
	 *
	 * If is undefined will set focus on close button.
	 */
	initialFocus: RefObject<HTMLButtonElement>
	/**
	 * Array of wallet list.
	 *
	 * see `Wallet` : https://github.com/cosmology-tech/cosmology-ui/blob/main/packages/utils/src/utils/types.ts#L475-L543
	 */
	walletsData: Wallet[]
}
