import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import { AiOutlineGithub, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import { useForm } from "react-hook-form";
import Link from "next/link";
const Register = () => {
	const [registerData, setRegisterData] = useState({});
	const [check, setCheck] = useState(false);
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		<Navigate to="/foods" replace={true} />;
		alert("users added successfully!!!");
	};

	const handleOnSubmit = async (e) => {
		const firstName = e.target.firstName.value;
		const lastName = e.target.lastName.value;
		const email = e.target.email.value;
		const Password = e.target.password.value;
		const confirmPassword = e.target.confirmPassword.value;
		const userData = { firstName, lastName, email, Password, confirmPassword };

		e.preventDefault();
		// e.preventDefault();
		// createUserWithEmailAndPassword(registerData.email, registerData.password);
		// if (user.emailVerified) {

		// }
		fetch("http://localhost:5000/register", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(userData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log("success", data);
				alert("users added successfully!!!");
				e.target.reset();
			});
		console.log(userData);
	};

	return (
		<div className="register">
			<section className="body-font relative">
				<div className="container px-5 py-14 mx-auto">
					<div className="flex flex-col text-center w-full mt-8">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
							Register
						</h1>
					</div>
					<form>
						<div className="lg:w-1/2 md:w-2/3 mx-auto">
							<div className="flex flex-wrap -m-2">
								<div className="p-2 w-1/2">
									<div className="relative">
										<label
											for="name"
											className="leading-7 text-sm text-gray-800 font-semibold"
										>
											First name
										</label>
										<input
											type="text"
											id="name"
											name="firstName"
											{...register("firstName", {
												required: true,
												maxLength: 20,
												pattern: /^[A-Za-z]+$/i,
											})}
											className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 glass focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>

										{errors.firstName?.type === "required" && (
											<p className="text-red-800 font-medium">
												First name is redquired
											</p>
										)}
										{errors?.firstName?.type === "maxLength" && (
											<p className="text-red-800 font-medium">
												First name cannot exceed 20 characters
											</p>
										)}
										{errors?.firstName?.type === "pattern" && (
											<p className="text-red-800 font-medium">
												Alphabetical characters only
											</p>
										)}
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label
											for="name"
											className="leading-7 text-sm text-gray-800 font-semibold"
										>
											Last name
										</label>
										<input
											type="text"
											id="name"
											{...register("lastName", {
												required: true,
												maxLength: 20,
												pattern: /^[A-Za-z]+$/i,
											})}
											name="lastName"
											className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 glass focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
										{errors.lastName?.type === "required" && (
											<p className="text-red-800 font-medium">
												Last name is redquired
											</p>
										)}
										{errors?.lastName?.type === "maxLength" && (
											<p className="text-red-800 font-medium">
												Last name cannot exceed 20 characters
											</p>
										)}
										{errors?.lastName?.type === "pattern" && (
											<p className="text-red-800 font-medium">
												Alphabetical characters only
											</p>
										)}
									</div>
								</div>
								<div className="p-2 w-full">
									<div className="relative">
										<label
											for="email"
											className="leading-7 text-sm text-gray-600"
										>
											Email
										</label>
										<input
											type="email"
											id="email"
											{...register("email", {
												required: true,
												pattern:
													/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
											})}
											name="email"
											className="w-full glass bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
										{errors.email?.type === "required" && (
											<p className="text-red-800 font-medium">
												Email is redquired
											</p>
										)}

										{errors?.email?.type === "pattern" && (
											<p className="text-red-800 font-medium">
												Please provide valid email
											</p>
										)}
									</div>
								</div>
								<div className="p-2 w-1/2">
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
											{...register("password", {
												required: true,
												minLength: 8,
												maxLength: 20,
												pattern:
													/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
											})}
											name="password"
											className="w-full glass bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
										/>
										{errors.password?.type === "required" && (
											<p className="text-red-800 font-medium">
												Password is redquired
											</p>
										)}

										{errors?.password?.type === "pattern" && (
											<p className="text-red-800 font-medium">
												one lowercase letter and one number and one special
												character
											</p>
										)}
										{errors?.password?.type === "maxLength" && (
											<p className="text-red-800 font-medium">
												Password cannot exceed 20 characters
											</p>
										)}
										{errors?.password?.type === "minLength" && (
											<p className="text-red-800 font-medium">
												Password Shold be more than 8
											</p>
										)}
									</div>
								</div>
								<div className="p-2 w-1/2">
									<div className="relative">
										<label
											for="passwordConfrim"
											className="leading-7 text-sm text-gray-800 font-semibold"
										>
											Confrim password
										</label>
										<input
											type="password"
											id="passwordConfrim"
											name="confirmPassword"
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

							<div className="right-part text-center mt-4 cursor-pointer text-sm text-green-400 font-semibold">
								<Link href="/login">Already account ?</Link>
							</div>
						</div>
					</form>
					<div className="text-xl text-center text-green-900 mt-2 font-semibold">
						or
					</div>
					<div className="flex justify-center mt-3 mb-3 items-center">
						<div className="icon btn btn-ghost glass bg-white w-14 h-14 rounded-full shadow mr-3">
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

export default Register;
