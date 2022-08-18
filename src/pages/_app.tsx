import "src/lib/tailwind.css";
import type { AppProps } from "next/app";
import { GetServerSidePropsContext } from "next";
import { useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import {
	MantineProvider,
	ColorScheme,
	ColorSchemeProvider,
} from "@mantine/core";

function MyApp(props: AppProps & { colorScheme: ColorScheme }) {
	const [colorScheme, setColorScheme] = useState<ColorScheme>(
		props.colorScheme
	);

	const toggleColorScheme = (value?: ColorScheme) => {
		const nextColorScheme =
			value || (colorScheme === "dark" ? "light" : "dark");
		setColorScheme(nextColorScheme);
		setCookie("mantine-color-scheme", nextColorScheme, {
			maxAge: 60 * 60 * 24 * 30,
		});
	};

	const { Component, pageProps } = props;

	return (
		<ColorSchemeProvider
			colorScheme={colorScheme}
			toggleColorScheme={toggleColorScheme}
		>
			<MantineProvider
				theme={{ colorScheme }}
				withGlobalStyles
				withNormalizeCSS
			>
				<Component {...pageProps} />
			</MantineProvider>
		</ColorSchemeProvider>
	);
}

MyApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
	// get color scheme from cookie
	colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
});

export default MyApp;
