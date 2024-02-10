import { NestedFieldArray } from "./NestedFieldArray"
import {
	FormLabel,
	HStack,
	Icon,
	IconButton,
	Input,
	Spacer,
	Text,
	VStack
} from "@chakra-ui/react"
import { MotionFormControl } from "@theme/motion/components/MotionFormControl"
import { type MsgSetDenomMetadata } from "juno-network/types/codegen/osmosis/tokenfactory/v1beta1/tx"
import {
	type Control,
	useFieldArray,
	type UseFormGetValues,
	type UseFormRegister
} from "react-hook-form"
import { FaCirclePlus, FaCircleXmark } from "react-icons/fa6"

export const FieldArray = ({
	control,
	getValues,
	register
}: {
	readonly control: Control<MsgSetDenomMetadata>
	readonly getValues: UseFormGetValues<MsgSetDenomMetadata>
	readonly register: UseFormRegister<MsgSetDenomMetadata>
}) => {
	const { append, fields, remove } = useFieldArray({
		control,
		name: "metadata.denomUnits"
	})

	return (
		<>
			<HStack align="center">
				<Text fontFamily="black">
					Denom Units ({getValues()?.metadata?.denomUnits.length})
				</Text>
				<Spacer />
				<IconButton
					size="sm"
					aria-label="add denom unit"
					icon={
						<Icon w="1.25rem" h="1.25rem" color="green.300" as={FaCirclePlus} />
					}
					variant="unstyled"
					_hover={{ filter: "brightness(110%)" }}
					transition="0.15s all"
					onClick={() => append({ aliases: [], denom: "", exponent: 0 })}
				/>
			</HStack>

			<VStack align="center" spacing="4">
				{fields.map((item, index) => {
					return (
						<MotionFormControl
							bg="brand.2"
							px="3"
							pb="3"
							pt="5"
							border="1.6px solid"
							borderColor="border.1"
							rounded="2xl"
							key={item.id}
						>
							<FormLabel mb="0" htmlFor={`metadata.denomUnits.${index}.denom`}>
								Denom
							</FormLabel>
							<Input
								id={`metadata.denomUnits.${index}.denom`}
								letterSpacing={0.8}
								_placeholder={{ letterSpacing: 0.8 }}
								placeholder="BITCOIN"
								{...register(`metadata.denomUnits.${index}.denom`, {
									required: "Required"
								})}
							/>

							<FormLabel
								mb="0"
								htmlFor={`metadata.denomUnits.${index}.exponent`}
							>
								Exponent
							</FormLabel>
							<Input
								id={`metadata.denomUnits.${index}.exponent`}
								letterSpacing={0.8}
								_placeholder={{ letterSpacing: 0.8 }}
								placeholder="0"
								{...register(`metadata.denomUnits.${index}.exponent`, {
									required: "Required"
								})}
							/>
							<NestedFieldArray nestIndex={index} {...{ control, register }} />

							<IconButton
								pos="absolute"
								top="2"
								right="2"
								size="0"
								aria-label="delete denom unit"
								icon={
									<Icon
										w="1.5rem"
										h="1.5rem"
										color="red.500"
										as={FaCircleXmark}
									/>
								}
								variant="unstyled"
								_hover={{ filter: "brightness(110%)" }}
								transition="0.15s all"
								onClick={() => remove(index)}
							/>
						</MotionFormControl>
					)
				})}
			</VStack>
		</>
	)
}
