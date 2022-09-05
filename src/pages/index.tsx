import { Box, Container } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { Blog } from "src/components/Home-components/Blog/blog";
import { Github } from "src/components/Home-components/Github";
import { Portfolio } from "src/components/Home-components/portfolio";
import { Twitter } from "src/components/Home-components/Twitter";
import { Layout } from "src/components/Layout";
import { client } from "src/lib/client";
import { useMediaQuery } from "src/lib/mantine";
import { BlogItemProps } from "src/types";

type Props = {
	blogdata: MicroCMSListResponse<BlogItemProps>;
};

const Home: NextPage<Props> = ({ blogdata }) => {
	const response = useMediaQuery("sm");
	return (
		<Layout title="Home">
			<Container size="md">
				<Blog {...blogdata} />
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

export const getStaticProps: GetStaticProps = async () => {
	const blogdata = await client.getList<BlogItemProps>({
		endpoint: "blogs",
		queries: { limit: 5 },
	});

	return {
		props: {
			blogdata,
		},
	};
};
