import { type Variants } from "framer-motion"

export const stepper: Variants = {
	hidden: {
		opacity: 0,
		transition: {
			damping: 15,
			stiffness: 10
		},
		y: -40
	},
	show: {
		opacity: 1,
		transition: {
			damping: 15,
			stiffness: 50
		},
		y: 0
	}
}
