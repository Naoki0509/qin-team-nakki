import { Anchor, Box, Button, Container, Group, Text } from "@mantine/core";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/Layout";

import { BlogPageProps } from "src/types";
import { TypographyStylesProvider } from "@mantine/core";

import Link from "next/link";
import { MicroClient } from "src/lib/client";

type Props = BlogPageProps & MicroCMSContentId & MicroCMSDate;

export const BlogID: NextPage<Props> = (props) => {
	return (
		<Layout title="Blog">
			<Container size="md">
				<Box className="min-w-full flex flex-col py-10 space-y-5">
					<Text weight={700} className="text-2xl pt-[100px]">
						{props.title}
					</Text>
					<Text className="text-[12px]">{`作成日　${dayjs(
						props.createAt
					).format("YYYY年MM月DD日")}`}</Text>
				</Box>

				<TypographyStylesProvider>
					<div
						className="border-t-2 border-b-0 border-r-0 border-l-0 border-solid pt-[50px] border-gray-100"
						dangerouslySetInnerHTML={{ __html: props.content }}
					/>
				</TypographyStylesProvider>

				<Link href="/blog" passHref>
					<Anchor component="a" className="hover:text-blue-600 font-bold pt-8">
						←back
					</Anchor>
				</Link>
			</Container>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
	const data = await MicroClient.getList({ endpoint: "blogs" });
	const ids = data.contents.map((contents) => `/blog/${contents.id}`);
	return {
		paths: ids,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async (
	ctx
) => {
	if (!ctx.params) {
		return {
			notFound: true,
		};
	}
	const data = await MicroClient.getListDetail<BlogPageProps>({
		endpoint: "blogs",
		contentId: ctx.params.id,
	});

	return {
		props: data,
	};
};

export default BlogID;
