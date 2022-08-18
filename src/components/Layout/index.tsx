import Head from "next/head";
import { useRouter } from "next/router";
import { FC } from "react";

import { Header } from "src/components/Header";
import { HeaderLine } from "src/components/Header/HeaderLine";
import { Footer } from "src/components/Footer";

type Props = {
	children: React.ReactNode;
	title: string;
};

export const Layout: FC<Props> = ({ children, title = "Blog" }) => {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{title}</title>
			</Head>
			<Header />
			{router.pathname === "/" ? <HeaderLine /> : null}
			<div className="flex min-h-screen">
				<div className="mx-auto min-h-screen max-w-3xl flex-col items-center px-2">
					<main>{children}</main>
				</div>
			</div>
			<Footer />
		</div>
	);
};
