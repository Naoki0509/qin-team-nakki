import { Button, Text } from "@mantine/core";
import { FC } from "react";
import { useMediaQuery } from "src/lib/mantine";

type Props = {
	children: React.ReactNode;
	buttontitle?: string;
	title: string;
	onclickButtom?: () => void;
	isHalf?: true;
};

export const ContentLayout: FC<Props> = (props) => {
	const largerThanSm = useMediaQuery("sm");
	return (
		<div className={props.isHalf && largerThanSm ? "mt-6 w-5/12" : "mt-6"}>
			<Text
				weight={700}
				size={26}
				className="border-b-1 mb-6 border-t-0 border-l-0 border-r-0 border-solid border-gray-100 py-6"
			>
				{props.title}
			</Text>
			<div>{props.children}</div>
			{props.buttontitle ? (
				<Button
					color="gray"
					radius="xl"
					size="md"
					className="m-auto mt-10 flex bg-gray-800"
					onClick={props.onclickButtom}
				>
					{props.buttontitle}
				</Button>
			) : undefined}
		</div>
	);
};
