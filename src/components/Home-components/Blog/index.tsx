import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { BlogContent } from "src/components/Home-components/Blog/BlogContent";
import { ContentLayout } from "src/components/Home-components/ContentLayout";
import { BLogProps } from "src/components/types/Blog";

const blogitem: BLogProps[] = [
	{
		id: 1,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
	{
		id: 2,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
	{
		id: 3,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
	{
		id: 4,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
	{
		id: 5,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
	{
		id: 6,
		title: "This is a Header",
		Text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
		lelease_date: "2020.07.01",
	},
];

const DisplayNum = 6;
export const Blog: FC<{ buttontitle?: string; isShowAll?: true }> = (props) => {
	const router = useRouter();
	const onclickBlogButtom = useCallback(() => {
		router.push("/blog");
	}, [router]);

	return (
		<ContentLayout
			title="Blog"
			buttontitle={props.buttontitle}
			onclickButtom={onclickBlogButtom}
		>
			{props.isShowAll
				? blogitem.map((blog, index) => {
						return (
							<BlogContent
								key={blog.id}
								id={blog.id}
								title={blog.title}
								Text={blog.Text}
								lelease_date={blog.lelease_date}
							/>
						);
				  })
				: blogitem.map((blog, index) => {
						return index + 1 <= DisplayNum ? (
							<BlogContent
								key={blog.id}
								id={blog.id}
								title={blog.title}
								Text={blog.Text}
								lelease_date={blog.lelease_date}
							/>
						) : undefined;
				  })}
		</ContentLayout>
	);
};
