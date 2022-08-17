import { Card, Group, Image, Text, Title } from "@mantine/core";
import { FC } from "react";
import { PortpolioProps } from "src/components/portpolio/type";

export const PortpolioContents: FC<PortpolioProps> = (props) => {
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
