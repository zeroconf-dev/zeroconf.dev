import { css } from 'linaria';
import Color from 'color';

/*
$color1: #F7F5F2; // light shades       soft peach
$color2: #8DACB0; // light accent       bali hai
$color3: #E26E39; // main brand color   burnt sienna
$color4: #C83B22; // dark accent        valencia
$color5: #23363F; // dark shades        ebony clay


$primary: #E66D3C; // primary           burnt sienna
$info:    #25313E; // info              ebony clay
$success: #7A9B4A; // success           asparagus
$warning: #F88B12; // warning           ecstacy
$danger:  #F44336; // danger            pomegranate

$text: #13181D
$textInverted: #FFFFFF;
*/

export const typography = {
	fontSize: 1, // rem
	standardPadding: 1.5, // em
};

const colors = {
	lighShade: Color('#F7F5F2'),
	lightAccent: Color('#8DACB0'),
	primaryBrand: Color('#E26E39'),
	darkAccent: Color('#C83B22'),
	darkShade: Color('#22363F'),

	primary: Color('#E66D3C'),
	danger: Color('#F44336'),
	info: Color('#25313E'),
	success: Color('#7A9B4A'),
	warning: Color('#F88B12'),

	background: Color('#F7F5F2'),
	text: Color('#000000').alpha(0.8),
	textInverted: Color('#FFFFFF'),

	grayDark: Color('#BABBBC'),
	gray: Color('#CACBCD'),
	grayLight: Color('#E0E1E2'),
};

export const vars = {
	colors: {
		lighShade: `var(--lighShadeColor)`,
		lightAccent: `var(--lightAccentColor)`,
		primaryBrand: `var(--primaryBrandColor)`,
		darkAccent: `var(--darkAccentColor)`,
		darkShade: `var(--darkShadeColor)`,

		primary: `var(--primaryColor)`,
		danger: `var(--dangerColor)`,
		info: `var(--infoColor)`,
		success: `var(--successColor)`,
		warning: `var(--warningColor)`,

		background: `var(--backgroundColor)`,
		text: `var(--textColor)`,
		textInverted: `var(--textInvertedColor)`,

		grayDark: `var(--grayDarkColor)`,
		gray: `var(--grayColor)`,
		grayLight: `var(--grayLightColor)`,
	},
	typography: {
		fontSize: `var(--fontSize)`,
		standardPadding: `var(--standardPadding)`,
	},
};

export const globals = css`
	:global() {
		html {
			--fontSize: ${typography.fontSize};
			--standardPadding: ${typography.standardPadding};

			--lighShadeColor: ${colors.lighShade.toString()};
			--lightAccentColor: ${colors.lightAccent.toString()};
			--primaryBrandColor: ${colors.primaryBrand.toString()};
			--darkAccentColor: ${colors.darkAccent.toString()};
			--darkShadeColor: ${colors.darkShade.toString()};
			--primaryColor: ${colors.primary.toString()};
			--dangerColor: ${colors.danger.toString()};
			--infoColor: ${colors.info.toString()};
			--successColor: ${colors.success.toString()};
			--warningColor: ${colors.warning.toString()};
			--backgroundColor: ${colors.background.toString()};
			--textColor: ${colors.text.toString()};
			--textInvertedColor: ${colors.textInverted.toString()};
			--grayDarkColor: ${colors.grayDark.toString()};
			--grayColor: ${colors.gray.toString()};
			--grayLightColor: ${colors.grayLight.toString()};

			box-sizing: border-box;
			height: 100vh;
		}

		*,
		*:before,
		*:after {
			box-sizing: inherit;
		}

		body {
			margin: 0;
			padding: 0;
			height: 100vh;
		}

		#root {
			height: 100vh;
		}
	}
`;

export const injectGlobalStyles = (..._args: any[]) => {
	return; // Nothing to see here.
};
