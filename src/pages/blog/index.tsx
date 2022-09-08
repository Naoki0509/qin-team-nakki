import { Container } from "@mantine/core";

import { GetStaticProps, NextPage } from "next";
import { Blog } from "src/components/Home-components/Blog/blog";

import { Layout } from "src/components/Layout";
import { MicroClient } from "src/lib/client";
import { BlogItemProps, BlogProps } from "src/types";

export const Home: NextPage<BlogProps> = (props) => {
	return (
		<Layout title="Blog">
			<Container>
				<Blog {...props} />
			</Container>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<BlogProps> = async () => {
	const data = await MicroClient.getList<BlogItemProps>({ endpoint: "blogs" });
	return {
		props: data,
	};
};

export default Home;
