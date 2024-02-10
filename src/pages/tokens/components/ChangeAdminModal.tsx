import {
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	FormErrorMessage,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useBreakpoint
} from "@chakra-ui/react"
import { useChain } from "@cosmos-kit/react-lite"
import { useChangeAdmin } from "@hooks/tokenfactory/tx/useChangeAdmin"
import { useSelectedTokenStore } from "@state/selectedTokenState"
import { MotionButton, MotionFlex } from "@theme/motion/components"
import { MotionFormControl } from "@theme/motion/components/MotionFormControl"
import { AnimatePresence } from "framer-motion"
import { type MsgChangeAdmin } from "juno-network/types/codegen/osmosis/tokenfactory/v1beta1/tx"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export const ChangeAdminModal = ({
	isOpen,
	onClose
}: {
	readonly isOpen: boolean
	readonly onClose: () => void
}) => {
	const breakpoint = useBreakpoint({ ssr: false })
	const { address, isWalletConnected } = useChain(
		import.meta.env.VITE_CHAINNETWORK
	)
	const { selectedSubdenom, selectedToken } = useSelectedTokenStore()
	const { isSuccess, mutate: changeAdmin } = useChangeAdmin()
	const {
		formState: { errors, isSubmitting },
		register,
		setValue,
		watch
	} = useForm<MsgChangeAdmin>()

	useEffect(() => {
		if (!address) return
		setValue("sender", address)
	}, [address, setValue])

	useEffect(() => {
		if (!isSuccess) return
		onClose()
	}, [isSuccess, onClose])

	if (breakpoint === "base" || breakpoint === "sm") {
		return (
			<Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
				<DrawerOverlay
					bg="transparent"
					backgroundBlendMode="soft-light"
					backdropFilter="blur(20px)"
				/>
				<DrawerContent
					roundedTop="1.25em"
					shadow="none"
					bg="brand.2"
					backgroundBlendMode="soft-light"
					backdropFilter="blur(20px)"
					color="brand.4"
					border="1.6px solid"
					borderColor="border.1"
					pb="2"
				>
					<DrawerHeader w="full" textAlign="center">
						Change Admin of {selectedSubdenom}
					</DrawerHeader>
					<DrawerCloseButton _hover={{ color: "brand.3" }} />

					<DrawerBody>
						<MotionFlex
							overflow="hidden"
							pos="relative"
							flexDir="column"
							as="form"
							animate="center"
							exit="exit"
							w="full"
							gap="3"
							pb="4"
							initial="enter"
						>
							<MotionFormControl
								display="flex"
								flexDir="column"
								gap="0"
								isRequired
								isInvalid={Boolean(errors.newAdmin)}
							>
								<FormLabel mb="0" htmlFor="newAdmin">
									New Admin
								</FormLabel>
								<FormErrorMessage
									m="0"
									fontWeight="600"
									color="price.1"
									fontSize="sm"
									fontFamily="heading"
								>
									{errors.newAdmin?.message}
								</FormErrorMessage>
								<Input
									id="amount.amount"
									letterSpacing={0.8}
									_placeholder={{ letterSpacing: 0.8 }}
									placeholder={address}
									{...register("newAdmin", {
										required: "Required"
									})}
								/>
							</MotionFormControl>
						</MotionFlex>
						<AnimatePresence>
							{isWalletConnected && (
								<MotionFlex w="full" justify="end" flexDir="row">
									<MotionButton
										isLoading={isSubmitting}
										_hover={{
											_disabled: { filter: "brightness(100%)" },
											filter: "brightness(120%)"
										}}
										bg="rgb(129, 253, 172)"
										color="gray.800"
										_disabled={{
											bg: "gray.400",
											cursor: "not-allowed",
											opacity: 0.5,
											shadow:
												"rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.15) 0px -3px 0px inset"
										}}
										key="airdrop-form-next-button"
										fontWeight="200"
										fontFamily="black"
										minH="2.25rem"
										isDisabled={!watch("newAdmin")}
										h="2.25rem"
										onClick={() => {
											if (!address || !selectedToken) return
											if (!watch("newAdmin")) {
												setValue("newAdmin", address)
											}

											if (!watch("denom")) {
												setValue("denom", selectedToken.base)
											}

											changeAdmin({
												denom: watch("denom"),
												newAdmin: watch("newAdmin")
											})
										}}
										rounded="2xl"
										shadow="rgba(18, 253, 172, 0.5) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(129, 253, 172) 0px 0px 15px inset"
										textTransform="capitalize"
										minW="6rem"
										alignSelf="end"
									>
										Change Admin
									</MotionButton>
								</MotionFlex>
							)}
						</AnimatePresence>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		)
	}

	return (
		<Modal size="xl" isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay
				bg="transparent"
				backgroundBlendMode="soft-light"
				backdropFilter="blur(20px)"
			/>
			<ModalContent
				rounded="1.25em"
				shadow="none"
				bg="brand.2"
				backgroundBlendMode="soft-light"
				backdropFilter="blur(20px)"
				color="brand.4"
				border="1.6px solid"
				borderColor="border.1"
			>
				<ModalHeader>Change Admin of {selectedSubdenom}</ModalHeader>
				<ModalCloseButton _hover={{ color: "brand.3" }} />
				<ModalBody>
					<MotionFlex
						overflow="hidden"
						pos="relative"
						flexDir="column"
						as="form"
						animate="center"
						exit="exit"
						w="full"
						gap="3"
						pb="4"
						initial="enter"
					>
						<MotionFormControl
							display="flex"
							flexDir="column"
							gap="0"
							isRequired
							isInvalid={Boolean(errors.newAdmin)}
						>
							<FormLabel mb="0" htmlFor="newAdmin">
								New Admin
							</FormLabel>
							<FormErrorMessage
								m="0"
								fontWeight="600"
								color="price.1"
								fontSize="sm"
								fontFamily="heading"
							>
								{errors.newAdmin?.message}
							</FormErrorMessage>
							<Input
								id="amount.amount"
								letterSpacing={0.8}
								_placeholder={{ letterSpacing: 0.8 }}
								placeholder={address}
								{...register("newAdmin", {
									required: "Required"
								})}
							/>
						</MotionFormControl>
					</MotionFlex>
					<AnimatePresence>
						{isWalletConnected && (
							<MotionFlex w="full" justify="end" flexDir="row">
								<MotionButton
									isLoading={isSubmitting}
									_hover={{
										_disabled: { filter: "brightness(100%)" },
										filter: "brightness(120%)"
									}}
									bg="rgb(129, 253, 172)"
									color="gray.800"
									_disabled={{
										bg: "gray.400",
										cursor: "not-allowed",
										opacity: 0.5,
										shadow:
											"rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.15) 0px -3px 0px inset"
									}}
									key="airdrop-form-next-button"
									fontWeight="200"
									fontFamily="black"
									minH="2.25rem"
									isDisabled={!watch("newAdmin")}
									h="2.25rem"
									onClick={() => {
										if (!address || !selectedToken) return
										if (!watch("newAdmin")) {
											setValue("newAdmin", address)
										}

										if (!watch("denom")) {
											setValue("denom", selectedToken.base)
										}

										changeAdmin({
											denom: watch("denom"),
											newAdmin: watch("newAdmin")
										})
									}}
									rounded="2xl"
									shadow="rgba(18, 253, 172, 0.5) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(129, 253, 172) 0px 0px 15px inset"
									textTransform="capitalize"
									minW="6rem"
									alignSelf="end"
								>
									Change Admin
								</MotionButton>
							</MotionFlex>
						)}
					</AnimatePresence>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
