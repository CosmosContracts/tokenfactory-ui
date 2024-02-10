import { type Variants } from "framer-motion"

export const button: Variants = {
	step1: {
		bottom: 15,
		opacity: 1,
		transition: { duration: 0.2, type: "tween", when: "afterChildren" },
		width: "6rem"
	},
	step2: {
		bottom: 15,
		opacity: 1,
		transition: { duration: 0.2, type: "tween", when: "afterChildren" },
		width: "6rem"
	},
	step3: {
		bottom: 15,
		opacity: 1,
		transition: { duration: 0.2, type: "tween", when: "afterChildren" },
		width: "9rem"
	}
}
