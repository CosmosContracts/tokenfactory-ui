import { type Variants } from "framer-motion"

export const step: Variants = {
	center: {
		opacity: 1,
		x: 0,
		zIndex: 1
	},
	enter: (direction: number) => {
		return {
			opacity: 0,
			x: direction > 0 ? 200 : -200
		}
	},
	exit: (direction: number) => {
		return {
			opacity: 0,
			x: direction < 0 ? 200 : -200,
			zIndex: 0
		}
	}
}
