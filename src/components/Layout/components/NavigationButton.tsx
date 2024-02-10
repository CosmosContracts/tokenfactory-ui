import { Button, type ButtonProps, Skeleton, Text } from "@chakra-ui/react"

export type NavigationButtonProps = ButtonProps & {
	readonly isActive?: boolean
	readonly isDisabled?: boolean
	readonly label: string
	readonly navId: number
	readonly onClick: () => void
}

// eslint-disable-next-line complexity
export const NavigationButton = ({
	isActive,
	isDisabled,
	label,
	navId,
	onClick
}: NavigationButtonProps) => {
	return (
		<Button
			variant="unstyled"
			isDisabled={isDisabled}
			key={label + "-" + navId}
			color={isActive ? "brand.3" : "brand.4"}
			border="0px"
			w="full"
			onClick={onClick}
			_hover={{ color: "brand.3" }}
			fontFamily="black"
			fontSize={{ base: "2xl", md: "lg" }}
			letterSpacing={0.8}
			textAlign="start"
			textDecoration="none"
			textTransform="uppercase"
			transition="0.15s all"
		>
			<Skeleton isLoaded rounded="1.25em" zIndex={2}>
				<Text>{label}</Text>
			</Skeleton>
		</Button>
	)
}
