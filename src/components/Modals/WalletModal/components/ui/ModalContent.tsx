import { LoadingVariants } from "../Motion"
import { type ConnectModalContentType, LogoStatus } from "../types"
import {
	Box,
	Center,
	Flex,
	Grid,
	HStack,
	Skeleton,
	Spacer,
	Text,
	VStack
} from "@chakra-ui/react"
import { useChain } from "@cosmos-kit/react-lite"
import { MotionFlex } from "@theme/motion/components"
import truncateAddress from "@utils/ui/truncateAddress"

const handleStatusColor = (status: LogoStatus) => {
	switch (status) {
		case LogoStatus.Loading:
			return {
				border: "brand.3",
				text: "brand.4"
			}
		case LogoStatus.Warning:
			return {
				border: "yellow.400",
				text: "brand.4"
			}
		case LogoStatus.Error:
			return {
				border: "red.500",
				text: "brand.4"
			}
		default:
			return undefined
	}
}

export const SimpleDisplayModalContent = ({
	address,
	bottomButton,
	contentDesc,
	contentHeader,
	logo,
	status
}: ConnectModalContentType) => {
	const { isWalletConnected } = useChain(import.meta.env.VITE_CHAINNETWORK)

	return (
		<Flex
			alignItems="center"
			flexDir="column"
			justifyContent="space-between"
			pb="4"
			h="full"
			px="4"
			textAlign="center"
			w="full"
		>
			{logo && status === "loading" && (
				<Center
					h="20"
					maxH="20"
					maxW="20"
					mb="4"
					minH="20"
					minW="20"
					mx="auto"
					pos="relative"
					w="20"
				>
					<MotionFlex
						animate="animate"
						bgImage={logo}
						bgSize="contain"
						rounded="full"
						bottom={-1.5}
						top={-1.5}
						left={-1.5}
						right={-1.5}
						layout
						pos="absolute"
						initial="hidden"
						variants={LoadingVariants}
					/>
				</Center>
			)}
			{(logo && status === "warning") ||
				(logo && status === "error" && (
					<Center
						h="20"
						maxH="20"
						maxW="20"
						mb="4"
						minH="20"
						minW="20"
						mx="auto"
						pos="relative"
						w="20"
					>
						<Box
							border="2px solid"
							borderColor={handleStatusColor(status)?.border}
							rounded="full"
							bottom={-1.5}
							top={-1.5}
							left={-1.5}
							right={-1.5}
							pos="absolute"
						/>
					</Center>
				))}
			{contentHeader && status && (
				<Text fontWeight="semibold" color={handleStatusColor(status)?.text}>
					{contentHeader}
				</Text>
			)}
			{contentDesc && (
				<Box pos="relative">
					<Box
						fontSize="sm"
						lineHeight="1.3"
						maxH="28"
						opacity="0.7"
						overflowY="scroll"
						pt="1"
						px="8"
						css={{
							// Chromium
							"&::-webkit-scrollbar": {
								display: "none"
							},
							// Firefox
							scrollbarWidth: "none"
						}}
						whiteSpace="pre-line"
					>
						<Text>{contentDesc}</Text>
					</Box>
				</Box>
			)}
			<HStack pb="3">
				{address && (
					<Grid
						bg="transparency.1"
						border="1px solid"
						borderColor="transparency.2"
						flexDir="column"
						rounded="3xl"
						px="6"
						py="4"
						w="17.5rem"
						gridTemplateColumns="4rem 1fr"
					>
						<VStack align="start" spacing="2">
							<Skeleton isLoaded={isWalletConnected}>
								<Text
									lineHeight="1"
									color="brand.2"
									fontFamily="body"
									fontSize="lg"
									fontWeight="800"
								>
									{truncateAddress(address, 4, 4)}
								</Text>
							</Skeleton>
						</VStack>
					</Grid>
				)}
			</HStack>
			<Spacer />
			<Flex w="17.5rem" justify="space-between">
				{bottomButton}
			</Flex>
		</Flex>
	)
}
