import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Page404 = () => {
	const navigate = useNavigate()

	return (
		<Center
			animate={{ opacity: 1 }}
			as={motion.main}
			exit={{ opacity: 0 }}
			flexDirection="column"
			initial={{ opacity: 0 }}
			textAlign="center"
		>
			<Heading fontSize="5em">Page Not Found</Heading>
			<VStack gap={3} pt={2}>
				<Text fontSize="2xl">There's nothing here. Want to go back?</Text>
				<Button
					_hover={{ filter: "brightness(120%)" }}
					bg="brand.1"
					color="white"
					fontSize="1.3em"
					onClick={() => navigate("/")}
					rounded="1em"
					shadow="md"
				>
					Take me h-oooo-me
				</Button>
			</VStack>
		</Center>
	)
}

export default Page404
