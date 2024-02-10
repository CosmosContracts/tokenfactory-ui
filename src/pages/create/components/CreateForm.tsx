/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable complexity */
/* eslint-disable react-hooks/exhaustive-deps */
import { SignUpStepper } from "./CreateFormStepper"
import {
	chakra,
	FormErrorMessage,
	FormLabel,
	GridItem,
	Heading,
	Input,
	Text,
	VStack
} from "@chakra-ui/react"
import { ConnectButton } from "@components/ConnectButton"
import { useChain } from "@cosmos-kit/react-lite"
import { useCreateToken } from "@hooks/tokenfactory/tx/useCreateToken"
import { useActiveFormStepStore } from "@state/activeFormStepState"
import {
	MotionButton,
	MotionFlex,
	MotionIconButton,
	MotionImage
} from "@theme/motion/components"
import { MotionFormControl } from "@theme/motion/components/MotionFormControl"
import { MotionGrid } from "@theme/motion/components/MotionGrid"
import {
	accountCardCover,
	button,
	godrays,
	heading,
	stack,
	stackHeader,
	step
} from "@theme/motion/variants/stepper"
import { type CreateFormValues } from "@utils/tokenfactory/types"
import truncateAddress from "@utils/ui/truncateAddress"
import { useUpdateEffect } from "ahooks"
import { BigNumber } from "bignumber.js"
import { AnimatePresence, useAnimation } from "framer-motion"
import { type MsgCreateDenom } from "juno-network/types/codegen/osmosis/tokenfactory/v1beta1/tx"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { FaArrowLeft } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"

export const CreateForm = () => {
	const stackControls = useAnimation()
	const stackHeaderControls = useAnimation()
	const buttonControls = useAnimation()
	const accountCardCoverControls = useAnimation()
	const accountCardInfoControls = useAnimation()
	const headingControls = useAnimation()
	const godraysControls = useAnimation()

	const navigate = useNavigate()

	const { address, isWalletConnected, username } = useChain(
		import.meta.env.VITE_CHAINNETWORK
	)

	const { activeStep, completed, setActiveStep, setCompleted } =
		useActiveFormStepStore()

	const {
		formState: { errors, isSubmitting },
		register,
		reset,
		setValue,
		watch
	} = useForm<MsgCreateDenom>()

	const { isSuccess, mutate: createToken } = useCreateToken()

	const paginate = useCallback(
		(newDirection: number, setPage?: boolean) => {
			setActiveStep([
				setPage ? newDirection : activeStep[0] + newDirection,
				setPage
					? BigNumber(newDirection - activeStep[0]).isNegative()
						? -1
						: 1
					: newDirection
			])
		},
		[activeStep]
	)

	// Show/hide back button
	useUpdateEffect(() => {
		void stackControls.start(`step${activeStep[0]}`)

		switch (activeStep[0]) {
			case 1:
				void stackHeaderControls.start("hidden")
				break
			default:
				void stackHeaderControls.start("show")
				break
		}

		void buttonControls.start(`step${activeStep[0]}`)
	}, [activeStep])

	useUpdateEffect(() => {
		if (isSuccess) {
			void accountCardCoverControls.start("confirmed")
			void accountCardInfoControls.start("confirmed")
			void headingControls.start("confirmed")
			void godraysControls.start("confirmed")
			void stackHeaderControls.start("hidden")
			void buttonControls.start("completed")
			setCompleted(true)
		}
	}, [isSuccess])

	useEffect(() => {
		if (!isWalletConnected || !address) {
			reset()
			paginate(1, true)
		} else {
			setValue("sender", address)
		}
	}, [isWalletConnected])

	return (
		<MotionFlex
			animate={stackControls}
			variants={stack}
			willChange="transform"
			initial="step1"
			layout
			overflow="hidden"
			pos="relative"
			flexDir="column"
			px="3"
			pt="3"
			rounded="2xl"
			border="1.6px solid"
			borderColor="border.1"
			bg="brand.2"
			backdropFilter="blur(20px)"
			as="form"
			gap="5"
			zIndex="2"
		>
			<MotionGrid w="full" gridTemplateColumns="2.5rem 1fr 2rem">
				<AnimatePresence mode="wait" custom={activeStep[1]}>
					<MotionIconButton
						aria-label="go back one step"
						colorScheme="white"
						exit="hidden"
						initial="hidden"
						key="sign-up-back-button"
						variants={stackHeader}
						animate={stackHeaderControls}
						h="2rem"
						gridColumnStart={1}
						gridColumnEnd={1}
						icon={<FaArrowLeft size="22" />}
						onClick={() => {
							paginate(-1)
						}}
						rounded="sm"
						variant="unstyled"
						w="2.5rem"
					/>
					<GridItem colStart={2} colEnd={2}>
						<SignUpStepper activeStep={completed ? 4 : activeStep[0]} />
					</GridItem>
				</AnimatePresence>
			</MotionGrid>
			<MotionFlex flex="1" w="full" layout willChange="transform">
				<AnimatePresence mode="wait" custom={activeStep[1]}>
					{!isWalletConnected && activeStep[0] === 1 && (
						<MotionFlex
							flexDir="column"
							key="airdrop-form-step-2"
							variants={step}
							custom={activeStep[1]}
							animate="center"
							exit="exit"
							w="full"
							gap="24"
							pt="0"
							align="center"
							initial="enter"
						>
							<Heading
								fontFamily="black"
								fontWeight="200"
								fontSize="2xl"
								w="full"
								textAlign="center"
								lineHeight="0.8"
							>
								Let's get started!
							</Heading>
							<ConnectButton />
						</MotionFlex>
					)}
					{isWalletConnected && activeStep[0] === 1 && (
						<MotionFlex
							flexDir="column"
							key="airdrop-form-step-1"
							variants={step}
							custom={activeStep[1]}
							animate="center"
							exit="exit"
							w="full"
							gap="3"
							pt="0"
							initial="enter"
						>
							<Heading
								fontFamily="black"
								fontWeight="200"
								fontSize="2xl"
								color="brand.3"
								w="full"
								textAlign="center"
								lineHeight="0.8"
							>
								Token Creation
							</Heading>
							<MotionFormControl
								display="flex"
								flexDir="column"
								gap="0"
								isRequired
								isInvalid={Boolean(errors.sender)}
							>
								<FormLabel mb="0" htmlFor="denom">
									Creator
								</FormLabel>
								<FormErrorMessage
									m="0"
									fontWeight="600"
									color="price.1"
									fontSize="sm"
									fontFamily="heading"
								>
									{errors.sender?.message}
								</FormErrorMessage>
								<Input
									id="sender"
									isDisabled
									_disabled={{ color: "brand.4" }}
									{...register("sender", {
										required: "Required"
									})}
								/>
							</MotionFormControl>
							<MotionFormControl
								display="flex"
								flexDir="column"
								gap="0"
								isRequired
								isInvalid={Boolean(errors.subdenom)}
							>
								<FormLabel mb="0" htmlFor="subdenom">
									Denomination
								</FormLabel>
								<FormErrorMessage
									m="0"
									fontWeight="600"
									color="price.1"
									fontSize="sm"
									fontFamily="heading"
								>
									{errors.subdenom?.message}
								</FormErrorMessage>
								<Input
									id="subdenom"
									letterSpacing={0.8}
									_placeholder={{ letterSpacing: 0.8 }}
									placeholder="ujuno"
									{...register("subdenom", {
										maxLength: 44,
										required: "Required"
									})}
								/>
							</MotionFormControl>
						</MotionFlex>
					)}
					{isWalletConnected && activeStep[0] === 2 && (
						<MotionFlex
							flexDir="column"
							key="airdrop-form-step-3"
							variants={step}
							custom={activeStep[1]}
							animate="center"
							exit="exit"
							w="full"
							gap="3"
							pt="0"
							align="center"
							initial="enter"
							pos="relative"
						>
							<MotionFlex
								variants={heading}
								animate={headingControls}
								initial="idle"
								zIndex="2"
								pb="4"
							>
								<Heading
									fontFamily="black"
									fontWeight="200"
									fontSize={isSuccess ? "3xl" : "2xl"}
									w="full"
									textAlign="center"
									lineHeight="0.8"
									textShadow="1px 2px 4px black"
								>
									{completed ? "Token Created!" : "Confirm Token Settings"}
								</Heading>
							</MotionFlex>
							<MotionImage
								animate={godraysControls}
								variants={godrays}
								src="/assets/godrays.png"
								style={{
									filter: "saturate(150%)",
									height: "20rem",
									left: "calc(50% - 10rem)",
									position: "absolute",
									top: "calc(50% - 11rem)",
									width: "20rem",
									zIndex: 1
								}}
								initial="idle"
							/>
							<MotionGrid
								bg="brand.1"
								backdropFilter="blur(15px)"
								flexDir="column"
								rounded="3xl"
								px="6"
								w="full"
								py="4"
								pb="5"
								gap="4"
								zIndex="2"
								gridTemplateColumns="1fr 1fr"
								shadow="md"
								animate={accountCardCoverControls}
								variants={accountCardCover}
								initial="idle"
							>
								<VStack align="start" spacing="0">
									<Text fontFamily="black">Creator</Text>
									<Text
										lineHeight="1"
										color="brand.4"
										fontFamily="body"
										fontSize="sm"
										fontWeight="600"
									>
										{truncateAddress(address, 8, 8)}
									</Text>
								</VStack>
								<VStack align="start" spacing="0">
									<Text fontFamily="black">Denom</Text>
									<Text
										lineHeight="1"
										color="brand.4"
										fontFamily="body"
										fontSize="md"
									>
										{watch("subdenom")}
									</Text>
								</VStack>
							</MotionGrid>
							{!completed && (
								<VStack align="center" spacing="0">
									<Text lineHeight="1.2" fontFamily="black" textAlign="center">
										Confirming this transaction will
									</Text>
									<Text lineHeight="1.2" fontFamily="black" textAlign="center">
										create a token on the Juno blockchain.
									</Text>
								</VStack>
							)}
						</MotionFlex>
					)}
				</AnimatePresence>
			</MotionFlex>
			<AnimatePresence>
				{isWalletConnected && (
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
						isDisabled={activeStep[0] === 1 && !watch("subdenom")}
						h="2.25rem"
						opacity="0"
						animate={buttonControls}
						variants={button}
						willChange="transform"
						initial="step1"
						pos="absolute"
						onClick={
							completed
								? () => {
										setActiveStep([1, -1])
										reset()
										setValue("sender", address!)
										setCompleted(false)
									}
								: activeStep[0] === 2
									? () => createToken({ denom: watch("subdenom") })
									: () => paginate(1)
						}
						rounded="2xl"
						shadow="rgba(18, 253, 172, 0.5) 0px 0px 10px, rgba(255, 255, 255, 0.2) 0px 1px 0px inset, rgba(0, 0, 0, 0.15) 0px -3px 0px inset, rgb(129, 253, 172) 0px 0px 15px inset"
						textTransform="capitalize"
						minW="6rem"
						w="full"
						alignSelf="end"
					>
						{completed ? "Create Another Token" : "Next Step"}
					</MotionButton>
				)}
			</AnimatePresence>
		</MotionFlex>
	)
}
