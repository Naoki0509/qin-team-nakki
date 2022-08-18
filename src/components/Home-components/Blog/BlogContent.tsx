import { Text } from "@mantine/core";
import Link from "next/link";
import { FC } from "react";
import { BLogProps } from "src/components/types/Blog";

export const BlogContent: FC<BLogProps> = (item) => {
	return (
		<Link href={`/blog-page/${item.id}`}>
			<div className="mb-6 cursor-pointer hover:bg-slate-50">
				<Text weight={700} size={22}>
					{item.title}
				</Text>
				<Text weight={500} size={16}>
					{item.Text}
				</Text>
				<Text weight={700} size={12} color="#909296">
					{item.lelease_date}
				</Text>
			</div>
		</Link>
	);
};
