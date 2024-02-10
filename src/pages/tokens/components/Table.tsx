/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	Button,
	chakra,
	Flex,
	HStack,
	Icon,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpoint,
	VStack
} from "@chakra-ui/react"
import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable
} from "@tanstack/react-table"
import { type SetStateAction, useState } from "react"
import {
	FaAngleDoubleLeft,
	FaAngleDoubleRight,
	FaAngleLeft,
	FaAngleRight,
	FaArrowAltCircleDown,
	FaArrowAltCircleUp,
	FaSearch,
	FaStopCircle
} from "react-icons/fa"

export type DataTableProps<Data extends object> = {
	readonly columns: Array<ColumnDef<Data, any>>
	readonly data: Data[]
}

export const PortfolioTable = <Data extends object>({
	columns,
	data
}: DataTableProps<Data>) => {
	const [sorting, setSorting] = useState<SortingState>([])
	const [searchValue, setSearchValue] = useState<string>("")
	const handleChange = (event: { target: { value: SetStateAction<string> } }) =>
		setSearchValue(event.target.value)

	const breakpoint = useBreakpoint({ ssr: false })

	const table = useReactTable({
		autoResetPageIndex: false,
		columns,
		data,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onSortingChange: setSorting,
		state: {
			columnVisibility: {
				admins: breakpoint !== "base" && breakpoint !== "sm"
			},
			sorting
		}
	})

	return (
		<Flex pb={3} w="full" maxW="6xl">
			<Flex
				bg="brand.2"
				backgroundBlendMode="soft-light"
				backdropFilter="blur(70px) saturate(180%)"
				flexDir="column"
				px={2}
				py={2}
				rounded="1.25em"
				border="1.6px solid"
				borderColor="border.1"
				maxW="6xl"
				w="full"
			>
				{breakpoint === "base" ||
					(breakpoint === "sm" && (
						<VStack align="start" pb={2} px={0} w="full">
							<InputGroup w="full">
								<InputLeftElement pointerEvents="none">
									<Icon
										_dark={{ color: "white" }}
										as={FaSearch}
										color="white"
									/>
								</InputLeftElement>
								<Input
									_dark={{
										_placeholder: { color: "white" },
										bg: "gray.700",
										color: "white"
									}}
									_placeholder={{ color: "gray.800" }}
									bg="gray.700"
									color="white"
									fontSize="14"
									onChange={handleChange}
									placeholder="Search..."
									rounded="1.25em"
									shadow="md"
									value={searchValue}
									variant="filled"
								/>
							</InputGroup>
						</VStack>
					))}
				<Table>
					<Thead w="full">
						{table.getHeaderGroups().map((headerGroup) => {
							return (
								<Tr key={headerGroup.id} rounded="1.25em">
									{headerGroup.headers.map((header) => {
										const meta: any = header.column.columnDef.meta
										return (
											<Th
												backgroundBlendMode="soft-light"
												color="brand.4"
												borderColor="border.1"
												fontSize="14"
												fontFamily="black"
												isNumeric={meta?.isNumeric}
												key={header.id}
												onClick={header.column.getToggleSortingHandler()}
												px="2"
												pb="2"
												pt="0"
												textTransform="capitalize"
											>
												{/* eslint-disable-next-line no-negated-condition */}
												{header.column.columnDef.header !== "Actions" &&
												header.column.columnDef.header !== "Admin Area" &&
												header.column.columnDef.header !== "Token Info" ? (
													<Button
														bg="brand.2"
														color={
															header.column.getIsSorted()
																? "brand.3"
																: "brand.4"
														}
														borderColor="var(--chakra-colors-border-1) !important"
														border="1.6px solid"
														rounded="0.8em"
														size="sm"
														_hover={{
															color: "brand.3",
															filter: "brightness(110%)"
														}}
														_active={{
															bg: "brand.1",
															color: "brand.3",
															filter: "brightness(100%)"
														}}
														transition="0.15s all"
													>
														{flexRender(
															header.column.columnDef.header,
															header.getContext()
														)}

														<Flex ps={1}>
															{header.column.getIsSorted() ? (
																header.column.getIsSorted() === "desc" ? (
																	<Icon
																		as={FaArrowAltCircleDown}
																		aria-label="sorted descending"
																	/>
																) : (
																	<Icon
																		as={FaArrowAltCircleUp}
																		aria-label="sorted ascending"
																	/>
																)
															) : (
																<Icon
																	as={FaStopCircle}
																	aria-label="not sorted"
																/>
															)}
														</Flex>
													</Button>
												) : header.column.columnDef.header === "Admin Area" ? (
													<HStack>
														<Text color="red.500" w="full">
															{header.column.columnDef.header}
														</Text>
														<InputGroup
															border="1.6px solid"
															borderColor="border.1"
															rounded="2xl"
														>
															<InputLeftElement pointerEvents="none">
																<Icon
																	w="1rem"
																	h="full"
																	as={FaSearch}
																	color="brand.4"
																/>
															</InputLeftElement>
															<Input
																_hover={{
																	cursor: "pointer",
																	filter: "brightness(110%)"
																}}
																_placeholder={{
																	color: "brand.4"
																}}
																border="none"
																bg="brand.2"
																color="white"
																fontSize="14"
																onChange={handleChange}
																placeholder="Search Asset..."
																value={searchValue}
																variant="filled"
															/>
														</InputGroup>
													</HStack>
												) : (
													<Text color="brand.4">
														{header.column.columnDef.header}
													</Text>
												)}
											</Th>
										)
									})}
								</Tr>
							)
						})}
					</Thead>
					<Tbody>
						{table.getRowModel().rows.map((row) => (
							<Tr
								_hover={{
									bg: "brand.2"
								}}
								key={row.id}
								pos="relative"
								rounded="1.25em"
								top="0.5rem"
							>
								{row.getVisibleCells().map((cell) => {
									// see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
									const meta: any = cell.column.columnDef.meta
									return (
										<Td
											_first={{ roundedStart: "1.25em" }}
											_last={{ roundedEnd: "1.25em" }}
											borderBottom="none"
											isNumeric={meta?.isNumeric}
											key={cell.id}
											px="2"
											py="2"
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</Td>
									)
								})}
							</Tr>
						))}
					</Tbody>
				</Table>
				<HStack justify="center" mt={{ base: 4, md: 6 }} w="full">
					<IconButton
						_disabled={{
							_active: {
								bg: "whiteAlpha.200",
								color: "whiteAlpha.500",
								cursor: "not-allowed"
							},
							_focus: {
								bg: "whiteAlpha.200",
								color: "whiteAlpha.500",
								cursor: "not-allowed"
							},
							bg: "blackAlpha.300",
							color: "whiteAlpha.500",
							cursor: "not-allowed"
						}}
						_active={{ color: "brand.4" }}
						aria-label="firstPage"
						bg="brand.1"
						icon={<FaAngleDoubleLeft />}
						isDisabled={!table.getCanPreviousPage()}
						onClick={() => table.setPageIndex(0)}
						rounded="0.8em"
						border="1.6px solid"
						borderColor="border.1"
						_hover={{ color: "brand.3" }}
						color="brand.4"
						size="md"
					/>
					<IconButton
						_disabled={{
							_active: {
								bg: "whiteAlpha.200",
								color: "whiteAlpha.500",
								cursor: "not-allowed"
							},
							_dark: { bg: "whiteAlpha.200" },
							_focus: {
								bg: "whiteAlpha.200",
								color: "whiteAlpha.500",
								cursor: "not-allowed"
							},
							bg: "blackAlpha.300",
							color: "whiteAlpha.500",
							cursor: "not-allowed"
						}}
						_hover={{ color: "brand.3" }}
						_active={{ color: "brand.4" }}
						color="brand.4"
						aria-label="previousPage"
						bg="brand.1"
						icon={<FaAngleLeft />}
						isDisabled={!table.getCanPreviousPage()}
						onClick={() => table.previousPage()}
						rounded="0.8em"
						border="1.6px solid"
						borderColor="border.1"
						size="md"
					/>
					<Text fontFamily="black" color="brand.4">
						{table.getState().pagination.pageIndex + 1}{" "}
						<chakra.span
							fontWeight="200"
							color="brand.4"
							opacity="0.6"
							px="2px"
						>
							of
						</chakra.span>{" "}
						{table.getPageCount()}
					</Text>
					<IconButton
						_disabled={{
							_active: {
								bg: "whiteAlpha.200",
								color: "whiteAlpha.500",
								cursor: "not-allowed"
							},
							_dark: { bg: "whiteAlpha.200" },
							_focus: {
								bg: "whiteAlpha.200",
								color: "whiteAlpha.500",
								cursor: "not-allowed"
							},
							bg: "blackAlpha.300",
							color: "whiteAlpha.500",
							cursor: "not-allowed"
						}}
						_hover={{ color: "brand.3" }}
						_active={{ color: "brand.4" }}
						color="brand.4"
						aria-label="nextPage"
						bg="brand.1"
						icon={<FaAngleRight />}
						isDisabled={!table.getCanNextPage()}
						onClick={() => table.nextPage()}
						rounded="0.8em"
						border="1.6px solid"
						borderColor="border.1"
						size="md"
					/>
					<IconButton
						_disabled={{
							_active: {
								bg: "whiteAlpha.200",
								color: "whiteAlpha.500",
								cursor: "not-allowed"
							},
							_dark: { bg: "whiteAlpha.200" },
							_focus: {
								bg: "whiteAlpha.200",
								color: "whiteAlpha.500",
								cursor: "not-allowed"
							},
							bg: "blackAlpha.300",
							color: "whiteAlpha.500",
							cursor: "not-allowed"
						}}
						_hover={{ color: "brand.3" }}
						_active={{ color: "brand.4" }}
						color="brand.4"
						aria-label="lastPage"
						bg="brand.1"
						icon={<FaAngleDoubleRight />}
						isDisabled={!table.getCanNextPage()}
						onClick={() => table.setPageIndex(table.getPageCount() - 1)}
						rounded="0.8em"
						border="1.6px solid"
						borderColor="border.1"
						size="md"
					/>
				</HStack>
			</Flex>
		</Flex>
	)
}
