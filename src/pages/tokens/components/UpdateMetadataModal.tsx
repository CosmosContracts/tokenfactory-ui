import { FieldArray } from "./Form/FieldArray"
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
	Textarea,
	useBreakpoint
} from "@chakra-ui/react"
import { useChain } from "@cosmos-kit/react-lite"
import { useUpdateMetadata } from "@hooks/tokenfactory/tx/useUpdateMetadata"
import { useSelectedTokenStore } from "@state/selectedTokenState"
import { MotionButton, MotionFlex } from "@theme/motion/components"
import { MotionFormControl } from "@theme/motion/components/MotionFormControl"
import { AnimatePresence } from "framer-motion"
import { type MsgSetDenomMetadata } from "juno-network/types/codegen/osmosis/tokenfactory/v1beta1/tx"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

export const UpdateMetadataModal = ({
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
	const { isSuccess, mutate: updateMetadata } = useUpdateMetadata()

	const defaultValues: MsgSetDenomMetadata = {
		metadata: {
			base: selectedToken.base,
			denomUnits: selectedToken.denomUnits,
			description: selectedToken.description,
			display: selectedToken.display,
			name: selectedToken.name,
			symbol: selectedToken.symbol,
			uri: selectedToken.uri,
			uriHash: selectedToken.uriHash
		},
		sender: address!
	}

	const {
		control,
		formState: { errors, isSubmitting },
		getValues,
		register,
		setValue,
		watch
	} = useForm<MsgSetDenomMetadata>({
		defaultValues
	})

	useEffect(() => {
		if (!address) return
		setValue("sender", address)
		setValue("metadata.base", selectedToken?.base!)
	}, [address, selectedToken?.base, setValue])

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
						Update {selectedSubdenom}
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
								isInvalid={Boolean(errors.metadata?.name)}
							>
								<FormLabel mb="0" htmlFor="metadata.name">
									Token Name
								</FormLabel>
								<FormErrorMessage
									m="0"
									fontWeight="600"
									color="price.1"
									fontSize="sm"
									fontFamily="heading"
								>
									{errors.metadata?.name?.message}
								</FormErrorMessage>
								<Input
									id="metadata.name"
									letterSpacing={0.8}
									_placeholder={{ letterSpacing: 0.8 }}
									placeholder="0"
									{...register("metadata.name", {
										required: "Required"
									})}
								/>
							</MotionFormControl>

							<MotionFormControl
								display="flex"
								flexDir="column"
								gap="0"
								isRequired
								isInvalid={Boolean(errors.metadata?.symbol)}
							>
								<FormLabel mb="0" htmlFor="metadata.symbol">
									Token Symbol (Ticker)
								</FormLabel>
								<FormErrorMessage
									m="0"
									fontWeight="600"
									color="price.1"
									fontSize="sm"
									fontFamily="heading"
								>
									{errors.metadata?.symbol?.message}
								</FormErrorMessage>
								<Input
									id="metadata.name"
									letterSpacing={0.8}
									_placeholder={{ letterSpacing: 0.8 }}
									placeholder="0"
									{...register("metadata.symbol", {
										required: "Required"
									})}
								/>
							</MotionFormControl>

							<MotionFormControl
								display="flex"
								flexDir="column"
								gap="0"
								isRequired
								isInvalid={Boolean(errors.metadata?.display)}
							>
								<FormLabel mb="0" htmlFor="metadata.display">
									Display Denom (JUNO, ATOM, ...)
								</FormLabel>
								<FormErrorMessage
									m="0"
									fontWeight="600"
									color="price.1"
									fontSize="sm"
									fontFamily="heading"
								>
									{errors.metadata?.display?.message}
								</FormErrorMessage>
								<Input
									id="metadata.base"
									letterSpacing={0.8}
									_placeholder={{ letterSpacing: 0.8 }}
									placeholder="0"
									{...register("metadata.display", {
										required: "Required"
									})}
								/>
							</MotionFormControl>

							<FieldArray
								{...{
									control,
									defaultValues,
									errors,
									getValues,
									register,
									setValue
								}}
							/>

							<MotionFormControl
								display="flex"
								flexDir="column"
								gap="0"
								isInvalid={Boolean(errors.metadata?.description)}
							>
								<FormLabel mb="0" htmlFor="metadata.description">
									Description
								</FormLabel>
								<FormErrorMessage
									m="0"
									fontWeight="600"
									color="price.1"
									fontSize="sm"
									fontFamily="heading"
								>
									{errors.metadata?.description?.message}
								</FormErrorMessage>
								<Textarea
									id="metadata.description"
									letterSpacing={0.8}
									_placeholder={{ letterSpacing: 0.8 }}
									placeholder="Short description of your token..."
									{...register("metadata.description")}
								/>
							</MotionFormControl>

							<MotionFormControl
								display="flex"
								flexDir="column"
								gap="0"
								isInvalid={Boolean(errors.metadata?.uri)}
							>
								<FormLabel mb="0" htmlFor="metadata.uri">
									Token Whitepaper URL
								</FormLabel>
								<FormErrorMessage
									m="0"
									fontWeight="600"
									color="price.1"
									fontSize="sm"
									fontFamily="heading"
								>
									{errors.metadata?.uri?.message}
								</FormErrorMessage>
								<Input
									id="metadata.uri"
									letterSpacing={0.8}
									_placeholder={{ letterSpacing: 0.8 }}
									placeholder="https://mynewtoken.com/whitepaper.pdf"
									{...register("metadata.uri")}
								/>
							</MotionFormControl>

							<MotionFormControl
								display="flex"
								flexDir="column"
								gap="0"
								isInvalid={Boolean(errors.metadata?.uriHash)}
							>
								<FormLabel mb="0" htmlFor="metadata.uriHash">
									Token Whitepaper IPFS Hash
								</FormLabel>
								<FormErrorMessage
									m="0"
									fontWeight="600"
									color="price.1"
									fontSize="sm"
									fontFamily="heading"
								>
									{errors.metadata?.uriHash?.message}
								</FormErrorMessage>
								<Input
									id="metadata.uriHash"
									letterSpacing={0.8}
									_placeholder={{ letterSpacing: 0.8 }}
									placeholder="QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j"
									{...register("metadata.uriHash")}
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
										mb="2"
										pos="relative"
										key="airdrop-form-next-button"
										fontWeight="200"
										fontFamily="black"
										minH="2.25rem"
										isDisabled={!watch("sender")}
										right="0"
										h="2.25rem"
										onClick={() => {
											if (!address || !selectedToken) return

											if (!watch("metadata.symbol")) {
												setValue("metadata.symbol", watch("metadata.display"))
											}

											updateMetadata(watch())
										}}
										rounded="2xl"
										shadow="rgba(18, 253, 172, 0.5) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(129, 253, 172) 0px 0px 15px inset"
										textTransform="capitalize"
										minW="6rem"
									>
										{isSuccess ? "Update Again!" : "Update"}
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
		<Modal
			size="xl"
			isOpen={isOpen}
			onClose={onClose}
			isCentered
			scrollBehavior="inside"
		>
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
				overflowX="hidden"
			>
				<ModalHeader>Update {selectedSubdenom}</ModalHeader>
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
							isInvalid={Boolean(errors.metadata?.name)}
						>
							<FormLabel mb="0" htmlFor="metadata.name">
								Token Name
							</FormLabel>
							<FormErrorMessage
								m="0"
								fontWeight="600"
								color="price.1"
								fontSize="sm"
								fontFamily="heading"
							>
								{errors.metadata?.name?.message}
							</FormErrorMessage>
							<Input
								id="metadata.name"
								letterSpacing={0.8}
								_placeholder={{ letterSpacing: 0.8 }}
								placeholder="0"
								{...register("metadata.name", {
									required: "Required"
								})}
							/>
						</MotionFormControl>

						<MotionFormControl
							display="flex"
							flexDir="column"
							gap="0"
							isRequired
							isInvalid={Boolean(errors.metadata?.symbol)}
						>
							<FormLabel mb="0" htmlFor="metadata.symbol">
								Token Symbol (Ticker)
							</FormLabel>
							<FormErrorMessage
								m="0"
								fontWeight="600"
								color="price.1"
								fontSize="sm"
								fontFamily="heading"
							>
								{errors.metadata?.symbol?.message}
							</FormErrorMessage>
							<Input
								id="metadata.name"
								letterSpacing={0.8}
								_placeholder={{ letterSpacing: 0.8 }}
								placeholder="0"
								{...register("metadata.symbol", {
									required: "Required"
								})}
							/>
						</MotionFormControl>

						<MotionFormControl
							display="flex"
							flexDir="column"
							gap="0"
							isRequired
							isInvalid={Boolean(errors.metadata?.display)}
						>
							<FormLabel mb="0" htmlFor="metadata.display">
								Display Denom (JUNO, ATOM, ...)
							</FormLabel>
							<FormErrorMessage
								m="0"
								fontWeight="600"
								color="price.1"
								fontSize="sm"
								fontFamily="heading"
							>
								{errors.metadata?.display?.message}
							</FormErrorMessage>
							<Input
								id="metadata.base"
								letterSpacing={0.8}
								_placeholder={{ letterSpacing: 0.8 }}
								placeholder="0"
								{...register("metadata.display", {
									required: "Required"
								})}
							/>
						</MotionFormControl>

						<FieldArray
							{...{
								control,
								defaultValues,
								errors,
								getValues,
								register,
								setValue
							}}
						/>

						<MotionFormControl
							display="flex"
							flexDir="column"
							gap="0"
							isInvalid={Boolean(errors.metadata?.description)}
						>
							<FormLabel mb="0" htmlFor="metadata.description">
								Description
							</FormLabel>
							<FormErrorMessage
								m="0"
								fontWeight="600"
								color="price.1"
								fontSize="sm"
								fontFamily="heading"
							>
								{errors.metadata?.description?.message}
							</FormErrorMessage>
							<Textarea
								id="metadata.description"
								letterSpacing={0.8}
								_placeholder={{ letterSpacing: 0.8 }}
								placeholder="Short description of your token..."
								{...register("metadata.description")}
							/>
						</MotionFormControl>

						<MotionFormControl
							display="flex"
							flexDir="column"
							gap="0"
							isInvalid={Boolean(errors.metadata?.uri)}
						>
							<FormLabel mb="0" htmlFor="metadata.uri">
								Token Whitepaper URL
							</FormLabel>
							<FormErrorMessage
								m="0"
								fontWeight="600"
								color="price.1"
								fontSize="sm"
								fontFamily="heading"
							>
								{errors.metadata?.uri?.message}
							</FormErrorMessage>
							<Input
								id="metadata.uri"
								letterSpacing={0.8}
								_placeholder={{ letterSpacing: 0.8 }}
								placeholder="https://mynewtoken.com/whitepaper.pdf"
								{...register("metadata.uri")}
							/>
						</MotionFormControl>

						<MotionFormControl
							display="flex"
							flexDir="column"
							gap="0"
							isInvalid={Boolean(errors.metadata?.uriHash)}
						>
							<FormLabel mb="0" htmlFor="metadata.uriHash">
								Token Whitepaper IPFS Hash
							</FormLabel>
							<FormErrorMessage
								m="0"
								fontWeight="600"
								color="price.1"
								fontSize="sm"
								fontFamily="heading"
							>
								{errors.metadata?.uriHash?.message}
							</FormErrorMessage>
							<Input
								id="metadata.uriHash"
								letterSpacing={0.8}
								_placeholder={{ letterSpacing: 0.8 }}
								placeholder="QmTp2hEo8eXRp6wg7jXv1BLCMh5a4F3B7buAUZNZUu772j"
								{...register("metadata.uriHash")}
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
									mb="2"
									pos="relative"
									key="airdrop-form-next-button"
									fontWeight="200"
									fontFamily="black"
									minH="2.25rem"
									isDisabled={!watch("sender")}
									right="0"
									h="2.25rem"
									onClick={() => {
										if (!address || !selectedToken) return

										if (!watch("metadata.symbol")) {
											setValue("metadata.symbol", watch("metadata.display"))
										}

										updateMetadata(watch())
									}}
									rounded="2xl"
									shadow="rgba(18, 253, 172, 0.5) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(129, 253, 172) 0px 0px 15px inset"
									textTransform="capitalize"
									minW="6rem"
								>
									{isSuccess ? "Update Again!" : "Update"}
								</MotionButton>
							</MotionFlex>
						)}
					</AnimatePresence>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}
