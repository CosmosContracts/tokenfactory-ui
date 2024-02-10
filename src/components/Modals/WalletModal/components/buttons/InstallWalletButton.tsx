import { type InstallWalletButtonType } from "../types"
import { Button, Icon } from "@chakra-ui/react"

export const InstallWalletButton = ({
	buttonText = "Install Extension",
	disabled = false,
	icon,
	onClick
}: InstallWalletButtonType) => {
	return (
		<Button
			isDisabled={disabled}
			alignItems="center"
			leftIcon={icon ? <Icon as={icon} /> : undefined}
			maxW="16rem"
			w="full"
			_hover={{
				filter: "brightness(110%)"
			}}
			transition="0.15s all ease-in-out"
			shadow="md"
			bg="rgba(73, 11, 188,0.3)"
			backdropFilter="blur(10px)"
			rounded="2xl"
			minH="12"
			h="auto"
			fontSize="lg"
			display="flex"
			onClick={onClick}
			variant="unstyled"
		>
			{buttonText}
		</Button>
	)
}
