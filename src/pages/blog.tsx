import { Container } from "@mantine/core";
import type { NextPage } from "next";
import { Blog } from "src/components/Home-components/Blog";
import { Layout } from "src/components/Layout";
const Home: NextPage = () => {
	return (
		<Layout title="Blog">
			<Container size="md">
				<Blog isShowAll />
			</Container>
		</Layout>
	);
};

export default Home;
