import { Global } from "@emotion/react"

export const Fonts = () => (
	<Global
		styles={`
      /* latin */
      @font-face {
        font-family: 'Satoshi-VariableItalic';
        src:  url('/assets/fonts/Satoshi-VariableItalic.woff2') format('woff2'),
              url('/assets/fonts/Satoshi-VariableItalic.woff') format('woff'),
              url('/assets/fonts/Satoshi-VariableItalic.ttf') format('truetype');
        font-weight: 300 900;
        font-display: swap;
        font-style: italic;
      }
      /* latin */
      @font-face {
        font-family: 'Satoshi-Variable';
        src:  url('/assets/fonts/Satoshi-Variable.woff2') format('woff2'),
              url('/assets/fonts/Satoshi-Variable.woff') format('woff'),
              url('/assets/fonts/Satoshi-Variable.ttf') format('truetype');
        font-weight: 300 900;
        font-display: swap;
        font-style: normal;
      }
      /* latin */
      @font-face {
        font-family: 'Satoshi-Black';
        src:  url('/assets/fonts/Satoshi-Black.woff2') format('woff2'),
              url('/assets/fonts/Satoshi-Black.woff') format('woff'),
              url('/assets/fonts/Satoshi-Black.ttf') format('truetype');
        font-weight: 900;
        font-display: swap;
        font-style: normal;
      }
    `}
	/>
)
