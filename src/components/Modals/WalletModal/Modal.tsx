import { SimpleConnectModal } from "./components/ui/ConnectModal"
import {
	ModalView,
	type ModalViews,
	State,
	type WalletListViewProps,
	type WalletModalProps,
	WalletStatus,
	type WalletViewProps
} from "@cosmos-kit/core"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

export const WalletModal = ({
	isOpen,
	modalViews,
	setOpen,
	walletRepo
}: WalletModalProps & { readonly modalViews: ModalViews }) => {
	const initialFocus = useRef()
	const [currentView, setCurrentView] = useState<ModalView>(
		ModalView.WalletList
	)
	const [qrState, setQRState] = useState<State>(State.Init)
	const [qrMessage, setQRMessage] = useState<string>("")

	const current = walletRepo?.current
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	;(current?.client as any)?.setActions?.({
		qrUrl: {
			message: setQRMessage,
			state: setQRState
		}
	})
	const walletStatus = current?.walletStatus

	useEffect(() => {
		if (isOpen) {
			switch (walletStatus) {
				case WalletStatus.Connecting:
					if (qrState === State.Init) {
						setCurrentView(ModalView.Connecting)
					} else {
						setCurrentView(ModalView.QRCode)
					}

					break
				case WalletStatus.Connected:
					setCurrentView(ModalView.Connected)
					break
				case WalletStatus.Error:
					if (qrState === State.Init) {
						setCurrentView(ModalView.Error)
					} else {
						setCurrentView(ModalView.QRCode)
					}

					break
				case WalletStatus.Rejected:
					setCurrentView(ModalView.Rejected)
					break
				case WalletStatus.NotExist:
					setCurrentView(ModalView.NotExist)
					break
				case WalletStatus.Disconnected:
					setCurrentView(ModalView.WalletList)
					break
				default:
					setCurrentView(ModalView.WalletList)
					break
			}
		}
	}, [isOpen, qrMessage, qrState, walletStatus])

	const onCloseModal = useCallback(() => {
		setOpen(false)
		if (walletStatus === "Connecting") {
			void current?.disconnect()
		}
	}, [current, setOpen, walletStatus])

	const onReturn = useCallback(() => {
		setCurrentView(ModalView.WalletList)
	}, [setCurrentView])

	const modalView = useMemo(() => {
		let ViewComponent

		switch (currentView) {
			case ModalView.WalletList:
				ViewComponent = modalViews[`${currentView}`] as (
					props: WalletListViewProps
				) => JSX.Element
				return (
					<ViewComponent
						onClose={onCloseModal}
						wallets={walletRepo?.wallets ?? []}
					/>
				)
			default:
				if (!current) return <div />
				ViewComponent = modalViews[`${currentView}`] as (
					props: WalletViewProps
				) => JSX.Element
				return (
					<ViewComponent
						onClose={onCloseModal}
						onReturn={onReturn}
						wallet={current}
					/>
				)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		current,
		currentView,
		onCloseModal,
		onReturn,
		qrState,
		walletRepo,
		walletStatus
	])

	return (
		<SimpleConnectModal
			modalOnClose={onCloseModal}
			modalOpen={isOpen}
			modalView={modalView}
			// @ts-expect-error types
			initialRef={initialFocus}
		/>
	)
}
