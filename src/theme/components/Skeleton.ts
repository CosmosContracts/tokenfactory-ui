/* eslint-disable canonical/id-match */
import { cssVar, defineStyle, defineStyleConfig } from "@chakra-ui/react"

const $startColor = cssVar("skeleton-start-color")
const $endColor = cssVar("skeleton-end-color")

const brand = defineStyle({
	_light: {
		background: $startColor.reference,
		borderColor: $endColor.reference,
		[$startColor.variable]: "var(--chakra-colors-brand-1)",
		[$endColor.variable]: "var(--chakra-colors-purple-8,300)",
		opacity: 1,
		rounded: "full"
	}
})

export const skeletonTheme = defineStyleConfig({
	defaultProps: {
		variant: "brand"
	},
	variants: { brand }
})
