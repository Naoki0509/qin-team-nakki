import { Box, Grid, Group, Space, Text, Title } from "@mantine/core";
import { FC } from "react";
import { Load } from "src/components/Block/Load";

type BlogProps = {
	title: string;
	Text: string;
	id: number;
	lelease_date: string;
};

const blogitem: BlogProps[] = [
	{
		id: 1,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
	{
		id: 2,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
	{
		id: 3,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
	{
		id: 4,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
	{
		id: 5,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
	{
		id: 6,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
];

export const Blog: FC = () => {
	return (
		<div className="mt-12">
			<div className="text-2xl font-bold">Blog</div>

			{blogitem.map((item) => (
				<div className="py-2">
					<Text className="text-2xl font-bold">{item.title}</Text>
					<Text className="my-2 text-xl">{item.Text}</Text>
					<Text className="text-sm">{item.lelease_date}</Text>
				</div>
			))}

			<Load />
		</div>
	);
};
