import { Box } from "@chakra-ui/react"
import { useActiveFormStepStore } from "@state/activeFormStepState"
import { MotionFlex, MotionIcon } from "@theme/motion/components"
import { stepper } from "@theme/motion/variants"
import { useMount } from "ahooks"
import {
	animate,
	type AnimationControls,
	motion,
	useAnimation,
	useMotionValue,
	type ValueAnimationTransition,
	type Variants
} from "framer-motion"
import { useEffect, useState } from "react"

type ItemProps = {
	readonly active?: boolean
	readonly activeStep?: number
	readonly controls: AnimationControls
	readonly done?: boolean
}

const transition: ValueAnimationTransition = {
	duration: 0.25,
	ease: "easeInOut",
	type: "tween"
}

type StepperProps = {
	readonly activeStep: number
}

const Line = ({ controls }: { readonly controls: AnimationControls }) => {
	const style = {
		backgroundColor: "rgba(255, 255, 255, 0.2)",
		height: "0.2rem",
		width: "80px"
	}

	const variants: Variants = {
		initial: { width: 0 },
		start: {
			backgroundColor: "rgba(129, 253, 172, 1)",
			height: "0.2rem",
			transition: { duration: 0.25 },
			width: "80px"
		}
	}

	return (
		<Box style={style}>
			<MotionFlex
				style={style}
				initial="initial"
				variants={variants}
				animate={controls}
			/>
		</Box>
	)
}

const Circle = ({ active, activeStep, controls, done }: ItemProps) => {
	const stepBackground = useMotionValue("rgba(255, 255, 255, 0.2)")

	const donePathLength = useMotionValue(0)
	const doneOpacity = useMotionValue(0)

	const stepOnePathLength = useMotionValue(0)
	const stepOneOpacity = useMotionValue(0)

	const stepTwoPathLength = useMotionValue(0)
	const stepTwoOpacity = useMotionValue(0)

	const stepThreePathLength = useMotionValue(0)
	const stepThreeOpacity = useMotionValue(0)

	useEffect(() => {
		if (active) {
			void animate(stepBackground, "rgba(30, 30, 30, 1)", transition)

			void animate(donePathLength, 0, transition)
			void animate(doneOpacity, 0, transition)

			switch (activeStep) {
				case 1:
					void animate(stepOnePathLength, 1, transition)
					void animate(stepOneOpacity, 1, transition)
					void animate(stepTwoPathLength, 0, transition)
					void animate(stepTwoOpacity, 0, transition)
					void animate(stepThreePathLength, 0, transition)
					void animate(stepThreeOpacity, 0, transition)
					break
				case 2:
					void animate(stepOnePathLength, 0, transition)
					void animate(stepOneOpacity, 0, transition)
					void animate(stepTwoPathLength, 1, transition)
					void animate(stepTwoOpacity, 1, transition)
					void animate(stepThreePathLength, 0, transition)
					void animate(stepThreeOpacity, 0, transition)
					break
				case 3:
					void animate(stepOnePathLength, 0, transition)
					void animate(stepOneOpacity, 0, transition)
					void animate(stepTwoPathLength, 0, transition)
					void animate(stepTwoOpacity, 0, transition)
					void animate(stepThreePathLength, 1, transition)
					void animate(stepThreeOpacity, 1, transition)
					break

				default:
					void animate(stepOnePathLength, 0, transition)
					void animate(stepOneOpacity, 0, transition)
					void animate(stepTwoPathLength, 0, transition)
					void animate(stepTwoOpacity, 0, transition)
					void animate(stepThreePathLength, 0, transition)
					void animate(stepThreeOpacity, 0, transition)
					break
			}
		} else if (done) {
			void animate(stepBackground, "rgba(129, 253, 172, 1)", transition)

			void animate(donePathLength, 1, transition)
			void animate(doneOpacity, 1, transition)

			void animate(stepOnePathLength, 0, transition)
			void animate(stepOneOpacity, 0, transition)

			void animate(stepTwoPathLength, 0, transition)
			void animate(stepTwoOpacity, 0, transition)

			void animate(stepThreePathLength, 0, transition)
			void animate(stepThreeOpacity, 0, transition)
		} else {
			void animate(stepBackground, "rgba(255, 255, 255, 0.2)", transition)

			void animate(donePathLength, 0, transition)
			void animate(doneOpacity, 0, transition)

			void animate(stepOnePathLength, 0, transition)
			void animate(stepOneOpacity, 0, transition)

			void animate(stepTwoPathLength, 0, transition)
			void animate(stepTwoOpacity, 0, transition)

			void animate(stepThreePathLength, 0, transition)
			void animate(stepThreeOpacity, 0, transition)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active, activeStep, done])

	return (
		<MotionFlex
			shadow="md"
			boxSize="2rem"
			rounded="full"
			align="center"
			justify="center"
			style={{ backgroundColor: stepBackground }}
			animate={controls}
		>
			<MotionIcon
				animate="show"
				exit="hidden"
				py="0.5"
				strokeWidth="1"
				strokeLinecap="round"
				strokeLinejoin="round"
				height="1.75rem"
				strokeDasharray="1 1"
				viewBox="0 0 32 48"
				width="1.75rem"
			>
				<motion.g style={{ opacity: doneOpacity }}>
					<motion.path
						d="m5.2 21.4l7.5 7 12.6-19.4 5.4 5.2-16.9 26-12.8-12.1z"
						style={{
							pathLength: donePathLength
						}}
					/>
				</motion.g>

				<motion.g
					fill="var(--chakra-colors-brand-4)"
					stroke="var(--chakra-colors-brand-4)"
					style={{ opacity: stepOneOpacity }}
				>
					<motion.path
						d="M24.3 7.1c-.2-.1-.3-.2-.4-.2H23.6l-.1.1-.1.1-2.4 7.2-3.1.5-2.2-2.3 2.4-7v-.2s0-.1-.1-.1v-.1l-.1-.1c-.1-.1-.3-.1-.4-.1-3.6.3-6.7 2.7-7.8 6.1-1.1 3.3-.2 7 2.2 9.4l-5.7 17c-.7 2 .4 4.2 2.4 4.9 2 .7 4.2-.4 4.9-2.4l5.8-17.1c3.4-.4 6.3-2.8 7.5-6.1 1.1-3.4.2-7.2-2.5-9.6z"
						style={{
							pathLength: stepOnePathLength
						}}
					/>
				</motion.g>

				<motion.g
					fill="white"
					stroke="white"
					style={{ opacity: stepTwoOpacity }}
				>
					<motion.path
						d="M26 15.3s-3.2-.2-5.4 3.3h-.2l-.1-.1h.1-.1l-.2-.5s-.3-1.3-.3-1.9c0-.6.2-1.1.2-1.1l1.9-6.5s.4-1.1-.6-1.5c-1-.4-1.4.5-1.4.5s-2.2 5.9-2.4 6.7c-.2.7-.8-.1-.8-.1l.1-7.6s.1-1.3-1.2-1.4c-1.4-.1-1.2 1.8-1.2 1.8s-.1 6.5-.1 7.3c0 .8-.5.1-.5.1s-1.8-6.1-2-6.8c-.2-.6-.5-1.3-1.4-1.2-1 .1-.6 2.2-.6 2.2s1.5 6.2 1.6 6.7c.1.5-.2.4-.2.4S8.2 11 8 10.7c-.2-.3-.7-1-1.6-.5-.9.5.3 2.5.3 2.5s2.2 3.9 2.5 4.3c.2.4.2.6.2.6l.1 3c.6 4 2.5 5.1 2.5 5.1L11.4 40H19l-.4-14.7s.5-.3 1.6-1c1.1-.6 2.1-2.2 2.3-2.7.2-.5.8-2 2.3-3.4 1.5-1.5 1.8-.9 2.1-1.7.3-.9-.9-1.2-.9-1.2z"
						style={{
							pathLength: stepTwoPathLength
						}}
					/>
				</motion.g>
				<motion.g
					fill="white"
					stroke="white"
					style={{ opacity: stepThreeOpacity }}
				>
					<motion.path
						style={{
							pathLength: stepThreePathLength
						}}
						d="M29,15.6l-8.3-0.3l5.6-5.7l-2.3-2.1l-6.1,5.3L17.6,5h-3.2l-0.3,7.8L7.9,7.5L5.7,9.6l5.6,5.7L3,15.6v3l8.3,0.3   l-5.6,5.7l2.3,2.1l6-5.2l0.3,12.6l-4.8,0.3v2.8l4.9,0.3l0.1,4.4h3.2l0.1-4.4l4.9-0.3v-2.8l-4.9-0.3L18,21.6l6,5.2l2.3-2.1L20.7,19   l8.3-0.3V15.6z"
					/>
				</motion.g>
			</MotionIcon>
		</MotionFlex>
	)
}

export const SignUpStepper = ({ activeStep }: StepperProps) => {
	const [active, setActive] = useState(activeStep)

	const stepperControls = useAnimation()
	const line1 = useAnimation()
	const line2 = useAnimation()
	const firstCircle = useAnimation()
	const secondCircle = useAnimation()
	const thirdCircle = useAnimation()

	const { completed } = useActiveFormStepStore()

	useEffect(() => {
		setActive(activeStep)
	}, [activeStep])

	useEffect(() => {
		if (active === 1) {
			const sequence = async () => {
				await line1.start("initial")
				await line2.start("initial")
				await stepperControls.start("show")
			}

			void sequence()
		}

		if (active === 2) {
			const sequence = async () => {
				await line1.start("start")
				await secondCircle.start("initial")
				await line2.start("initial")
				await thirdCircle.start("initial")
				await stepperControls.start("show")
			}

			void sequence()
		}

		if (active === 3) {
			const sequence = async () => {
				await line2.start("start")
				await thirdCircle.start("start")
				await stepperControls.start("show")
			}

			void sequence()
		}

		if (completed) {
			const sequence = async () => {
				await line1.start("start")
				await secondCircle.start("start")
				await line2.start("start")
				await thirdCircle.start("start")
				await stepperControls.start("show")
			}

			void sequence()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active])

	// Intro animation on first mount
	useMount(() => {
		void stepperControls.start("show", {
			duration: 0.2,
			ease: "easeOut",
			type: "tween"
		})
	})

	return (
		<MotionFlex
			variants={stepper}
			initial="hidden"
			animate={stepperControls}
			pos="relative"
			w="full"
			justify="center"
			align="center"
		>
			<Circle
				active={active === 1}
				done={active > 1}
				controls={firstCircle}
				activeStep={activeStep}
			/>
			<Line controls={line1} />
			<Circle
				active={active === 2}
				done={active > 2}
				controls={secondCircle}
				activeStep={activeStep}
			/>
			<Line controls={line2} />
			<Circle
				active={active === 3}
				done={active > 3}
				controls={thirdCircle}
				activeStep={activeStep}
			/>
		</MotionFlex>
	)
}
