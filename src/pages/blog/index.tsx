import { Container, Grid, Group, Text, Title } from "@mantine/core";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { ContentLayout } from "src/components/Home-components/ContentLayout";
import { client } from "src/lib/client";
import { BlogProps, MicroCMSBlogProps } from "src/types";

const Blog: NextPage<MicroCMSBlogProps> = (props) => {
	return (
		<ContentLayout title="Blog">
			<Grid className="flex flex-col items-center justify-center space-y-10">
				{props.contents.map((content) => {
					return (
						<Link href={`/blog/${content.id}`}>
							<Grid.Col className=" border-solid border-gray-200 shadow-lg min-w-full py-6">
								<Title order={4}>{content.title}</Title>
								<Text>{content.subtitle}</Text>
							</Grid.Col>
						</Link>
					);
				})}
			</Grid>
		</ContentLayout>
	);
};

export const getStaticProps: GetStaticProps<MicroCMSBlogProps> = async () => {
	const data = await client.getList<BlogProps>({ endpoint: "blogs" });

	return {
		props: data,
	};
};

export default Blog;
