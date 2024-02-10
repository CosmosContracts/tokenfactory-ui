import {
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	VStack
} from "@chakra-ui/react"
import { useSelectedTokenStore } from "@state/selectedTokenState"
import { FaArrowRightArrowLeft, FaUpload } from "react-icons/fa6"
import { GiTwoCoins } from "react-icons/gi"
import { IoFlame } from "react-icons/io5"
import { MdSecurity } from "react-icons/md"
import { RiFolderTransferFill } from "react-icons/ri"

export const MobileActionsDrawer = ({
	burnOpen,
	changeAdminOpen,
	forceTransferOpen,
	isOpen,
	mintOpen,
	onClose,
	sendOpen,
	updateOpen
}: {
	readonly burnOpen: () => void
	readonly changeAdminOpen: () => void
	readonly forceTransferOpen: () => void
	readonly isOpen: boolean
	readonly mintOpen: () => void
	readonly onClose: () => void
	readonly sendOpen: () => void
	readonly updateOpen: () => void
}) => {
	const { selectedSubdenom } = useSelectedTokenStore()

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
			>
				<DrawerHeader w="full" textAlign="center">
					Manage {selectedSubdenom}
				</DrawerHeader>

				<DrawerBody>
					<VStack w="full" align="start">
						<Button
							color="brand.4"
							border="1.6px solid"
							borderColor="border.1"
							w="full"
							bg="brand.1"
							rounded="full"
							leftIcon={<GiTwoCoins />}
							onClick={() => {
								onClose()
								mintOpen()
							}}
						>
							Mint
						</Button>
						<Button
							color="brand.4"
							border="1.6px solid"
							borderColor="border.1"
							w="full"
							bg="brand.1"
							rounded="full"
							leftIcon={<IoFlame />}
							onClick={() => {
								onClose()
								burnOpen()
							}}
						>
							Burn
						</Button>
						<Button
							color="brand.4"
							border="1.6px solid"
							borderColor="border.1"
							w="full"
							bg="brand.1"
							rounded="full"
							leftIcon={<FaUpload />}
							onClick={() => {
								onClose()
								updateOpen()
							}}
						>
							Update
						</Button>
						<Button
							color="brand.4"
							border="1.6px solid"
							borderColor="border.1"
							w="full"
							bg="brand.1"
							rounded="full"
							leftIcon={<FaArrowRightArrowLeft />}
							onClick={() => {
								onClose()
								sendOpen()
							}}
						>
							Send
						</Button>
						<Flex h="0.1rem" my="2" bg="border.1" rounded="full" w="full" />
						<Button
							color="brand.4"
							border="1.6px solid"
							borderColor="border.1"
							w="full"
							bg="brand.1"
							rounded="full"
							leftIcon={<MdSecurity />}
							onClick={() => {
								onClose()
								changeAdminOpen()
							}}
						>
							Change Admin
						</Button>
						<Button
							color="brand.4"
							border="1.6px solid"
							borderColor="border.1"
							isDisabled
							w="full"
							bg="brand.1"
							rounded="full"
							leftIcon={<RiFolderTransferFill />}
							onClick={() => {
								onClose()
								forceTransferOpen()
							}}
						>
							Force Transfer
						</Button>
					</VStack>
				</DrawerBody>
			</DrawerContent>
		</Drawer>
	)
}
