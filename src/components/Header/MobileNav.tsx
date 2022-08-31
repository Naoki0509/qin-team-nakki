import { Anchor, Burger, Drawer, Group, useMantineTheme } from "@mantine/core";
import Link from "next/link";
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
				<Group className="m-3 flex flex-col text-3xl">
					<Link href="/about">
						<Anchor className="text-white" weight={700}>
							About
						</Anchor>
					</Link>
					<Link href="/blog">
						<Anchor className="text-white" weight={700}>
							Blog
						</Anchor>
					</Link>
					<Link href="/portfolio">
						<Anchor className="text-white" weight={700}>
							Portfolio
						</Anchor>
					</Link>
					<Link href="/contact">
						<Anchor className="text-white" weight={700}>
							Contact
						</Anchor>
					</Link>
				</Group>
			</Drawer>
		</div>
	);
};
