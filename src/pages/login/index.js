import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

// import auth from "../Shared/Firebase.init";

// import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
const LogIn = () => {
	const [loginData, setLoginData] = useState([]);

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const Password = e.target.password.value;
		fetch(`http://localhost:5000/register?email=${email}`)
			.then((res) => res.json())
			.then((data) => {
				setLoginData(data);
				if (data.email === email && data.Password === Password) {
					alert("login sucess");
				}
			});
	};

	return (
		<div className="login">
			<section className="text-gray-900 pt-14 body-font relative">
				<div className="container px-5 py-5 mx-auto">
					<div className="flex flex-col text-center w-full mb-4">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
							Log In
						</h1>
					</div>
					<form>
						<div className="lg:w-1/2 md:w-2/3 mx-auto">
							<div className="flex flex-wrap -m-2">
								<div className="p-2 w-full">
									<div className="relative">
										<label
											for="email"
											className="leading-7 text-gray-800 font-semibold text-sm "
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											className="w-full glass bg-slate-100 bg-opacity-50 rounded focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>
								<div className="p-2 w-full">
									<div className="relative">
										<label
											for="password"
											className="leading-7 text-sm text-gray-800 font-semibold"
										>
											Enter password
										</label>
										<input
											type="password"
											id="password"
											name="password"
											className="w-full glass bg-gray-100 bg-opacity-50 rounded border border-gray-300focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
									</div>
								</div>

								<div className="p-2 w-full">
									<button
										className="btn btn-ghost bg-green-600  w-full rounded-md mt-6 text-white font-medium glass mx-auto text-center hover:bg-green-700"
										type="submit"
									>
										Sumit
									</button>
								</div>
							</div>
							<div className="flex justify-between mt-4">
								<div className="left-part cursor-pointer text-sm text-green-400 font-semibold">
									Forget PassWord
								</div>
								<div className="right-part cursor-pointer text-sm text-green-400 font-semibold">
									<Link href="/register">Dont have account ?</Link>
								</div>
							</div>
						</div>
					</form>

					<div className="text-xl text-center text-green-900 mt-2 font-semibold">
						or
					</div>
					<div className="flex justify-center mt-3 mb-3 items-center">
						<div
							className="icon btn btn-ghost glass bg-white w-14 h-14 rounded-full shadow mr-3"
							onClick={() => signIn()}
						>
							<FcGoogle className=" text-2xl" />
						</div>
						<div className="icon btn btn-ghost glass bg-white w-14 h-14 rounded-full shadow mr-3">
							<AiOutlineGithub className=" text-2xl" />
						</div>
						<div className="icon btn btn-ghost glass bg-white w-14 h-14 rounded-full shadow mr-3">
							<BsFacebook className=" text-2xl" />
						</div>
						<div className="icon btn btn-ghost glass bg-white w-14 h-14 rounded-full shadow mr-3">
							<AiFillTwitterCircle className=" text-2xl" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default LogIn;
