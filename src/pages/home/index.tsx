import { InfoCard } from "./components/InfoCard"
import { Flex, Grid, Heading, VStack } from "@chakra-ui/react"
import { Logo } from "@components/Assets/Logo"
import { motion } from "framer-motion"

export const Home = () => {
	return (
		<Flex
			animate={{ opacity: 1 }}
			as={motion.main}
			exit={{ opacity: 0 }}
			flexDirection="column"
			gap="2"
			py="12"
			px="8"
			h="full"
			initial={{ opacity: 0 }}
			w="full"
			maxW="7xl"
			align="center"
			justify="start"
		>
			<VStack justify="center" align="start" w="full" minH="25rem" flex="1">
				<Heading fontSize="8xl" fontFamily="black" lineHeight="1">
					Build. On.
				</Heading>
				<Heading>
					<Logo w="auto" h="5.5rem" />
				</Heading>
			</VStack>
			<Grid
				gridTemplateColumns={{ base: "1fr", md: "1fr 1fr 1fr", sm: "1fr 1fr" }}
				w="full"
				gap="8"
			>
				<InfoCard cardType="welcome" />
				<InfoCard cardType="create" />
				<InfoCard cardType="community" />
			</Grid>
		</Flex>
	)
}
