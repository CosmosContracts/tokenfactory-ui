import { type Transition } from "framer-motion"

export const bounce: Transition = {
	damping: 20,
	mass: 1,
	stiffness: 120,
	type: "spring"
}
