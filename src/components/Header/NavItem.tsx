import { Anchor, useMantineColorScheme } from "@mantine/core";
import { FC } from "react";

type Props = {
	Href: string;
	Text: string;
};

export const NavItem: FC<Props> = ({ Href, Text }) => {
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";
	return (
		<Anchor
			href={Href}
			className="m-3"
			weight={500}
			color={dark ? "dimmed" : "dark"}
			sx={{ "@media (max-Width:800px)": { display: "none" } }}
		>
			{Text}
		</Anchor>
	);
};
