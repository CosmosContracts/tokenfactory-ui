import { type SimpleModalViewType } from "../types"
import { Stack } from "@chakra-ui/react"
import React from "react"

export const SimpleModalView = ({
	modalContent,
	modalHead
}: SimpleModalViewType) => {
	return (
		<Stack color="brand.4" flex={1} h="full" spacing={1}>
			{modalHead}
			{modalContent}
		</Stack>
	)
}
