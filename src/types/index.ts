import { MicroCMSListResponse } from "microcms-js-sdk";

export type BlogProps = {
	title: string;
	subtitle?: string;
	content: string;
};

export type MicroCMSBlogProps = MicroCMSListResponse<BlogProps>;

export type PortfolioProps = {
	id: number;
	title: string;
	text: string;
	image: string;
	lelease_date: string;
};
