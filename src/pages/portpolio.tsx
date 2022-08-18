import { Container } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { Portpolio } from "src/components/Home-components/portpolio";
import { Layout } from "src/components/Layout";
const Home: NextPage = () => {
	return (
		<Layout title="PortPolio">
			<Container size="md">
				<Portpolio isAll />
			</Container>
		</Layout>
	);
};

export default Home;
