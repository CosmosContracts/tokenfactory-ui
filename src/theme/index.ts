import colors from "./colors"
import { checkboxTheme } from "./components/Checkbox"
import { inputTheme } from "./components/Input"
import { skeletonTheme } from "./components/Skeleton"
import { textareaTheme } from "./components/Textarea"
import { config } from "./config"
import { shadows } from "./shadows"
import styles from "./styles"
import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
	colors,
	components: {
		Checkbox: checkboxTheme,
		Input: inputTheme,
		Skeleton: skeletonTheme,
		Textarea: textareaTheme
	},
	config,
	fonts: {
		black: "'Satoshi-Black', sans-serif",
		body: "'Satoshi-Variable', sans-serif",
		heading: "'Satoshi-VariableItalic', sans-serif",
		mono: "'Roboto Mono', monospace",
		number: "'Fugaz One', sans-serif"
	},
	shadows,
	styles
})
