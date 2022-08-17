import {
	Grid,
	Group,
	Space,
	Text,
	Title,
	useMantineColorScheme,
	useMantineTheme,
} from "@mantine/core";
import { FC } from "react";
import { SiTwitter, SiFacebook } from "react-icons/si";

export const HeaderLine: FC = () => {
	const { colorScheme } = useMantineColorScheme();

	return (
		<div className="my-0 flex items-center justify-between  bg-pink-500 p-12">
			<div className="mx-auto flex">
				<Grid>
					<Grid.Col sm={7} xs={10}>
						<div className="max-w-2xl flex-col px-2 text-white">
							<Title>Naoki IT Unibersity</Title>
							<Text>なおきのポートフォリオ</Text>
						</div>
					</Grid.Col>
					<Grid.Col sm={3} xs={0}>
						<Space w="xl" className="mx-20" />
					</Grid.Col>
					<Grid.Col sm={2} xs={12}>
						<div className="my-6 flex items-center">
							<SiTwitter size={20} className="text-white" />
							<SiFacebook size={20} className="text-white" />
						</div>
					</Grid.Col>
				</Grid>
			</div>
		</div>
	);
};
