import { create } from "zustand"
import { devtools } from "zustand/middleware"

type ActiveFormStepState = {
	activeStep: [number, number]
	completed: boolean
	setActiveStep: (activeStep: [number, number]) => void
	setCompleted: (completed: boolean) => void
	toggleCompleted: () => void
}

export const useActiveFormStepStore = create<ActiveFormStepState>()(
	devtools((set) => ({
		activeStep: [1, 1],
		completed: false,
		setActiveStep: (activeStep) => set((state) => ({ ...state, activeStep })),
		setCompleted: (completed) => set((state) => ({ ...state, completed })),
		toggleCompleted: () =>
			set((state) => ({ ...state, completed: !state.completed }))
	}))
)
