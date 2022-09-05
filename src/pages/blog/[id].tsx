import { Box, Container, Group, Text } from "@mantine/core";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Layout } from "src/components/Layout";
import { client } from "src/lib/client";
import { BlogPageProps } from "src/types";

type Props = BlogPageProps & MicroCMSContentId & MicroCMSDate;

export const BlogID: NextPage<Props> = (props) => {
	return (
		<Layout title="Blog">
			<Container size="md">
				<Group className="flex items-center justify-center min-w-full">
					<Text weight={700} className="text-2xl pt-[100px] pb-[50px]">
						{props.title}
					</Text>
				</Group>

				<Box
					className="  border-t-2 border-b-0 border-r-0 border-l-0 border-solid pt-[50px] border-gray-100"
					dangerouslySetInnerHTML={{ __html: props.content }}
				/>
			</Container>
		</Layout>
	);
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
	const data = await client.getList({ endpoint: "blogs" });
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
	const data = await client.getListDetail<BlogPageProps>({
		endpoint: "blogs",
		contentId: ctx.params.id,
	});

	return {
		props: data,
	};
};

export default BlogID;
