import { ModalContentVariants } from "../Motion"
import { type SimpleConnectModalType } from "../types"
import {
	Drawer,
	DrawerContent,
	DrawerOverlay,
	Modal,
	ModalContent,
	ModalOverlay,
	useBreakpoint
} from "@chakra-ui/react"
import { MotionFlex } from "@theme/motion/components"
import { useAnimationControls } from "framer-motion"
import { useEffect } from "react"

export const SimpleConnectModal = ({
	initialRef,
	modalOnClose,
	modalOpen,
	modalView
}: SimpleConnectModalType) => {
	const controls = useAnimationControls()
	const contentControls = useAnimationControls()
	const breakpoint = useBreakpoint({ ssr: false })

	useEffect(() => {
		if (modalOpen) {
			controls.set("initial")
			contentControls.set("initial")
			void controls.start("animate")
			void contentControls.start("animate")
		}
	}, [contentControls, controls, modalOpen, modalView])

	if (breakpoint === "base" || breakpoint === "sm") {
		return (
			<Drawer
				initialFocusRef={initialRef}
				isOpen={modalOpen}
				onClose={modalOnClose}
				placement="bottom"
				size="2xl"
			>
				<DrawerOverlay
					backdropFilter="saturate(50%) blur(6px)"
					bg="transparent"
				/>
				<DrawerContent
					alignSelf="center"
					bg="brand.2"
					shadow="none"
					borderTop="1.6px solid"
					borderColor="border.1"
					h="35lvh"
					backdropFilter="blur(15px)"
					roundedTop="2xl"
					color="white"
					pos="relative"
				>
					<MotionFlex animate={contentControls} variants={ModalContentVariants}>
						{modalView}
					</MotionFlex>
				</DrawerContent>
			</Drawer>
		)
	}

	return (
		<Modal
			initialFocusRef={initialRef}
			isCentered
			isOpen={modalOpen}
			onClose={modalOnClose}
			size="lg"
		>
			<ModalOverlay backdropFilter="blur(10px) saturate(50%)" />
			<ModalContent
				alignSelf="center"
				bg="brand.2"
				rounded="2xl"
				h="35lvh"
				color="white"
				pos="relative"
				shadow="none"
				border="1.6px solid"
				borderColor="border.1"
			>
				<MotionFlex
					h="full"
					animate={contentControls}
					variants={ModalContentVariants}
				>
					{modalView}
				</MotionFlex>
			</ModalContent>
		</Modal>
	)
}
