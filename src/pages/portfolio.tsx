import { Container } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { Portfolio } from "src/components/Home-components/portfolio";

import { Layout } from "src/components/Layout";
const Home: NextPage = () => {
	return (
		<Layout title="PortPolio">
			<Container size="md">
				<Portfolio isAll />
			</Container>
		</Layout>
	);
};

export default Home;
