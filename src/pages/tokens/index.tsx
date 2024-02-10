/* eslint-disable id-length */
/* eslint-disable react/no-unstable-nested-components */
import { BurnModal } from "./components/BurnModal"
import { ChangeAdminModal } from "./components/ChangeAdminModal"
import { ForceTransferModal } from "./components/ForceTransferModal"
import { MintModal } from "./components/MintModal"
import { MobileActionsDrawer } from "./components/MobileActionsDrawer"
import { SendModal } from "./components/SendModal"
import { PortfolioTable } from "./components/Table"
import { UpdateMetadataModal } from "./components/UpdateMetadataModal"
import {
	Button,
	Flex,
	HStack,
	IconButton,
	Skeleton,
	Text,
	useBreakpoint,
	useDisclosure,
	VStack
} from "@chakra-ui/react"
import { useChain } from "@cosmos-kit/react-lite"
import { useTokenFactoryTokens } from "@hooks/tokenfactory/query/useTokenFactoryTokens"
import { useTokenInfo } from "@hooks/tokenfactory/query/useTokenInfo"
import { useSelectedTokenStore } from "@state/selectedTokenState"
import { createColumnHelper } from "@tanstack/react-table"
import shortenNumber from "@utils/ui/shortenNumber"
import { BigNumber } from "bignumber.js"
import { motion } from "framer-motion"
import { type Metadata } from "juno-network/types/codegen/cosmos/bank/v1beta1/bank"
import { useMemo } from "react"
import { Helmet } from "react-helmet-async"
import { FaArrowRightArrowLeft, FaUpload } from "react-icons/fa6"
import { GiTwoCoins } from "react-icons/gi"
import { HiExternalLink } from "react-icons/hi"
import { IoFlame } from "react-icons/io5"
import { MdSecurity } from "react-icons/md"
import { RiFolderTransferFill } from "react-icons/ri"

export const MyTokens = () => {
	const breakpoint = useBreakpoint({ ssr: false })
	const { isWalletConnected } = useChain(import.meta.env.VITE_CHAINNETWORK)

	const [assetList] = useTokenFactoryTokens()

	const {
		isOpen: mintIsOpen,
		onClose: mintClose,
		onOpen: mintOpen
	} = useDisclosure()
	const {
		isOpen: burnIsOpen,
		onClose: burnClose,
		onOpen: burnOpen
	} = useDisclosure()
	const {
		isOpen: updateIsOpen,
		onClose: updateClose,
		onOpen: updateOpen
	} = useDisclosure()
	const {
		isOpen: sendIsOpen,
		onClose: sendClose,
		onOpen: sendOpen
	} = useDisclosure()
	const {
		isOpen: changeAdminIsOpen,
		onClose: changeAdminClose,
		onOpen: changeAdminOpen
	} = useDisclosure()
	const {
		isOpen: forceTransferIsOpen,
		onClose: forceTransferClose,
		onOpen: forceTransferOpen
	} = useDisclosure()
	const {
		isOpen: mobileDrawerIsOpen,
		onClose: mobileDrawerClose,
		onOpen: mobileDrawerOpen
	} = useDisclosure()

	const columnHelper = createColumnHelper<Metadata>()

	const columns = useMemo(() => {
		return [
			columnHelper.accessor("symbol", {
				cell: (info) => {
					let symbol: string = info.getValue()
					let name: string = info.getValue()

					if (
						info.row.original.symbol &&
						info.row.original.symbol.includes("/")
					) {
						symbol = info.row.original.symbol.split("/")[2]
					} else {
						symbol = info.row.original.symbol
					}

					if (info.row.original.name) {
						name = info.row.original.base.split("/")[2]
					} else {
						name = info.row.original.base
					}

					return (
						<HStack>
							<Skeleton
								isLoaded={Boolean(info.row.original.symbol)}
								rounded="full"
							>
								<VStack align="start" minW="6rem" spacing={1}>
									<Text
										fontFamily="heading"
										fontSize={{ base: "md", sm: "18" }}
										fontWeight="400"
										lineHeight={1}
										textAlign="start"
										textTransform="uppercase"
									>
										{symbol}
									</Text>
									<Text
										lineHeight={1}
										fontSize={{ base: "0.9em", sm: "14" }}
										textAlign="start"
										fontWeight="400"
										fontFamily="body"
									>
										{name}
									</Text>
								</VStack>
							</Skeleton>
						</HStack>
					)
				},
				header: "Token",
				id: "tokens",
				sortingFn: (a, b, columnId) => {
					return String(a.getValue(columnId)).toLowerCase() <
						String(b.getValue(columnId)).toLowerCase()
						? -1
						: String(a.getValue(columnId)).toLowerCase() >
							  String(b.getValue(columnId)).toLowerCase()
							? 1
							: 0
				}
			}),
			columnHelper.display({
				cell: (info) => {
					if (!isWalletConnected) {
						return null
					}

					// eslint-disable-next-line react-hooks/rules-of-hooks
					const [tokenInfo, isLoading] = useTokenInfo(info.row.original.base)

					return (
						<VStack spacing="1">
							<Skeleton isLoaded={!isLoading} w="full">
								<Text lineHeight="1">
									{shortenNumber(BigNumber(tokenInfo?.totalSupply ?? "0"), 2)}
								</Text>
							</Skeleton>
							<Skeleton isLoaded={!isLoading} w="full">
								<Text lineHeight="1" fontFamily="sm">
									{shortenNumber(BigNumber(tokenInfo?.balance ?? "0"), 2)}
								</Text>
							</Skeleton>
						</VStack>
					)
				},
				header: "Token Info",
				id: "info"
			}),
			columnHelper.display({
				cell: (info) => {
					if (!isWalletConnected) {
						return null
					}

					let name: string = info.row.original.base
					if (info.row.original.name) {
						name = info.row.original.base.split("/")[2].toUpperCase()
					}

					// const { mutate: mintToken } = useMintToken()
					// eslint-disable-next-line react-hooks/rules-of-hooks
					const { setSelectedToken } = useSelectedTokenStore()

					if (breakpoint === "base" || breakpoint === "sm") {
						return (
							<Flex justify="center">
								<IconButton
									onClick={() => {
										setSelectedToken(info.row.original, name)
										mobileDrawerOpen()
									}}
									color="brand.4"
									_focus={{ color: "brand.3" }}
									bg="brand.1"
									border="1.6px solid"
									borderColor="border.1"
									rounded="full"
									aria-label="Open Actions Modal"
									icon={<HiExternalLink size="20" />}
								/>
							</Flex>
						)
					}

					return (
						<HStack>
							<Button
								_hover={{ color: "brand.3" }}
								color="brand.4"
								bg="brand.2"
								border="1.6px solid"
								borderColor="border.1"
								_disabled={{
									_hover: { bg: "white" },
									cursor: "not-allowed",
									opacity: 0.5
								}}
								rounded="1em"
								size="sm"
								leftIcon={<GiTwoCoins />}
								onClick={() => {
									setSelectedToken(info.row.original, name)
									mintOpen()
									// mintToken({ amount: "100", denom: info.row.original.base })
								}}
							>
								Mint
							</Button>
							<Button
								_hover={{ color: "brand.3" }}
								color="brand.4"
								bg="brand.2"
								border="1.6px solid"
								borderColor="border.1"
								_disabled={{
									_hover: { bg: "white" },
									cursor: "not-allowed",
									opacity: 0.5
								}}
								rounded="1em"
								size="sm"
								leftIcon={<IoFlame />}
								onClick={() => {
									setSelectedToken(info.row.original, name)
									burnOpen()
								}}
							>
								Burn
							</Button>
							<Button
								_hover={{ color: "brand.3" }}
								color="brand.4"
								bg="brand.2"
								border="1.6px solid"
								borderColor="border.1"
								_disabled={{
									_hover: { bg: "white" },
									cursor: "not-allowed",
									opacity: 0.5
								}}
								rounded="1em"
								size="sm"
								leftIcon={<FaUpload />}
								onClick={() => {
									setSelectedToken(info.row.original, name)
									updateOpen()
								}}
							>
								Update
							</Button>
							<Button
								_hover={{ color: "brand.3" }}
								color="brand.4"
								bg="brand.2"
								border="1.6px solid"
								borderColor="border.1"
								_disabled={{
									_hover: { bg: "white" },
									cursor: "not-allowed",
									opacity: 0.5
								}}
								rounded="1em"
								size="sm"
								leftIcon={<FaArrowRightArrowLeft />}
								onClick={() => {
									setSelectedToken(info.row.original, name)
									sendOpen()
								}}
							>
								Send
							</Button>
						</HStack>
					)
				},
				header: "Actions",
				id: "actions"
			}),
			columnHelper.display({
				cell: (info) => {
					if (!isWalletConnected) {
						return null
					}

					let name: string = info.row.original.base
					if (info.row.original.name) {
						name = info.row.original.base.split("/")[2].toUpperCase()
					}

					// const { mutate: mintToken } = useMintToken()
					// eslint-disable-next-line react-hooks/rules-of-hooks
					const { setSelectedToken } = useSelectedTokenStore()

					return (
						<HStack>
							<Button
								_hover={{ color: "brand.3" }}
								color="brand.4"
								bg="brand.2"
								border="1.6px solid"
								borderColor="border.1"
								_disabled={{
									_hover: { bg: "white" },
									cursor: "not-allowed",
									opacity: 0.5
								}}
								rounded="1em"
								size="sm"
								leftIcon={<MdSecurity />}
								onClick={() => {
									setSelectedToken(info.row.original, name)
									changeAdminOpen()
								}}
							>
								Change Admin
							</Button>
							<Button
								_hover={{ color: "brand.3" }}
								color="brand.4"
								bg="brand.2"
								border="1.6px solid"
								borderColor="border.1"
								isDisabled
								_disabled={{
									_hover: { bg: "white" },
									cursor: "not-allowed",
									opacity: 0.5
								}}
								rounded="1em"
								size="sm"
								leftIcon={<RiFolderTransferFill />}
								onClick={() => {
									setSelectedToken(info.row.original, name)
									forceTransferOpen()
								}}
							>
								Force Transfer
							</Button>
						</HStack>
					)
				},
				header: "Admin Area",
				id: "admins"
			})
		]
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [breakpoint, isWalletConnected])

	return (
		<Flex
			animate={{ opacity: 1 }}
			as={motion.main}
			exit={{ opacity: 0 }}
			flexDirection="column"
			initial={{ opacity: 0 }}
			pos="relative"
			w="full"
			py={3}
			px={{ base: 3, md: 0 }}
			align="center"
			justify="start"
		>
			<Helmet>
				<title>Tokenfactory - Juno</title>
			</Helmet>
			{columns && (
				<PortfolioTable
					columns={columns}
					key="MyTokensTable"
					data={assetList ?? []}
				/>
			)}
			{isWalletConnected && (
				<MintModal isOpen={mintIsOpen} onClose={mintClose} />
			)}
			{isWalletConnected && (
				<BurnModal isOpen={burnIsOpen} onClose={burnClose} />
			)}
			{isWalletConnected && (
				<UpdateMetadataModal isOpen={updateIsOpen} onClose={updateClose} />
			)}
			{isWalletConnected && (
				<SendModal isOpen={sendIsOpen} onClose={sendClose} />
			)}
			{isWalletConnected && (
				<ChangeAdminModal
					isOpen={changeAdminIsOpen}
					onClose={changeAdminClose}
				/>
			)}
			{isWalletConnected && (
				<ForceTransferModal
					isOpen={forceTransferIsOpen}
					onClose={forceTransferClose}
				/>
			)}
			{(breakpoint === "base" || breakpoint === "sm") && isWalletConnected && (
				<MobileActionsDrawer
					burnOpen={burnOpen}
					changeAdminOpen={changeAdminOpen}
					forceTransferOpen={forceTransferOpen}
					sendOpen={sendOpen}
					mintOpen={mintOpen}
					updateOpen={updateOpen}
					key="mobile-actions-drawer"
					isOpen={mobileDrawerIsOpen}
					onClose={mobileDrawerClose}
				/>
			)}
		</Flex>
	)
}
