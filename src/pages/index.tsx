import { Box, Container } from "@mantine/core";
import type { NextPage } from "next";
import { Blog } from "src/components/Home-components/Blog";
import { Github } from "src/components/Home-components/Github";
import { Portfolio } from "src/components/Home-components/portfolio";
import { Twitter } from "src/components/Home-components/Twitter";
import { Layout } from "src/components/Layout";
import { useMediaQuery } from "src/lib/mantine";

const Home: NextPage = () => {
	const response = useMediaQuery("sm");
	return (
		<Layout title="Home">
			<Container size="md">
				<Blog />
				<Portfolio />
				<Box
					className={response ? "flex justify-between space-x-10" : undefined}
				>
					<Github />
					<Twitter />
				</Box>
			</Container>
		</Layout>
	);
};

export default Home;
