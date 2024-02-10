/* eslint-disable import/no-unassigned-import */
import "@fontsource/fugaz-one"
import "@fontsource/roboto-mono"
import App from "./App"
import { ColorModeScript } from "@chakra-ui/react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.querySelector("#root") as HTMLElement)
root.render(
	<>
		<ColorModeScript initialColorMode="light" />
		<App />
	</>
)
