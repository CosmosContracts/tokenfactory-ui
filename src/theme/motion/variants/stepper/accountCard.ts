import { type Variants } from "framer-motion"

export const accountCardInfo: Variants = {
	confirmed: {
		opacity: 0,
		transition: {
			damping: 12,
			opacity: {
				duration: 0.2,
				type: "tween"
			},
			stiffness: 150,
			type: "spring"
		},
		y: -40
	},
	idle: {
		opacity: 1,
		transition: {
			damping: 12,
			opacity: {
				duration: 0.2,
				type: "tween"
			},
			stiffness: 150,
			type: "spring"
		},
		y: 0
	}
}

export const accountCardCover: Variants = {
	confirmed: {
		opacity: 1,
		transition: {
			damping: 12,
			opacity: {
				duration: 0.2,
				type: "tween"
			},
			stiffness: 150,
			type: "spring"
		},
		y: 80
	},
	idle: {
		opacity: 1,
		transition: {
			damping: 12,
			opacity: {
				duration: 0.2,
				type: "tween"
			},
			stiffness: 150,
			type: "spring"
		},
		y: 0
	}
}
