import Layout from "@/component/Layout";
import { CartProvider } from "@/context/cart_context";
import { SessionProvider } from "next-auth/react";
import "@/styles/globals.css";

export default function App({ Component, pageProps, session }) {
	return (
		<SessionProvider session={session}>
			<CartProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CartProvider>
		</SessionProvider>
	);
}
