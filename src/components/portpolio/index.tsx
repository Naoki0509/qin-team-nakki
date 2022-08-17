import { Box, Card, Grid, Group, Space, Text, Title } from "@mantine/core";
import { PortpolioContents } from "src/components/portpolio/PortpolioContents";
import { PortpolioProps } from "src/components/portpolio/type";

const PortpolioItem: Array<PortpolioProps> = [
	{
		id: 1,
		title: "IT KINGDOM",
		text: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
		image: "/thumbnail.jpg",
		lelease_date: "2020-01-01",
	},
	{
		id: 2,
		title: "IT KINGDOM",
		text: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
		image: "/thumbnail.jpg",
		lelease_date: "2020-01-01",
	},
	{
		id: 3,
		title: "IT KINGDOM",
		text: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
		image: "/thumbnail.jpg",
		lelease_date: "2020-01-01",
	},
	{
		id: 4,
		title: "IT KINGDOM",
		text: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
		image: "/thumbnail.jpg",
		lelease_date: "2020-01-01",
	},
	{
		id: 5,
		title: "IT KINGDOM",
		text: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
		image: "/thumbnail.jpg",
		lelease_date: "2020-01-01",
	},
];

export const Portpolio = () => {
	return (
		<Box mt={100}>
			<Space h="md" />
			<Text className="text-2xl font-bold">Portpolio</Text>
			<Grid>
				{PortpolioItem.map((item) => (
					<Grid.Col md={6} lg={4}>
						<PortpolioContents
							id={item.id}
							title={item.title}
							text={item.text}
							image={item.image}
							lelease_date={item.lelease_date}
						/>
					</Grid.Col>
				))}
			</Grid>
		</Box>
	);
};
