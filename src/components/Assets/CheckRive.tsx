import { Center, type FlexProps } from "@chakra-ui/react"
import RiveComponent from "@rive-app/react-canvas"

export const CheckRive = (props: FlexProps) => {
	return (
		<Center h="5rem" w="5rem" {...props}>
			<RiveComponent src="/assets/check.riv" />
		</Center>
	)
}
