import { type Variants } from "framer-motion"
import { tween } from "theme/motion/transitions"

export const fadeIn: Variants = {
	hide: {
		opacity: 0,
		transition: tween,
		y: 20
	},
	show: { opacity: 1, transition: tween, y: 0 }
}
