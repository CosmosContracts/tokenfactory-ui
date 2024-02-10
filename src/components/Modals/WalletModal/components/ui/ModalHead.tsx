import { type SimpleModalHeadType } from "../types"
import { Grid, IconButton, Text } from "@chakra-ui/react"
import { FaCircleChevronLeft, FaCircleXmark } from "react-icons/fa6"

export const SimpleModalHead = ({
	backButton,
	onBack,
	onClose,
	title
}: SimpleModalHeadType) => {
	return (
		<Grid gridTemplateColumns="auto 1fr auto" px="4" py="2" pos="relative">
			{backButton && (
				<IconButton
					aria-label="back"
					color="brand.4"
					_hover={{ color: "white" }}
					rounded="full"
					icon={<FaCircleChevronLeft size="22" />}
					onClick={onBack}
					variant="ghost"
					pos="absolute"
					left="4"
					top="2"
				/>
			)}

			<Text
				gridColumnStart="2"
				fontSize="2xl"
				fontWeight="900"
				align="center"
				color="brand.3"
				w="full"
				flex={1}
				fontFamily="black"
			>
				{title}
			</Text>
			<IconButton
				aria-label="close"
				color="brand.4"
				_hover={{ color: "white" }}
				icon={<FaCircleXmark size="22" />}
				onClick={onClose}
				rounded="full"
				size="sm"
				variant="ghost"
				pos="absolute"
				right="4"
				top="2"
			/>
		</Grid>
	)
}
