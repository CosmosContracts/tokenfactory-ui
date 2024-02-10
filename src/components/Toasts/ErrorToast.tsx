import { HStack, Text, VStack } from "@chakra-ui/react"
import { ErrorRive } from "components/Assets/ErrorRive"

const ErrorToast = ({
	errorMessage,
	errorTitle
}: {
	readonly errorMessage: string
	readonly errorTitle: string
}) => {
	return (
		<HStack spacing="0.5" w="full" align="center" h="3.5rem" overflow="hidden">
			<ErrorRive w="6rem" h="6rem" />
			<VStack align="start" spacing="1">
				<Text
					color="white"
					fontFamily="black"
					h="full"
					fontWeight="200"
					lineHeight="1"
					fontSize="xl"
					noOfLines={1}
					w="full"
				>
					{errorTitle}
				</Text>
				<Text
					color="white"
					fontFamily="body"
					fontSize="md"
					h="full"
					fontWeight="600"
					lineHeight="1"
					noOfLines={1}
					w="full"
				>
					{errorMessage}
				</Text>
			</VStack>
		</HStack>
	)
}

export default ErrorToast
