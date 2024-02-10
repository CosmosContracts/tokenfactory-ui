import { HStack, Text } from "@chakra-ui/react"
import { SpinnerRive } from "components/Assets/SpinnerRive"

const DefaultToast = ({
	isPromise,
	toastText
}: {
	readonly isPromise: boolean
	readonly toastText: string
}) => {
	return (
		<HStack spacing="0.5" w="full" h="3.5rem" overflow="hidden" align="center">
			{isPromise && <SpinnerRive w="6rem" h="6rem" />}
			<Text
				color="white"
				fontFamily="number"
				fontWeight="200"
				fontSize="24"
				letterSpacing="1"
				textTransform="uppercase"
				noOfLines={1}
				textAlign={isPromise ? "left" : "center"}
				w="full"
			>
				{toastText}
			</Text>
		</HStack>
	)
}

export default DefaultToast
