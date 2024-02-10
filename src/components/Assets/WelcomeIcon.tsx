import { Icon, type IconProps } from "@chakra-ui/react"
import { memo } from "react"

export const WelcomeIcon = memo((props: IconProps) => {
	return (
		<Icon fill="none" viewBox="0 0 32 48" {...props}>
			<path
				fill="#383037"
				d="M28,8H4c-2.2,0-4,1.8-4,4v24c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V12C32,9.8,30.2,8,28,8z"
			/>
			<g>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					fill="#1F1A1D"
					d="M30.8,16.9l-8.3-0.3l5.6-5.7l-2.3-2.1L19.7,14l-0.3-7.8h-3.2L15.9,14L9.7,8.7l-2.3,2.1l5.6,5.7l-8.3,0.3v3
					l8.3,0.3l-5.6,5.7L9.7,28l6-5.2L16,35.4l-4.8,0.3v2.8l4.9,0.3l0.1,4.4h3.2l0.1-4.4l4.9-0.3v-2.8l-4.9-0.3l0.3-12.6l6,5.2l2.3-2.1
					l-5.6-5.7l8.3-0.3V16.9z"
				/>
			</g>
			<g>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					fill="#FFEBD2"
					d="M29,15.6l-8.3-0.3l5.6-5.7l-2.3-2.1l-6.1,5.3L17.6,5h-3.2l-0.3,7.8L7.9,7.5L5.7,9.6l5.6,5.7L3,15.6v3l8.3,0.3
					l-5.6,5.7l2.3,2.1l6-5.2l0.3,12.6l-4.8,0.3v2.8l4.9,0.3l0.1,4.4h3.2l0.1-4.4l4.9-0.3v-2.8l-4.9-0.3L18,21.6l6,5.2l2.3-2.1L20.7,19
					l8.3-0.3V15.6z"
				/>
			</g>
		</Icon>
	)
})
