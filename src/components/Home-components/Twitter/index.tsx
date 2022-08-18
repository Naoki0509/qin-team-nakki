import { Box, Text } from "@mantine/core";
import { FC } from "react";
import { useMediaQuery } from "src/lib/mantine";

export const Twitter: FC = () => {
	const responsive = useMediaQuery("sm");
	return (
		<Box mt={40} className={responsive ? "w-1/2" : "w-full"}>
			<Text pb={20} mb={40} size={26} weight={700} className="border-b">
				Twitter
			</Text>
			<p>Twitter</p>
		</Box>
	);
};
