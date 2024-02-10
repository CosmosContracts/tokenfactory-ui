import { BigNumber } from "bignumber.js"

export const convertMicroDenomToDenom = (
	value: BigNumber | number | string,
	decimals: number
): BigNumber => {
	if (decimals === 0) return BigNumber(value ?? 0)
	const bnValue = BigNumber(value)
	return bnValue.dividedBy(BigNumber(10).pow(decimals))
}

export const convertDenomToMicroDenom = (
	value: BigNumber | number | string,
	decimals: number
): BigNumber => {
	if (decimals === 0) return BigNumber(value ?? 0)
	const bnValue = BigNumber(value)
	return bnValue.multipliedBy(BigNumber(10).pow(decimals))
}
