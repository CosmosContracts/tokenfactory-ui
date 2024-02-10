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
import { useSendToken } from "@hooks/tokenfactory/tx/useSendToken"
import { useSelectedTokenStore } from "@state/selectedTokenState"
import { MotionButton, MotionFlex } from "@theme/motion/components"
import { MotionFormControl } from "@theme/motion/components/MotionFormControl"
import { AnimatePresence } from "framer-motion"
import { type MsgSend } from "juno-network/types/codegen/cosmos/bank/v1beta1/tx"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export const SendModal = ({
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
	const { isSuccess, mutate: sendToken } = useSendToken()
	const {
		formState: { errors, isSubmitting },
		register,
		setValue,
		watch
	} = useForm<MsgSend>()

	useEffect(() => {
		if (!address) return
		setValue("fromAddress", address)
	}, [address, setValue])

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
						Send {selectedSubdenom}
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
								isInvalid={Boolean(errors.toAddress)}
							>
								<FormLabel mb="0" htmlFor="toAddress">
									Receiver
								</FormLabel>
								<FormErrorMessage
									m="0"
									fontWeight="600"
									color="price.1"
									fontSize="sm"
									fontFamily="heading"
								>
									{errors.toAddress?.message}
								</FormErrorMessage>
								<Input
									id="toAddress"
									letterSpacing={0.8}
									_placeholder={{ letterSpacing: 0.8 }}
									placeholder="0"
									{...register("toAddress", {
										required: "Required"
									})}
								/>
							</MotionFormControl>
							<MotionFormControl
								display="flex"
								flexDir="column"
								gap="0"
								isRequired
								isInvalid={Boolean(errors.amount)}
							>
								<FormLabel mb="0" htmlFor="amount.amount">
									Amount
								</FormLabel>
								<FormErrorMessage
									m="0"
									fontWeight="600"
									color="price.1"
									fontSize="sm"
									fontFamily="heading"
								>
									{errors.amount?.message}
								</FormErrorMessage>
								<Input
									id="amount.0.amount"
									letterSpacing={0.8}
									_placeholder={{ letterSpacing: 0.8 }}
									placeholder="0"
									{...register("amount.0.amount", {
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
										isDisabled={!watch("amount")}
										h="2.25rem"
										onClick={() => {
											if (!address || !selectedToken) return

											if (!watch("toAddress")) {
												setValue("toAddress", address)
											}

											if (!watch("fromAddress")) {
												setValue("fromAddress", address)
											}

											if (!watch("amount.0.denom")) {
												setValue("amount.0.denom", selectedToken.base)
											}

											sendToken({
												amount: watch("amount.0.amount"),
												denom: watch("amount.0.denom"),
												toAddress: watch("toAddress")
											})
										}}
										rounded="2xl"
										shadow="rgba(18, 253, 172, 0.5) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(129, 253, 172) 0px 0px 15px inset"
										textTransform="capitalize"
										minW="6rem"
										alignSelf="end"
									>
										{isSuccess ? "Send More!" : "Send"}
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
				<ModalHeader>Send {selectedSubdenom}</ModalHeader>
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
							isInvalid={Boolean(errors.toAddress)}
						>
							<FormLabel mb="0" htmlFor="toAddress">
								Receiver
							</FormLabel>
							<FormErrorMessage
								m="0"
								fontWeight="600"
								color="price.1"
								fontSize="sm"
								fontFamily="heading"
							>
								{errors.toAddress?.message}
							</FormErrorMessage>
							<Input
								id="toAddress"
								letterSpacing={0.8}
								_placeholder={{ letterSpacing: 0.8 }}
								placeholder="0"
								{...register("toAddress", {
									required: "Required"
								})}
							/>
						</MotionFormControl>
						<MotionFormControl
							display="flex"
							flexDir="column"
							gap="0"
							isRequired
							isInvalid={Boolean(errors.amount)}
						>
							<FormLabel mb="0" htmlFor="amount.amount">
								Amount
							</FormLabel>
							<FormErrorMessage
								m="0"
								fontWeight="600"
								color="price.1"
								fontSize="sm"
								fontFamily="heading"
							>
								{errors.amount?.message}
							</FormErrorMessage>
							<Input
								id="amount.0.amount"
								letterSpacing={0.8}
								_placeholder={{ letterSpacing: 0.8 }}
								placeholder="0"
								{...register("amount.0.amount", {
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
									isDisabled={!watch("amount")}
									h="2.25rem"
									onClick={() => {
										if (!address || !selectedToken) return

										if (!watch("toAddress")) {
											setValue("toAddress", address)
										}

										if (!watch("fromAddress")) {
											setValue("fromAddress", address)
										}

										if (!watch("amount.0.denom")) {
											setValue("amount.0.denom", selectedToken.base)
										}

										sendToken({
											amount: watch("amount.0.amount"),
											denom: watch("amount.0.denom"),
											toAddress: watch("toAddress")
										})
									}}
									rounded="2xl"
									shadow="rgba(18, 253, 172, 0.5) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(129, 253, 172) 0px 0px 15px inset"
									textTransform="capitalize"
									minW="6rem"
									alignSelf="end"
								>
									{isSuccess ? "Send More!" : "Send"}
								</MotionButton>
							</MotionFlex>
						)}
					</AnimatePresence>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
