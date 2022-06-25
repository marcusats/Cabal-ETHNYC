import { extendTheme } from "@chakra-ui/react";
const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
};
const colors = {
	primary: "#3da9fc",
	primaryLight: "#094067",
	primaryDark: "#83ccf4",
	text: "#021929",
	textSecondary: "#192934",
	background: "#fcfcfc",
	foreground: "#e9e9e9",
	accent: "#ef4565",
};
const components = {
	Button: {
		basStyle: {
			margin: 0.5,
			_hover: { opacity: "75%" },
			_focus: {
				boxShadow: "none",
			},
		},
		variants: {
			contained: () => ({
				color: "white",
				backgroundColor: colors.primary,
			}),
			danger: () => ({
				color: "white",
				backgroundColor: colors.accent,
			}),
		},
		defaultProps: {
			variant: "contained",
		},
	},
};

const chakraTheme = extendTheme({ components, colors, config });
export default chakraTheme;
