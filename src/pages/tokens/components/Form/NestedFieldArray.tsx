import { FormLabel, Icon, IconButton, Input, VStack } from "@chakra-ui/react"
import { MotionFormControl } from "@theme/motion/components/MotionFormControl"
import { type MsgSetDenomMetadata } from "juno-network/types/codegen/osmosis/tokenfactory/v1beta1/tx"
import {
	type Control,
	useFieldArray,
	type UseFormRegister
} from "react-hook-form"
import { FaFileCirclePlus, FaTrash } from "react-icons/fa6"

export const NestedFieldArray = ({
	control,
	nestIndex,
	register
}: {
	readonly control: Control<MsgSetDenomMetadata>
	readonly nestIndex: number
	readonly register: UseFormRegister<MsgSetDenomMetadata>
}) => {
	const { append, fields, remove } = useFieldArray({
		control,
		name: `metadata.denomUnits.${nestIndex}.aliases`
	} as never)

	return (
		<VStack align="start" spacing="2">
			{fields.map((item, index) => {
				return (
					<MotionFormControl key={item.id}>
						<FormLabel
							mb="0"
							htmlFor={`metadata.denomUnits.${nestIndex}.aliases`}
						>
							Alias #{index + 1}{" "}
							<IconButton
								size="0"
								aria-label="delete denom unit"
								icon={<Icon w="1rem" h="1rem" color="red.500" as={FaTrash} />}
								variant="unstyled"
								_hover={{ filter: "brightness(110%)" }}
								transition="0.15s all"
								onClick={() => remove(index)}
							/>
						</FormLabel>
						<Input
							{...register(`metadata.denomUnits.${nestIndex}.aliases.${index}`)}
						/>
					</MotionFormControl>
				)
			})}

			<IconButton
				pos="absolute"
				top="2"
				right="10"
				size="0"
				aria-label="delete denom unit"
				icon={
					<Icon w="1.5rem" h="1.5rem" color="blue.300" as={FaFileCirclePlus} />
				}
				variant="unstyled"
				_hover={{ filter: "brightness(110%)" }}
				transition="0.15s all"
				onClick={() => append(`Alias ${fields.length}`)}
			/>
		</VStack>
	)
}
