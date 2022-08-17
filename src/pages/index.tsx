import type { NextPage } from "next";
import Head from "next/head";
import { Blog } from "src/components/Blog/Blog";
import { Github } from "src/components/Github";
import { Layout } from "src/components/Layout";
import { Portpolio } from "src/components/portpolio";
import { Twitter } from "src/components/Twitter";
const Home: NextPage = () => {
	return (
		<Layout title="Home">
			<div className="">
				<Blog />
				<Portpolio />
			</div>
			<div className="flex flex-row">
				<Github />
				<Twitter />
			</div>
		</Layout>
	);
};

export default Home;
