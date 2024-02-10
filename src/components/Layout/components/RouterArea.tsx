import { NavigationButton } from "./NavigationButton"
import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	Flex,
	HStack,
	IconButton,
	useBreakpoint,
	useDisclosure
} from "@chakra-ui/react"
import { ConnectButton } from "@components/ConnectButton"
import { useChain } from "@cosmos-kit/react-lite"
import { useNavigationStore } from "@state/navState"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { useNavigate } from "react-router-dom"

export type NavigationData = {
	readonly isActive?: boolean
	readonly isDisabled?: boolean
	readonly label: string
	readonly navId: number
	readonly url: string
}

const data: NavigationData[] = [
	{
		label: "Create",
		navId: 0,
		url: "/create"
	},
	{
		label: "My Tokens",
		navId: 1,
		url: "/tokens"
	}
]

export const RouterArea = () => {
	const { activeRoute, setActiveRoute } = useNavigationStore()

	const { isWalletConnected } = useChain(import.meta.env.VITE_CHAINNETWORK)

	const breakpoint = useBreakpoint({ ssr: false })
	const isMobile = Boolean(breakpoint === "base" || breakpoint === "sm")
	const navigate = useNavigate()

	const handleClick = (url: string) => {
		setActiveRoute(url)
		navigate(url)
	}

	const { isOpen, onClose, onOpen } = useDisclosure()

	return (
		<Flex gap="0" align="center" justify="start" pos="relative" flexDir="row">
			{isMobile ? (
				<>
					<IconButton
						_active={{ bg: "blackAlpha.500" }}
						_hover={{ bg: "blackAlpha.400" }}
						aria-label="Open Menu"
						bg="blackAlpha.300"
						h="3rem"
						icon={<HiOutlineMenuAlt3 size="20" />}
						isActive={isOpen}
						minWidth="2rem"
						color="brand.4"
						rounded="full"
						onClick={() => onOpen()}
						w="3rem"
					/>
					<Drawer isOpen={isOpen} onClose={onClose} placement="right">
						<DrawerOverlay backdropFilter="blur(70px)" bg="transparent" />
						<DrawerContent
							bg="brand.1"
							border="1.6px solid"
							borderColor="border.1"
							overflow="hidden"
							roundedStart="2em"
							shadow="none"
						>
							<DrawerBody
								bg="transparent"
								flex={1}
								flexDirection="column"
								p={3}
							>
								<Flex direction="column" gap={1}>
									{data.map((props: NavigationData) => {
										return (
											<NavigationButton
												{...props}
												onClick={() => {
													handleClick(props.url)
													onClose()
												}}
												isActive={activeRoute === props.url}
												isDisabled={!isWalletConnected}
												key={props.navId}
											/>
										)
									})}
								</Flex>
							</DrawerBody>
							<DrawerFooter>
								<HStack flex={1}>
									<ConnectButton />
								</HStack>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</>
			) : (
				data.map((props: NavigationData) => {
					return (
						<NavigationButton
							{...props}
							onClick={() => {
								handleClick(props.url)
							}}
							isActive={activeRoute === props.url}
							isDisabled={!isWalletConnected}
							key={props.navId}
						/>
					)
				})
			)}
		</Flex>
	)
}
