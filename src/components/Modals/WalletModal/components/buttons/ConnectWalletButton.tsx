import { type ConnectWalletButtonType } from "../types"
import { Button, Center, Icon } from "@chakra-ui/react"
import { RiWallet3Fill } from "react-icons/ri"

export const ConnectWalletButton = ({
	buttonText = "Connect Wallet",
	disabled,
	leftIcon = <Icon as={RiWallet3Fill} />,
	loading,
	onClick,
	rightIcon
}: ConnectWalletButtonType) => {
	return (
		<Button
			iconSpacing={buttonText ? 1.5 : 0}
			isDisabled={disabled}
			isLoading={loading}
			leftIcon={leftIcon ? <Center>{leftIcon}</Center> : undefined}
			maxW="13rem"
			onClick={onClick}
			rightIcon={rightIcon ? <Center>{rightIcon}</Center> : undefined}
			_hover={{
				filter: "brightness(110%)"
			}}
			transition="0.15s all ease-in-out"
			alignItems="center"
			bg="rgba(73, 11, 188,0.4)"
			backdropFilter="blur(15px)"
			color="white"
			display="flex"
			fontSize="lg"
			h="auto"
			minH="12"
			rounded="1em"
			shadow="md"
			w="full"
		>
			{buttonText}
		</Button>
	)
}
