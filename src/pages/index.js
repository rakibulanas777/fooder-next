import Head from "next/head";
import { Inter } from "@next/font/google";
import Nav from "@/component/Nav";
import Header from "@/component/Home";
import Main from "@/component/Main";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<div className="bg-gradient-to-r from-white via-emerald-50 to-blue-100">
				<Head>
					<title>fooder | homepage</title>
					<meta name="description" content="Generated by create next app" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Header />
				<Main />
			</div>
		</>
	);
}
