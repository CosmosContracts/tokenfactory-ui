/* eslint-disable @typescript-eslint/unbound-method */
import { defineStyle, defineStyleConfig } from "@chakra-ui/react"

const acryllic = defineStyle({
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
})

export const textareaTheme = defineStyleConfig({
	defaultProps: {
		size: "md",
		variant: "acryllic"
	},
	variants: { acryllic }
})
