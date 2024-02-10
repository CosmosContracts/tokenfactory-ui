import {
	Avatar,
	Button,
	Grid,
	HStack,
	Icon,
	IconButton,
	Skeleton,
	Text
} from "@chakra-ui/react"
import { useChain } from "@cosmos-kit/react-lite"
import truncateAddress from "@utils/ui/truncateAddress"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect } from "react"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"

export const ConnectButton = () => {
	const {
		address,
		isWalletConnected,
		openView,
		setDefaultSignOptions,
		wallet
	} = useChain(import.meta.env.VITE_CHAINNETWORK)

	useEffect(() => {
		if (!isWalletConnected) return
		setDefaultSignOptions({
			disableBalanceCheck: false,
			preferNoSetFee: true,
			preferNoSetMemo: false
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isWalletConnected])

	if (isWalletConnected && address) {
		return (
			<AnimatePresence mode="wait">
				{isWalletConnected && (
					<HStack>
						<Grid
							gridTemplateColumns="1rem 7.5rem auto"
							alignItems="center"
							as={motion.div}
							w="full"
							justifyItems="start"
							gap="2"
						>
							<Avatar boxSize="1rem" src={wallet?.logo as string} />
							<Skeleton w="full" isLoaded={Boolean(address)}>
								<Text
									color="brand.4"
									fontFamily="body"
									fontSize="md"
									fontWeight="900"
									textAlign="start"
									w="full"
								>
									{truncateAddress(address, 5, 5)}
								</Text>
							</Skeleton>
							<HStack alignSelf="end" h="full">
								<IconButton
									_active={{ background: "brand.1" }}
									_hover={{
										background: "brand.3",
										cursor: "pointer"
									}}
									color="white"
									aria-label="Open Wallet Modal"
									bg="transparency.1"
									icon={<FaSignOutAlt />}
									onClick={() => {
										openView()
									}}
									rounded="xl"
									size="sm"
								/>
							</HStack>
						</Grid>
					</HStack>
				)}
			</AnimatePresence>
		)
	}

	return (
		<Button
			_active={{ filter: "brightness(120%)" }}
			_hover={{
				color: "brand.3",
				cursor: "pointer"
			}}
			alignItems="center"
			bg="brand.2"
			border="1.6px solid"
			borderColor="border.1"
			size="md"
			w="12rem"
			color="brand.4"
			justifyItems="center"
			onClick={() => {
				openView()
			}}
			leftIcon={<Icon as={FaSignInAlt} h="1.1rem" w="1.1rem" />}
			overflow="hidden"
			px={3}
			rounded="1em"
		>
			<Text
				fontFamily="body"
				letterSpacing={0}
				fontWeight="900"
				fontSize="md"
				textAlign="center"
				w="full"
			>
				Connect Wallet
			</Text>
		</Button>
	)
}
