/* eslint-disable @typescript-eslint/unbound-method */
import { inputAnatomy } from "@chakra-ui/anatomy"
import { createMultiStyleConfigHelpers } from "@chakra-ui/react"

const { defineMultiStyleConfig, definePartsStyle } =
	createMultiStyleConfigHelpers(inputAnatomy.keys)

const acryllic = definePartsStyle({
	addon: {
		backdropFilter: "blur(20px) saturate(180%)",
		backgroundBlendMode: "soft-light",
		bg: "rgba(255, 255, 255, 0.1)",
		fontWeight: "600",
		height: "2.25rem",
		paddingInline: "2"
	},
	field: {
		_invalid: { border: "2px solid", borderColor: "price.1" },
		_placeholder: {
			color: "gray.200",
			fontSize: "sm",
			fontWeight: "700"
		},
		backdropFilter: "blur(20px) saturate(180%)",
		backgroundBlendMode: "soft-light",
		bg: "rgba(255, 255, 255, 0.1)",
		border: "none",
		borderColor: "price.1",
		borderRadius: "2xl",
		color: "white",
		fontFamily: "body",
		fontWeight: "600",
		height: "2.25rem",
		outline: "none",
		paddingInline: "2"
	}
})

export const inputTheme = defineMultiStyleConfig({
	defaultProps: {
		size: "md",
		variant: "acryllic"
	},
	variants: { acryllic }
})
