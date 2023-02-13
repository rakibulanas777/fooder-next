import Layout from "@/component/Layout";
import { CartProvider } from "@/context/cart_context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<CartProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CartProvider>
	);
}
