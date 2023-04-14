import Link from "next/link";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import { useUserContext } from "@/context/userContext";
const Register = () => {
	const [registerData, setRegisterData] = useState({});
	const [check, setCheck] = useState(false);
	const { getUser } = useUserContext();
	const router = useRouter();

	const handleOnSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const password = form.password.value;
		const passwordConfrim = form.confrimPassword.value;
		const userData = { name, email, password, passwordConfrim };
		console.log(userData);
		fetch("http://localhost:8000/users", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(userData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data) {
					toast.success("sucessfully register");
					getUser(data);
					form.reset();
					router.push("/");
				} else {
					toast.error(data.message);
				}
			});
	};
	return (
		<div className="w-full max-w-xs mx-auto py-24">
			<form
				className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
				onSubmit={handleOnSubmit}
			>
				<div className="text-xl text-center font-semibold text-gray-700 mb-3">
					Register
				</div>
				<div className="mb-4">
					<label className="block text-gray-900 text-sm  mb-2" for="name">
						Name
					</label>
					<input
						className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
						name="name"
						id="name"
						type="text"
						placeholder="name"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-900 text-sm  mb-2" for="email">
						Email
					</label>
					<input
						className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="text"
						name="email"
						placeholder="email"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-900 text-sm  mb-2" for="password">
						Password
					</label>
					<input
						className="shadow-sm appearance-none border bg-white rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						name="password"
						type="password"
						placeholder="******************"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-900 text-sm  mb-2"
						for="confrimPassword"
					>
						Confrim Password
					</label>
					<input
						className="shadow-sm appearance-none border bg-white rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="confrimPassword"
						name="confrimPassword"
						type="password"
						placeholder="******************"
					/>
				</div>
				<Link
					href="/login"
					className="text-red-500 text-center font-semibold w-full  mb-3  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button"
				>
					Already account?
				</Link>
				<button
					className="bg-red-500 w-full hover:bg-red-700 mb-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					create an account
				</button>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Register;
