import { QueryCache, QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: true
		}
	},
	queryCache: new QueryCache({
		onError(error, query) {
			if (query?.meta?.errorMessage) {
				throw new Error("Implement toast notification")
			} else {
				throw new Error("Error fetching data: " + error.message)
			}
		}
	})
})
