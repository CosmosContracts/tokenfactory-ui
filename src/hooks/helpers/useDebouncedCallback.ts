import debounce from "lodash.debounce"
import { useCallback } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useDebouncedCallback = <T extends (...args: any[]) => any>(
	callback: T,
	wait: number = 40
) => {
	const debouncedCallbackHandler = useCallback(
		() => debounce(callback, wait, { leading: false, trailing: true }),
		[callback, wait]
	)

	return debouncedCallbackHandler()
}
