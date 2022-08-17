import { useMantineColorScheme, ActionIcon, Group } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";

export function DarkScheme() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<Group position="center" my="xl">
			<ActionIcon
				onClick={() => toggleColorScheme()}
				size="lg"
				sx={(theme) => ({
					backgroundColor:
						theme.colorScheme === "dark"
							? theme.colors.dark[6]
							: theme.colors.gray[0],
				})}
			>
				{colorScheme === "dark" ? (
					<IconSun size={18} />
				) : (
					<IconMoonStars size={18} />
				)}
			</ActionIcon>
		</Group>
	);
}
