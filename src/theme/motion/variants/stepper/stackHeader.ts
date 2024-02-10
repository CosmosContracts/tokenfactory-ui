import { type Variants } from "framer-motion"

export const stackHeader: Variants = {
	hidden: {
		opacity: 0,
		x: -100
	},
	show: {
		opacity: 1,
		x: 0
	}
}
