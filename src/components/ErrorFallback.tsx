import {
	Button,
	Center,
	chakra,
	Flex,
	Heading,
	HStack,
	Icon,
	Text,
	useClipboard,
	VStack
} from "@chakra-ui/react"
import {
	FaBug,
	FaCircleCheck,
	FaClipboard,
	FaHandPointRight,
	FaRocket
} from "react-icons/fa6"

const reloadPage = () => {
	window.location.reload()
}

export const ErrorFallback = ({
	errorMessage
}: {
	readonly errorMessage: string
}) => {
	const { hasCopied, onCopy } = useClipboard(errorMessage)

	return (
		<Center w="full" h="100vh" bg="gray.900">
			<Flex
				bg="rgba(0,255,255,0.1)"
				backgroundBlendMode="soft-light"
				backdropFilter="blur(70px) saturate(140%)"
				borderColor="red.400"
				flexDirection="column"
				alignItems="center"
				justifyContent="center"
				textAlign="center"
				rounded="3xl"
				shadow="md"
				px={4}
				py={4}
			>
				{/* <CatError color="catred.400" boxSize="8rem" filter="drop-shadow(0px 0px 2px red)" /> */}
				<Heading fontWeight="900" fontFamily="heading" fontSize="3xl">
					This app crashed and could not recover.
					<br />
					<chakra.span fontFamily="heading" fontSize="md" maxW="sm">
						Sorry 'bout that.
					</chakra.span>
				</Heading>

				<VStack h="20rem" spacing={3} w="full">
					<Text maxW="md">
						Please copy this error and report it to the team. <br />
						Thank you!
					</Text>
					<Flex
						flex={1}
						h="full"
						direction="column"
						py={2}
						px={4}
						rounded="3xl"
						w="full"
						bg="rgba(255,255,255,0.05)"
						backgroundBlendMode="soft-light"
						backdropFilter="saturate(140%)"
					>
						<Text h="full">{errorMessage}</Text>
					</Flex>
					<HStack align="center" w="full" justify="space-around">
						<Button
							shadow="md"
							_hover={{
								shadow: "glowMd"
							}}
							fontFamily="heading"
							rounded="0.9em"
							aria-label="Copied error message"
							leftIcon={
								hasCopied ? (
									<Icon as={FaCircleCheck} color="green.200" size={20} />
								) : (
									<Icon as={FaClipboard} size={20} />
								)
							}
							onClick={() => {
								onCopy()
							}}
							size="md"
							justifyContent="start"
						>
							{hasCopied ? "Copied" : "Copy"}
						</Button>
						<Icon h="3rem" w="1.5rem" as={FaHandPointRight} />
						<Button
							shadow="md"
							rounded="0.9em"
							aria-label="Copied error message"
							leftIcon={<Icon as={FaBug} h="full" w="full" />}
							onClick={() => {
								onCopy()
							}}
							size="md"
							_hover={{
								shadow: "glowMd"
							}}
							fontFamily="heading"
						>
							Report
						</Button>
						<Icon h="3rem" w="1.5rem" as={FaHandPointRight} />
						<Button
							shadow="md"
							leftIcon={<Icon w="full" h="full" as={FaRocket} />}
							_hover={{
								shadow: "glowMd"
							}}
							fontFamily="heading"
							variant="ghost"
							color="white"
							onClick={() => reloadPage()}
							size="md"
							bg="rgba(255,255,255,0.05)"
							backgroundBlendMode="soft-light"
							backdropFilter="blur(20px) saturate(140%)"
							rounded="0.9em"
						>
							Relaunch
						</Button>
					</HStack>
				</VStack>
			</Flex>
		</Center>
	)
}
