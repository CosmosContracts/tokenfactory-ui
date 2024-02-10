import { CreateForm } from "./components/CreateForm"
import { Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"

export const Create = () => {
	return (
		<Flex
			animate={{ opacity: 1 }}
			as={motion.main}
			exit={{ opacity: 0 }}
			flexDirection="column"
			gap="2"
			py="4"
			h="full"
			initial={{ opacity: 0 }}
			w="full"
			maxW="7xl"
			align="center"
			justify="center"
		>
			<CreateForm />
		</Flex>
	)
}
