import { Grid } from "@mantine/core";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import { ContentLayout } from "src/components/Home-components/ContentLayout";
import { PortpolioContents } from "src/components/Home-components/portpolio/PortpolioContents";
import { PortpolioProps } from "src/components/types/PortPolio";

const PortpolioItem: Array<PortpolioProps> = [
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

export const Portpolio: FC<{ buttonTitle?: string; isAll?: true }> = (
	props
) => {
	const router = useRouter();
	const onClickPortpolioBottun = useCallback(() => {
		router.push("/portpolio");
	}, [router]);

	return (
		<ContentLayout
			title="portpolio"
			buttontitle={props.buttonTitle}
			onclickButtom={onClickPortpolioBottun}
		>
			<Grid>
				{props.isAll
					? PortpolioItem.map((portpolio) => {
							return (
								<Grid.Col xs={12} sm={6} md={6} lg={4} key={portpolio.id}>
									<PortpolioContents
										id={portpolio.id}
										image={portpolio.image}
										title={portpolio.title}
										text={portpolio.text}
										lelease_date={portpolio.lelease_date}
									/>
								</Grid.Col>
							);
					  })
					: PortpolioItem.map((portpolio, index) => {
							return index + 1 <= DisplayNum ? (
								<Grid.Col xs={12} sm={6} md={6} lg={4} key={portpolio.id}>
									<PortpolioContents
										id={portpolio.id}
										image={portpolio.image}
										title={portpolio.title}
										text={portpolio.text}
										lelease_date={portpolio.lelease_date}
									/>
								</Grid.Col>
							) : undefined;
					  })}
			</Grid>
		</ContentLayout>
	);
};
