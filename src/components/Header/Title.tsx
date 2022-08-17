import { FC } from "react";
import { Anchor, Text, useMantineColorScheme } from "@mantine/core";

export const MainTitle: FC = () => {
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";
	return (
		<div>
			<Anchor href="/" color={dark ? "dimmed" : "dark"}>
				<Text weight={500} sx={{ marginLeft: "3rem" }}>
					Shimabu IT Unibacity
				</Text>
			</Anchor>
		</div>
	);
};
