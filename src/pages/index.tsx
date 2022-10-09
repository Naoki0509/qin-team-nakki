import { Box, Container } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import type { GetStaticProps, NextPage } from "next";
import { Blog } from "src/components/Home-components/Blog/blog";
import { Github } from "src/components/Home-components/Github";
import { Portfolio } from "src/components/Home-components/portfolio";
import { Twitter } from "src/components/Home-components/Twitter/twitter";

import { Layout } from "src/components/Layout";
import { MicroClient } from "src/lib/client";
import { useMediaQuery } from "src/lib/mantine";
import { roTwitterClient } from "src/lib/twitter/client";

import { BlogItemProps } from "src/types";
import {
	TweetUserTimelineV2Paginator,
	TweetV2,
	UserV2,
	UserV2Result,
} from "twitter-api-v2";

import { client } from "src/lib/Github";

type Props = {
	blogdata: MicroCMSListResponse<BlogItemProps>;
	twitterUser: UserV2;
	tweets: TweetV2[];
};

const Home: NextPage<Props> = ({ blogdata, twitterUser, tweets }) => {
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
					<Twitter twitterUser={twitterUser} tweets={tweets} />
				</Box>
			</Container>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const blogdata = await MicroClient.getList<BlogItemProps>({
		endpoint: "blogs",
		queries: { limit: 5 },
	});

	const twitterUser: UserV2Result = await roTwitterClient.v2.userByUsername(
		"naoki__0509",
		{
			"user.fields": ["profile_image_url"],
		}
	);

	const timeline: TweetUserTimelineV2Paginator =
		await roTwitterClient.v2.userTimeline(twitterUser.data.id, {
			"tweet.fields": ["created_at", "attachments"],

			max_results: 5,
		});

	return {
		props: {
			blogdata,
			twitterUser: twitterUser.data,
			tweets: timeline.tweets,
		},
	};
};

export default Home;
