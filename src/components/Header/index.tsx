import { Group } from "@mantine/core";
import { FC } from "react";

import { MainTitle } from "src/components/Header/Title";
import { MobileNav } from "src/components/Header/MobileNav";
import { NavItem } from "src/components/Header/NavItem";
import { DarkScheme } from "src/components/Block/darktheme";

export const Header: FC = () => {
	return (
		<header className="mx-4 flex h-20 items-center justify-between">
			<Group>
				<MobileNav />
				<MainTitle />
			</Group>
			<Group spacing={3}>
				<NavItem Href="/about" Text="About" />
				<NavItem Href="/blog" Text="Blog" />
				<NavItem Href="/portfolio" Text="Portfolio" />
				<NavItem Href="/contact" Text="Contact" />
				<DarkScheme />
			</Group>
		</header>
	);
};
