import { HStack, Text, VStack } from "@chakra-ui/react"
import { CommunityIcon } from "@components/Assets/CommunityIcon"
import { CreateIcon } from "@components/Assets/CreateIcon"
import { WelcomeIcon } from "@components/Assets/WelcomeIcon"

export const InfoCard = ({
	cardType
}: {
	readonly cardType: "welcome" | "create" | "community"
}) => {
	return (
		<VStack
			align="start"
			w="full"
			bg="brand.2"
			rounded="2xl"
			border="1.6px solid"
			borderColor="border.1"
			px="3"
			py="3"
			backdropFilter="blur(20px)"
			backgroundBlendMode="soft-light"
		>
			<HStack w="full">
				{cardType === "welcome" && <WelcomeIcon w="2rem" h="2rem" />}
				{cardType === "create" && <CreateIcon w="2rem" h="2rem" />}
				{cardType === "community" && <CommunityIcon w="2rem" h="2rem" />}
				{cardType === "welcome" && (
					<Text fontFamily="black" fontSize="2xl">
						Welcome to Juno
					</Text>
				)}
				{cardType === "create" && (
					<Text fontFamily="black" fontSize="2xl">
						Create your own token
					</Text>
				)}
				{cardType === "community" && (
					<Text fontFamily="black" fontSize="2xl">
						Build a thriving community
					</Text>
				)}
			</HStack>
			{cardType === "welcome" && (
				<Text fontFamily="body" fontWeight="600" color="brand.5" fontSize="md">
					Build on Juno and experience the power of CosmWasm for your project.
				</Text>
			)}
			{cardType === "create" && (
				<Text fontFamily="body" fontWeight="600" color="brand.5" fontSize="md">
					Get started with your very own project in mere seconds.
				</Text>
			)}
			{cardType === "community" && (
				<Text fontFamily="body" fontWeight="600" color="brand.5" fontSize="md">
					Meet one of the most invested communities and grow your reach.
				</Text>
			)}
		</VStack>
	)
}
