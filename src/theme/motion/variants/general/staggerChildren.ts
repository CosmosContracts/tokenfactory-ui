import { type Variants } from "framer-motion"

export const staggerChildren: Variants = {
	hide: {
		scale: 0,
		transition: {
			ease: "easeInOut",
			when: "afterChildren"
		}
	},
	show: {
		scale: 1,
		transition: {
			ease: "linear",
			staggerChildren: 0.5,
			when: "beforeChildren"
		}
	}
}
