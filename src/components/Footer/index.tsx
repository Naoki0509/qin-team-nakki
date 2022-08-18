import { Box, Container, Text } from "@mantine/core";
import { FC } from "react";

export const Footer: FC = () => {
	return (
		<div className="border-t-1 mt-20 flex h-16 items-center justify-center border-b-0 border-l-0 border-r-0 border-solid border-gray-100 pt-10 pb-10">
			<Text weight={700} size={10} className="text-gray-500" color="#868E96">
				<small>© ️2022 Shimabu IT University</small>
			</Text>
		</div>
	);
};
