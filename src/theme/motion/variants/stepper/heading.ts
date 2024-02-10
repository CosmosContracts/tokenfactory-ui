import { type Variants } from "framer-motion"

export const heading: Variants = {
	confirmed: {
		opacity: [0, 1],
		transition: {
			damping: 12,
			opacity: { duration: 0.2, type: "tween" },
			stiffness: 150,
			type: "spring"
		},
		y: 50
	},
	idle: {
		opacity: 1,
		transition: {
			damping: 12,
			opacity: { duration: 0.2, type: "tween" },
			stiffness: 150,
			type: "spring"
		},
		y: 0
	}
}
