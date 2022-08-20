import { Grid, PortalProps } from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { ContentLayout } from "src/components/Home-components/ContentLayout";
import { PortfolioContents } from "src/components/Home-components/portfolio/PortfolioContents";
import { PortfolioProps } from "src/components/types/Portfolio";

const PortfolioItem: Array<PortfolioProps> = [
	{
		id: 1,
		title: "IT KINGDOM",
		text: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
		image: "/thumbnail.jpg",
		lelease_date: "2020-01-01",
	},
	{
		id: 2,
		title: "IT KINGDOM",
		text: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
		image: "/thumbnail.jpg",
		lelease_date: "2020-01-01",
	},
	{
		id: 3,
		title: "IT KINGDOM",
		text: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
		image: "/thumbnail.jpg",
		lelease_date: "2020-01-01",
	},
	{
		id: 4,
		title: "IT KINGDOM",
		text: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
		image: "/thumbnail.jpg",
		lelease_date: "2020-01-01",
	},
	{
		id: 5,
		title: "IT KINGDOM",
		text: "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。",
		image: "/thumbnail.jpg",
		lelease_date: "2020-01-01",
	},
];

const DisplayNum = 5;

export const Portfolio: FC<{ buttonTitle?: string; isAll?: true }> = (
	props
) => {
	const router = useRouter();
	const onClickPortfolioBottun = useCallback(() => {
		router.push("/portfolio");
	}, [router]);

	return (
		<ContentLayout
			title="portfolio"
			buttontitle={props.buttonTitle}
			onclickButtom={onClickPortfolioBottun}
		>
			<Grid>
				{props.isAll
					? PortfolioItem.map((portfolio) => {
							return (
								<Grid.Col xs={12} sm={6} md={6} lg={4} key={portfolio.id}>
									<PortfolioContents
										id={portfolio.id}
										image={portfolio.image}
										title={portfolio.title}
										text={portfolio.text}
										lelease_date={portfolio.lelease_date}
									/>
								</Grid.Col>
							);
					  })
					: PortfolioItem.map((portfolio, index) => {
							return index + 1 <= DisplayNum ? (
								<Grid.Col xs={12} sm={6} md={6} lg={4} key={portfolio.id}>
									<PortfolioContents
										id={portfolio.id}
										image={portfolio.image}
										title={portfolio.title}
										text={portfolio.text}
										lelease_date={portfolio.lelease_date}
									/>
								</Grid.Col>
							) : undefined;
					  })}
			</Grid>
		</ContentLayout>
	);
};
