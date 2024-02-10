import {
	type QRCodeDisplayErrorType,
	QRCodeStatus,
	type QRCodeType
} from "../types"
import {
	Box,
	Center,
	Flex,
	IconButton,
	Skeleton,
	Stack,
	Text
} from "@chakra-ui/react"
import { ReloadIcon } from "@components/Assets/ReloadIcon"
import { useRef } from "react"
import { QRCode as QRCodeImage } from "react-qrcode-logo"

export const QRCodeSkeleton = () => (
	<Center
		flexDirection="column"
		maxW={72}
		minH={40}
		px={6}
		textAlign="center"
		w="full"
	>
		<Skeleton borderRadius="base" h={48} w={48} />
	</Center>
)

export const QRCodeDisplayError = ({ onRefresh }: QRCodeDisplayErrorType) => {
	return (
		<Center p="5" pos="relative" w="full">
			<Center
				bg="lightBackground"
				border="2px solid black"
				h="5rem"
				w="5rem"
				pos="absolute"
				zIndex="3"
				rounded="2xl"
			>
				<IconButton
					color="black"
					bg="secondary.400"
					aria-label="refresh-button"
					rounded="full"
					icon={<ReloadIcon />}
					onClick={onRefresh}
					size="lg"
				/>
			</Center>
			<Flex
				as={QRCodeImage}
				bgColor="#ffffff"
				ecLevel="L"
				eyeRadius={[
					[25, 25, 0, 25], // top/left eye
					[25, 25, 25, 0], // top/right eye
					[25, 0, 25, 25] // bottom/left
				]}
				fgColor="var(--chakra-colors-brand-3)"
				logoImage="/assets/logo.svg"
				logoWidth={100}
				maxW="sm"
				overflow="hidden"
				qrStyle="dots"
				quietZone={20}
				rounded="3xl"
				size={250}
				value=""
			/>
		</Center>
	)
}

export const QRCode = ({
	description,
	errorDesc,
	errorTitle,
	link,
	onRefresh,
	qrCodeSize = 230,
	status
}: QRCodeType) => {
	const descRef = useRef<HTMLDivElement>(null)

	return (
		<Stack px="3" align="center" w="full">
			{description && <Text color="brand.4">{description}</Text>}
			{status === QRCodeStatus.Pending && <QRCodeSkeleton />}
			{status === QRCodeStatus.Done && (
				<Flex rounded="3xl" overflow="hidden">
					<Flex
						as={QRCodeImage}
						bgColor="red"
						ecLevel="M"
						eyeRadius={[
							[25, 25, 0, 25], // top/left eye
							[25, 25, 25, 0], // top/right eye
							[25, 0, 25, 25] // bottom/left
						]}
						fgColor="#262626"
						logoImage="/assets/logo.svg"
						logoWidth={100}
						qrStyle="squares"
						quietZone={20}
						size={250}
						value={link}
					/>
				</Flex>
			)}
			{status === QRCodeStatus.Error ||
				(status === QRCodeStatus.Expired && (
					<QRCodeDisplayError onRefresh={onRefresh!} qrCodeSize={qrCodeSize} />
				))}
			{errorTitle && (
				<Text
					color="red.400"
					pt="2"
					fontWeight="600"
					w="full"
					textAlign="center"
				>
					{errorTitle}
				</Text>
			)}
			{errorDesc && (
				<Box pos="relative">
					<Box
						fontSize="sm"
						fontWeight="base"
						lineHeight="shorter"
						maxH="16"
						opacity="0.75"
						overflowX="hidden"
						overflowY="auto"
						px="1"
						textAlign="center"
						ref={descRef}
						css={{
							// Chromium
							"&::-webkit-scrollbar": {
								display: "none"
							},
							// Firefox
							scrollbarWidth: "none"
						}}
					>
						<Text color="red.400">{errorDesc}</Text>
					</Box>
				</Box>
			)}
		</Stack>
	)
}
