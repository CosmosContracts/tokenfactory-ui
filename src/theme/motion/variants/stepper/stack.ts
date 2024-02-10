import { type Variants } from "framer-motion"

export const stack: Variants = {
	hidden: {
		backdropFilter: "blur(16px)",
		height: "0rem",
		opacity: 1,
		transition: { duration: 0.2, type: "tween", when: "beforeChildren" },
		width: "0rem"
	},
	step1: {
		height: "22rem",
		opacity: 1,
		transition: { duration: 0.2, type: "tween", when: "afterChildren" },
		width: "28rem"
	},
	step2: {
		height: "24rem",
		opacity: 1,
		transition: { duration: 0.2, type: "tween", when: "afterChildren" },
		width: "32rem"
	},
	step3: {
		height: "25rem",
		opacity: 1,
		transition: { duration: 0.2, type: "tween", when: "afterChildren" },
		width: "25rem"
	}
}
