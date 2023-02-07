import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
	return (
		<>
			<div className="bg-gradient-to-r from-white via-emerald-50 to-blue-100">
				<Nav />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;
