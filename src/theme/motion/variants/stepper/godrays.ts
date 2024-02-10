import { type Variants } from "framer-motion"

export const godrays: Variants = {
	confirmed: {
		opacity: 1,
		rotate: 360,
		scale: 1,
		transition: {
			damping: 12,
			opacity: { duration: 0.15, ease: "linear", type: "tween" },
			rotate: {
				duration: 14,
				ease: "linear",
				repeat: Number.POSITIVE_INFINITY,
				type: "tween"
			},
			stiffness: 150,
			type: "spring"
		}
	},
	idle: {
		opacity: 0,
		rotate: 0,
		scale: 0,
		transition: {
			damping: 12,
			opacity: { duration: 0.15, ease: "linear", type: "tween" },
			rotate: {
				duration: 2,
				ease: "linear",
				repeat: Number.POSITIVE_INFINITY,
				type: "tween"
			},
			stiffness: 150,
			type: "spring"
		}
	}
}
