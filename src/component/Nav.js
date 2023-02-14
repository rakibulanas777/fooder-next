import { useCartContext } from "@/context/cart_context";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import { HiMenu } from "react-icons/hi";

function Nav() {
	const [nav, setNav] = useState(false);
	const [color, setColor] = useState("transparent");
	const [textColor, setTextColor] = useState("white");
	const [active, setActive] = useState(0);
	const handleNav = () => {
		setNav(!nav);
	};
	const { cartItems } = useCartContext();
	const { data: session } = useSession();

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
				<ul className="hidden md:flex md:text-xl md:items-center font-semibold gap-3 md:space-x-4 !text-gray-900">
					{/* work */}
					<Link
						href="/#foods"
						onClick={() => setActive(0)}
						className={
							active === 0
								? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
								: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-gray-900"
						}
					>
						foods
					</Link>
					{/* login */}
					{session ? (
						<div className="dropdown dropdown-end">
							<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
								<div className="w-10 rounded-full">
									<img src={session.user.image} />
								</div>
							</label>
							<ul
								tabIndex={0}
								className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
							>
								<li>
									<a className="justify-between">
										Profile
										<span className="badge">New</span>
									</a>
								</li>
								<li>
									<a>Settings</a>
								</li>
								<li onClick={() => signOut()}>
									<button>Logout</button>
								</li>
							</ul>
						</div>
					) : (
						<Link
							href="/login"
							onClick={() => setActive(1)}
							className={
								active === 1
									? "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-purple-500"
									: "cursor-pointer text-sm lg:text-base xl:text-base font-medium text-gray-900"
							}
						>
							Login
						</Link>
					)}

					<div className="dropdown dropdown-end text-black">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<div className="indicator">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
								<span className="badge badge-sm indicator-item">
									{cartItems.length}
								</span>
							</div>
						</label>
						<div
							tabIndex={0}
							className="mt-3 card card-compact dropdown-content w-52 bg-white shadow"
						>
							<div className="card-body">
								<span className="font-bold text-lg">
									{cartItems.length} Items
								</span>

								<div className="card-actions">
									<Link href="/cart">
										<button className="btn text-white hover:bg-red-600 hover:border-red-600 border-red-500 btn-sm bg-red-500 btn-block">
											see foods cart
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
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
