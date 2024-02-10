import { RouterArea } from "./components/RouterArea"
import { Box, Flex, Spacer, useBreakpoint } from "@chakra-ui/react"
import { Logo } from "@components/Assets/Logo"
import { ConnectButton } from "@components/ConnectButton"
import { type PropsWithChildren } from "react"
import { ToastContainer } from "react-toastify"

export const Layout = ({ children }: PropsWithChildren) => {
	const breakpoint = useBreakpoint({ ssr: false })

	return (
		<Flex
			color="brand.4"
			maxW="100vw"
			transition="0.5s ease-out"
			direction="column"
		>
			<Flex
				direction={{ base: "column", md: "row" }}
				h="100lvh"
				pos="relative"
				w="full"
			>
				<Box
					zIndex="0"
					pos="absolute"
					w="full"
					h="full"
					bgImage="url(/assets/background.jpg)"
					bgSize="cover"
				/>
				<Flex
					zIndex="1"
					flex="1"
					w="full"
					justify="start"
					align="center"
					flexDir="column"
					overflowY="auto"
				>
					<Flex
						justifyContent={{ base: "space-between", md: "start" }}
						w="full"
						borderBottom="1px solid"
						borderBottomColor="border.1"
						bg="transparent"
						pe="3"
						ps="6"
						py="3"
						gap="5"
					>
						<Logo h="full" w="7rem" />
						<RouterArea />
						{breakpoint !== "base" && breakpoint !== "sm" && <Spacer />}
						{breakpoint !== "base" && breakpoint !== "sm" && <ConnectButton />}
					</Flex>
					{children}
				</Flex>
			</Flex>
			<ToastContainer
				autoClose={3_000}
				bodyStyle={{
					color: "white",
					fontFamily: "var(--chakra-fonts-body)",
					fontSize: "xl"
				}}
				closeButton={false}
				closeOnClick
				draggableDirection="x"
				draggablePercent={20}
				icon={false}
				key="toastContainer"
				newestOnTop={false}
				pauseOnHover
				position={
					breakpoint === "base" || breakpoint === "sm"
						? "bottom-center"
						: "bottom-right"
				}
				style={{
					width: "auto"
				}}
				toastStyle={{
					backdropFilter: "saturate(180%) blur(20px)",
					background: "var(--chakra-colors-brand-2)",
					border: "1.6px solid",
					borderBottomLeftRadius:
						breakpoint === "base" || breakpoint === "sm" ? "0" : "1.25em",
					borderBottomRightRadius:
						breakpoint === "base" || breakpoint === "sm" ? "0" : "1.25em",
					borderColor: "var(--chakra-colors-border-1)",
					borderRadius: "1.75em",
					color: "white",
					padding: "0.5rem",
					width: "25rem"
				}}
			/>
		</Flex>
	)
}
