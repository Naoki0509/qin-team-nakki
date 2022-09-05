//!: BLogの型定義　blog/[id]page,blogpage

import { MicroCMSListResponse } from "microcms-js-sdk";

export type BlogItemProps = {
	title: string;
	subtitle: string;
	id: string;
};

export type BlogProps = MicroCMSListResponse<BlogItemProps>;

export type BlogPageProps = {
	title: string;
	content: string;
	createAt: string;
};

export type PortfolioProps = {
	id: number;
	title: string;
	text: string;
	image: string;
	lelease_date: string;
};
