import { type Variants } from "framer-motion"
import { bounce } from "theme/motion/transitions"

export const popUp: Variants = {
	hide: {
		opacity: 0,
		scale: 0.5,
		transition: bounce
	},
	show: { opacity: 1, scale: 1, transition: bounce }
}
