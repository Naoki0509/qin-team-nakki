import { Box, Text } from "@mantine/core";
import { FC } from "react";
import { useMediaQuery } from "src/lib/mantine";

export const Github: FC = () => {
	const responsive = useMediaQuery("sm");
	return (
		<Box mt={40} className={responsive ? "w-1/2" : "w-full"}>
			<Text size={26} weight={700} pb={20} mb={40} className="border-b">
				Github
			</Text>
			<p>Github</p>
		</Box>
	);
};
