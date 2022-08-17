import { Anchor, Burger, Drawer, useMantineTheme } from "@mantine/core";
import { FC, useState } from "react";

export const MobileNav: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const theme = useMantineTheme();
	return (
		<div>
			<Burger
				opened={isOpen}
				onClick={() => setIsOpen((o) => !o)}
				size="sm"
				className="mx-3"
				sx={{ "@media (min-Width:800px)": { display: "none" } }}
			/>
			<Drawer
				opened={isOpen}
				onClose={() => setIsOpen(false)}
				size="sm"
				padding="xl"
				className="bg-pink-600"
				overlayColor={
					theme.colorScheme === "dark"
						? theme.colors.pink[9]
						: theme.colors.gray[2]
				}
			>
				<div className="m-3 flex flex-col text-3xl">
					<Anchor href="/about" className="text-white" weight={700}>
						About
					</Anchor>
					<Anchor href="/blog" className="text-white" weight={700}>
						Blog
					</Anchor>
					<Anchor href="/portfolio" className="text-white" weight={700}>
						Blog
					</Anchor>
					<Anchor href="/contact" className="text-white" weight={700}>
						Contact
					</Anchor>
				</div>
			</Drawer>
		</div>
	);
};
