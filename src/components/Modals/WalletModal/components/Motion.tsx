import { type Variants } from "framer-motion"

export const ModalVariants: Variants = {
	animate: {
		height: "auto",
		opacity: 1,
		originX: 0.5,
		originY: 0.5,
		scale: 1,
		transition: {
			delay: 0.05,
			duration: 0.18,
			ease: [0.49, 0.81, 0.84, 1]
		},
		width: "auto"
	},
	initial: ({ height, width }) => ({
		height,
		opacity: 0.9,
		scale: 1.001,
		width
	})
}
export const ModalContentVariants: Variants = {
	animate: {
		opacity: 1,
		originX: 0.5,
		originY: 0.5,
		scale: 1,
		transition: { delay: 0.1, duration: 0.21, ease: [0.15, 1.15, 0.6, 1] }
	},
	initial: {
		opacity: 0.05,
		scale: 0.95
	}
}
export const LoadingVariants: Variants = {
	animate: {
		scale: [1, 0.85, 1],
		transition: {
			duration: 2,
			repeat: Number.POSITIVE_INFINITY,
			repeatType: "mirror",
			type: "easeOut"
		}
	},
	hidden: {
		rotate: 0,
		transition: { duration: 1, type: "easeOut" }
	}
}
