import { Card, Text } from "@mantine/core";
import { FC } from "react";
import { BlogItemProps } from "src/types";

export const BlogContents: FC<BlogItemProps> = (props) => {
	return (
		<div>
			<Card className="shadow-lg border border-gray-100 border-solid">
				<Text className="font-bold">{props.title}</Text>
				<Text>{props.subtitle}</Text>
			</Card>
		</div>
	);
};
