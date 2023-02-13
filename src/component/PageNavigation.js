import Link from "next/link";
import React from "react";

const PageNavigation = ({ title }) => {
	return (
		<div className=" flex items-center gap-3 font-semibold py-3 mb-3 text-black">
			<Link href="/" className="text-2xl">
				Home/
			</Link>
			<span className="text-lg text-gray-800">{title}</span>
		</div>
	);
};

export default PageNavigation;
