import Image from "next/legacy/image";
import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
const Header = () => {
	return (
		<div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[800px] backdrop-brightness-50 bg-opacity-80">
			<Image
				src="/img/header.jpg"
				layout="fill"
				className="brightness-50"
				alt="banner"
				objectFit="cover"
			/>
			<div className="absolute top-1/2 w-full text-center">
				<p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white font-bold">
					Not sure where to go? Perfect.
				</p>
				<Link href="/#foods">
					<button className="px-10 py-4 my-3 font-bold bg-white shadow-md rounded-full text-purple-500 active:scale-90 transition duration-150 transform hover:shadow-xl">
						explore now
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Header;
