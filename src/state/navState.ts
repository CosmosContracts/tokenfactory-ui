import { create } from "zustand"
import { devtools, persist } from "zustand/middleware"

type NavigationState = {
	activeRoute: string
	setActiveRoute: (activeRoute: string | undefined) => void
}

export const useNavigationStore = create<NavigationState>()(
	devtools(
		persist(
			(set) => ({
				activeRoute: "/",
				setActiveRoute: (activeRoute) =>
					set((state) => ({ ...state, activeRoute }))
			}),
			{
				name: "tokenfactory-navState",
				version: 0
			}
		)
	)
)
