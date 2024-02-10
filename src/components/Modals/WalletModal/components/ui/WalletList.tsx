/* eslint-disable react/no-array-index-key */
import { type DisplayWalletListType } from "../types"
import {
	Center,
	Circle,
	Flex,
	HStack,
	Image,
	Text,
	useBreakpoint,
	Wrap
} from "@chakra-ui/react"
import { MotionButton } from "@theme/motion/components"

export const SimpleDisplayWalletList = ({
	walletsData
}: DisplayWalletListType) => {
	const breakpoint = useBreakpoint({ ssr: false })

	if (breakpoint === "base" || breakpoint === "sm") {
		return (
			<Flex
				pb="4"
				px="4"
				pos="relative"
				align="start"
				justify="center"
				flexDir="column"
				w="full"
			>
				<Wrap
					px={8}
					w="full"
					alignItems="center"
					justify="center"
					columnGap="2"
					flex="1"
					gridTemplateColumns="auto"
					gridTemplateRows="auto"
					justifyContent="center"
					position="relative"
					py="1"
				>
					{walletsData
						.filter(
							(wallet) =>
								wallet.name.includes("mobile") &&
								!wallet.name.includes("web3auth")
						)
						.map(({ logo, name, onClick, subLogo }) => {
							let walletImageUrl = logo

							if (name.includes("metamask")) {
								walletImageUrl = "/assets/wallets/metamask-logo.svg"
							} else if (name.includes("leap")) {
								walletImageUrl = "/assets/wallets/leap-logo.svg"
							}

							return (
								<MotionButton
									id={name}
									key={name}
									onClick={onClick}
									_hover={{
										filter: "brightness(110%)"
									}}
									bg="brand.1"
									alignItems="center"
									borderRadius="full"
									display="flex"
									h="4rem"
									justifyContent="center"
									p="0"
									position="relative"
									border="1.6px solid"
									borderColor="border.1"
									transition={{ duration: 0.1 }}
									w="4rem"
									whileHover={{ scale: 1.1 }}
								>
									<Center h="full" overflow="hidden" pos="relative" w="full">
										<Image
											h="full"
											objectFit="fill"
											p={2}
											rounded="full"
											src={walletImageUrl}
											w="full"
										/>

										{subLogo && (
											<Center
												bg="white"
												bottom="0"
												h="1.25rem"
												pos="absolute"
												right="0"
												rounded="full"
												w="1.25rem"
											>
												<Image src={subLogo} w="1rem" />
											</Center>
										)}
									</Center>
								</MotionButton>
							)
						})}
				</Wrap>
			</Flex>
		)
	}

	return (
		<Flex
			pb="4"
			px="4"
			pos="relative"
			align="start"
			justify="center"
			flexDir="column"
			w="full"
		>
			<Wrap
				px={8}
				w="full"
				alignItems="center"
				justify="center"
				columnGap="2"
				flex="1"
				gridTemplateColumns="auto"
				gridTemplateRows="auto"
				justifyContent="center"
				position="relative"
				py="1"
			>
				{walletsData
					.filter(
						(wallet) =>
							!wallet.name.includes("mobile") &&
							!wallet.name.includes("web3auth")
					)
					.map(({ logo, name, onClick, subLogo }) => {
						let walletImageUrl = logo

						if (name.includes("metamask")) {
							walletImageUrl = "/assets/wallets/metamask-logo.svg"
						} else if (name.includes("leap")) {
							walletImageUrl = "/assets/wallets/leap-logo.svg"
						}

						return (
							<MotionButton
								id={name}
								key={name}
								onClick={onClick}
								_hover={{
									filter: "brightness(110%)"
								}}
								bg="brand.1"
								alignItems="center"
								borderRadius="full"
								display="flex"
								h="4rem"
								border="1.6px solid"
								borderColor="border.1"
								justifyContent="center"
								p="0"
								position="relative"
								transition={{ duration: 0.1 }}
								w="4rem"
								whileHover={{ scale: 1.1 }}
							>
								<Center h="full" overflow="hidden" pos="relative" w="full">
									<Image
										h="full"
										objectFit="fill"
										p={2}
										rounded="full"
										src={walletImageUrl}
										w="full"
									/>

									{subLogo && (
										<Center
											bg="white"
											bottom="0"
											h="1.25rem"
											pos="absolute"
											right="0"
											rounded="full"
											w="1.25rem"
										>
											<Image src={subLogo} w="1rem" />
										</Center>
									)}
								</Center>
							</MotionButton>
						)
					})}
			</Wrap>
			<HStack py="2" w="full" justify="center">
				<HStack>
					{Array.from({ length: 5 }).map((_, index) => (
						<Circle bg="brand.3" key={index} size="0.5rem" />
					))}
				</HStack>
				<Text
					color="brand.4"
					fontSize="sm"
					fontWeight="700"
					minW="12rem"
					pos="relative"
					top="-0.05rem"
					textAlign="center"
				>
					or continue with mobile
				</Text>
				<HStack>
					{Array.from({ length: 5 }).map((_, index) => (
						<Circle bg="brand.3" key={index} size="0.5rem" />
					))}
				</HStack>
			</HStack>
			<Wrap
				px={8}
				w="full"
				alignItems="center"
				justify="center"
				columnGap="2"
				flex="1"
				gridTemplateColumns="auto"
				gridTemplateRows="auto"
				justifyContent="center"
				position="relative"
				py="1"
			>
				{walletsData
					.filter(
						(wallet) =>
							wallet.name.includes("mobile") &&
							!wallet.name.includes("web3auth")
					)
					.map(({ logo, name, onClick, subLogo }) => {
						let walletImageUrl = logo

						if (name.includes("metamask")) {
							walletImageUrl = "/assets/wallets/metamask-logo.svg"
						} else if (name.includes("leap")) {
							walletImageUrl = "/assets/wallets/leap-logo.svg"
						}

						return (
							<MotionButton
								id={name}
								key={name}
								onClick={onClick}
								_hover={{
									filter: "brightness(110%)"
								}}
								bg="brand.1"
								alignItems="center"
								borderRadius="full"
								display="flex"
								h="3rem"
								justifyContent="center"
								p="0"
								position="relative"
								border="1.6px solid"
								borderColor="border.1"
								transition={{ duration: 0.1 }}
								w="3rem"
								whileHover={{ scale: 1.1 }}
							>
								<Center h="full" overflow="hidden" pos="relative" w="full">
									<Image
										h="full"
										objectFit="fill"
										p={2}
										rounded="full"
										src={walletImageUrl}
										w="full"
									/>

									{subLogo && (
										<Center
											bg="white"
											bottom="0"
											h="1.25rem"
											pos="absolute"
											right="0"
											rounded="full"
											w="1.25rem"
										>
											<Image src={subLogo} w="1rem" />
										</Center>
									)}
								</Center>
							</MotionButton>
						)
					})}
			</Wrap>
		</Flex>
	)
}
