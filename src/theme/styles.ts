const styles = {
	global: () => {
		return {
			"&::-webkit-scrollbar": {
				background: "rgba(255,255,255,0.1)",
				borderRadius: "4px",
				width: "12px"
			},
			"&::-webkit-scrollbar-thumb": {
				background: "rgba(255,255,255,0.1)",
				borderRadius: "4px"
			},
			"body, html": {
				background: "rgba(8, 6, 11, 1)"
			}
		}
	}
}

export default styles
