import { Grid } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { BlogContents } from "src/components/Home-components/Blog/BlogContents";
import { ContentLayout } from "src/components/Home-components/ContentLayout";
import { useMediaQuery } from "src/lib/mantine";
import { BlogProps } from "src/types";

export const Blog: FC<BlogProps> = (props) => {
	const router = useRouter();
	const home = router.asPath === "/";
	const response = useMediaQuery("sm");

	const numberToDhowBlogs = home ? (response ? 4 : 5) : props.contents.length;
	const filteredBlogdata = props.contents.slice(0, numberToDhowBlogs);

	return (
		<div>
			<ContentLayout title="Blog">
				<Grid>
					{filteredBlogdata.map((content) => {
						return (
							<Link href={`/blog/${content.id}`}>
								<Grid.Col>
									<BlogContents
										title={content.title}
										subtitle={content.subtitle}
										id={content.id}
									/>
								</Grid.Col>
							</Link>
						);
					})}
				</Grid>
			</ContentLayout>
		</div>
	);
};
