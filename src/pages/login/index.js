import React, { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import { useUserContext } from "@/context/userContext";
const LogIn = () => {
	const [loginData, setLoginData] = useState([]);
	const [data, getData] = useState([]);
	const { getUser } = useUserContext();
	const router = useRouter();
	const handleOnSubmit = async (e) => {
		e.preventDefault();
		const email = e.target.email.value;
		const password = e.target.password.value;
		const loginData = { email, password };
		console.log(loginData);

		fetch("http://localhost:8000/users/login", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(loginData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data === null) {
					toast.error("please register first", {
						position: toast.POSITION.TOP_CENTER,
					});
				} else {
					getUser(data);
					toast.success("login success !", {
						position: toast.POSITION.TOP_CENTER,
					});
					router.push("/");
				}
			});
	};

	return (
		<div className="w-full max-w-xs mx-auto py-14 h-screen">
			<form
				className="bg-gray-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md rounded px-8 pt-6 pb-8 mb-4"
				onSubmit={handleOnSubmit}
			>
				<div className="text-xl text-center font-semibold text-gray-700 mb-3">
					Login
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm  mb-2" for="username">
						Username
					</label>
					<input
						className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						name="email"
						type="text"
						placeholder="Username"
					/>
				</div>
				<div className="mb-6">
					<label className="block text-gray-700 text-sm  mb-2" for="password">
						Password
					</label>
					<input
						className="shadow-sm appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						name="password"
						type="password"
						placeholder="******************"
					/>
				</div>

				<button
					className="bg-red-500 w-full hover:bg-red-700 mb-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Sign In
				</button>

				<Link
					href="/register"
					className="text-red-500 text-center font-semibold w-full  mb-3  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button"
				>
					create an account
				</Link>
			</form>
			<ToastContainer />
		</div>
	);
};

export default LogIn;
