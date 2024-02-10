import { checkboxAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

// eslint-disable-next-line @typescript-eslint/unbound-method
const { defineMultiStyleConfig, definePartsStyle } =
	createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
	control: {
		_checked: {
			_hover: {
				bg: "brand.1",
				filter: "brightness(110%)"
			},
			bg: "brand.1",
			border: "none",
			color: "brand.2",
			filter: "brightness(85%)"
		},
		bg: "brand.1",
		border: "none",
		borderRadius: "0.6em",
		filter: "brightness(85%)",
		padding: 3
	}
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })
