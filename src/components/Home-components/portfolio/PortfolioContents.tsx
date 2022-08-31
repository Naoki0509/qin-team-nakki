import { Card, Group, Image, Text, Title } from "@mantine/core";
import { FC } from "react";
import { PortfolioProps } from "src/types";

export const PortfolioContents: FC<PortfolioProps> = (props) => {
	return (
		<div className="mb-6">
			<Card>
				<Card.Section>
					<Image src={props.image} alt="With default placeholder" />
				</Card.Section>

				<Text weight={700} size={22}>
					{props.title}
				</Text>
				<Text weight={500} size={16}>
					{props.text}
				</Text>
				<Text weight={700} size={12}>
					{props.lelease_date}
				</Text>
			</Card>
		</div>
	);
};
