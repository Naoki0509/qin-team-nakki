import { FC } from "react";
import { Anchor, Text, useMantineColorScheme } from "@mantine/core";
import Link from "next/link";

export const MainTitle: FC = () => {
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";
	return (
		<div>
			<Link href="/">
				<Anchor color={dark ? "dimmed" : "dark"}>
					<Text weight={500} sx={{ marginLeft: "3rem" }}>
						Naoki site
					</Text>
				</Anchor>
			</Link>
		</div>
	);
};
