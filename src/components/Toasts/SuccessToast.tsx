import { HStack, IconButton, Text, VStack } from "@chakra-ui/react"
import { type ExecuteResult } from "@cosmjs/cosmwasm-stargate"
import { type DeliverTxResponse } from "@cosmjs/stargate"
import { CheckRive } from "components/Assets/CheckRive"
import { HiExternalLink } from "react-icons/hi"
import { IoMdCube } from "react-icons/io"

const SuccessToast = ({
	chainName,
	data,
	txType
}: {
	readonly chainName?: string
	readonly data: DeliverTxResponse | ExecuteResult
	readonly txType: string
}) => {
	return (
		<HStack
			spacing="0.5"
			w="full"
			h="3.5rem"
			overflow="hidden"
			align="center"
			pe="3"
		>
			<CheckRive w="6rem" h="6rem" />
			<VStack align="start" spacing="1" w="full">
				<Text
					color="white"
					fontFamily="black"
					h="full"
					fontWeight="200"
					lineHeight="1"
					fontSize="xl"
					noOfLines={1}
					w="full"
				>
					{txType}
				</Text>
				<HStack h="full" color="white" justify="start">
					<IoMdCube size="18" />
					<Text
						color="white"
						fontFamily="body"
						fontSize="md"
						fontWeight="600"
						lineHeight="1"
						noOfLines={1}
						w="full"
					>
						{data.height}
					</Text>
				</HStack>
			</VStack>
			<IconButton
				_hover={{ bg: "whiteAlpha.200" }}
				aria-label="Go to Block Explorer"
				as="a"
				color="white"
				href={`https://mintscan.io/${
					chainName === "cosmoshub" ? "cosmos" : chainName
				}/tx/${data.transactionHash}`}
				icon={<HiExternalLink />}
				rounded="full"
				size="md"
				target="_blank"
				variant="ghost"
			/>
		</HStack>
	)
}

export default SuccessToast
