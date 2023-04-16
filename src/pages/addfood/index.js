import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddFood = () => {
	const catagory = [
		{
			name: "rice",
		},
		{
			name: "ice-cream",
		},
		{
			name: "fish",
		},
		{
			name: "foods",
		},
		{
			name: "drinks",
		},
		{
			name: "curry",
		},
		{
			name: "chicken",
		},
	];
	const handleOnSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const title = form.name.value;
		const desc = form.desc.value;
		const price = form.price.value;
		const image = form.food.value;
		const catagory = form.catagory.value;
		const foodData = { title, desc, price, image, catagory };
		console.log(foodData);
		fetch("https://fooder-server.onrender.com/foods", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(foodData),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data) {
					toast.success("sucessfully added");
					form.reset();
				} else {
					toast.error(data.message);
				}
			});
	};
	return (
		<div className="container mx-auto lg:h-screen">
			<form
				className="flex flex-col gap-3 pt-24 w-3/4 mx-auto"
				onSubmit={handleOnSubmit}
				action="/foods"
				method="post"
				encType="multipart/form-data"
			>
				<div className="flex gap-3">
					<input
						type="text"
						name="name"
						placeholder="food name"
						className="shadow-sm appearance-none border bg-white rounded w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="flex gap-3">
					<input
						type="text"
						name="price"
						placeholder="price"
						className="shadow-sm appearance-none border bg-white rounded w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
					/>
					<input
						type="text"
						name="food"
						placeholder="image"
						className=" shadow-sm appearance-none border bg-white rounded w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline "
					/>

					{/* <input
								name="file"
								type="file"
								className="file-input w-full file-input-error file-input-white bg-white "
							/> */}
				</div>

				<textarea
					name="desc"
					type="text"
					className="shadow-sm appearance-none border bg-white rounded w-full py-3 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="description"
				/>

				<div className="flex justify-between gap-3">
					<select className="select w-full  bg-white" name="catagory">
						<option disabled selected>
							Select catagory
						</option>
						{catagory.map((catagory) => (
							<option>{catagory.name}</option>
						))}
					</select>
				</div>
				<input
					className="btn text-white hover:bg-red-600 hover:border-red-600 border-red-500 bg-red-500"
					type="submit"
					value="submit"
				/>
			</form>
			<ToastContainer />
		</div>
	);
};

export default AddFood;
