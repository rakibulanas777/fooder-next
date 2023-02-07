import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";

function Nav() {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState("transparent");
	const [textColor, setTextColor] = useState("white");
	const [active, setActive] = useState(0);
	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setColor("transparent");
				setTextColor("#000000");
			} else {
				setColor("transparent");
				setTextColor("#000000");
			}
		};
		window.addEventListener("scroll", changeColor);
	}, []);

	return (
		<div className=" fixed left-0 top-0 w-full z-10 ease-in duration-300 shadow-sm backdrop-blur-md bg-white/80">
			<div className="container mx-auto flex justify-between items-center py-2 ">
				<Link
					href="/"
					className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
						viewBox="0 0 24 24"
					>
						<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
					</svg>
				</Link>
				<ul className="hidden md:flex md:text-xl font-semibold gap-3 md:space-x-4 !text-gray-900">
					{/* work */}
					<Link
						href="/"
						onClick={() => setActive(0)}
						className={
							active === 0
								? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
								: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-gray-900"
						}
					>
						Work
					</Link>
					{/* strategy */}
					<Link
						href="/"
						onClick={() => setActive(1)}
						className={
							active === 1
								? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
								: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-gray-900"
						}
					>
						Strategy
					</Link>
					{/* about */}
					<Link
						href="/"
						onClick={() => setActive(2)}
						className={
							active === 2
								? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
								: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-gray-900"
						}
					>
						About
					</Link>
					{/* jobs */}
					<Link
						href="/"
						onClick={() => setActive(3)}
						className={
							active === 3
								? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
								: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-gray-900"
						}
					>
						Jobs
					</Link>
					{/* contact */}
					<Link
						href="/"
						onClick={() => setActive(4)}
						className={
							active === 4
								? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
								: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-gray-900"
						}
					>
						Contact
					</Link>
				</ul>
				{/* Mobile Button */}
				<div onClick={handleNav} className="block sm:hidden z-10">
					{nav ? (
						<AiOutlineCloseCircle
							className="text-black cursor-pointer"
							size={26}
						/>
					) : (
						<HiMenu size={26} className="text-black cursor-pointer" />
					)}
				</div>
				{/* Mobile Menu */}
				<div
					className={`md:hidden text-gray-900 absolute w-2/5 h-screen px-4 py-2 text-xl font-bold bg-white top-0 duration-500
      ${nav ? "right-0" : "right-[-100%]"} pt-16 `}
				>
					<ul>
						{/* work */}
						<Link
							href="/work"
							onClick={() => setActive(0)}
							className={
								active === 0
									? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
									: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-slate-50"
							}
						>
							Work
						</Link>
						{/* strategy */}
						<Link
							href="/strategy"
							onClick={() => setActive(1)}
							className={
								active === 1
									? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
									: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-slate-50"
							}
						>
							Strategy
						</Link>
						{/* about */}
						<Link
							href="/about"
							onClick={() => setActive(2)}
							className={
								active === 2
									? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
									: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-slate-50"
							}
						>
							About
						</Link>
						{/* jobs */}
						<Link
							href="/jobs"
							onClick={() => setActive(3)}
							className={
								active === 3
									? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
									: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-slate-50"
							}
						>
							Jobs
						</Link>
						{/* contact */}
						<Link
							href="/contact"
							onClick={() => setActive(4)}
							className={
								active === 4
									? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-white"
									: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-slate-50"
							}
						>
							Contact
						</Link>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Nav;
