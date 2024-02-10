/* eslint-disable import/no-unassigned-import */
import "react-toastify/dist/ReactToastify.css"
import { ChakraProvider } from "@chakra-ui/react"
import { JunoProvider } from "@components/JunoProvider"
import { Fonts } from "@components/Layout/components/Fonts"
import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ErrorFallback } from "components/ErrorFallback"
import { Layout } from "components/Layout"
import { RouterSetup } from "components/Router/RouterSetup"
import { MotionConfig } from "framer-motion"
import { ErrorBoundary } from "react-error-boundary"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router-dom"
import { queryClient } from "services/queryClient"
import { theme } from "theme"

const App = () => {
	return (
		<HelmetProvider>
			<ChakraProvider theme={theme}>
				<ErrorBoundary
					// eslint-disable-next-line react/no-unstable-nested-components
					fallbackRender={({ error }) => {
						return <ErrorFallback errorMessage={error.message} />
					}}
				>
					<Fonts />
					<QueryClientProvider client={queryClient}>
						<ReactQueryDevtools initialIsOpen={false} />
						<JunoProvider>
							<BrowserRouter>
								<MotionConfig transition={{ duration: 0.25, type: "tween" }}>
									<Layout>
										<RouterSetup />
									</Layout>
								</MotionConfig>
							</BrowserRouter>
						</JunoProvider>
					</QueryClientProvider>
				</ErrorBoundary>
			</ChakraProvider>
		</HelmetProvider>
	)
}

export default App
