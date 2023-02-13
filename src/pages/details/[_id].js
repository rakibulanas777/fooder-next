import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { AiFillClockCircle } from "react-icons/ai";
import PageNavigation from "@/component/PageNavigation";

const API = "http://localhost:8000/foods";

export const getStaticPaths = async () => {
	const res = await fetch(API);
	const data = await res.json();

	const paths = data.map((food) => {
		return {
			params: { _id: food._id.toString() },
		};
	});
	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps(context) {
	const id = context.params._id;

	const res = await fetch(`http://localhost:8000/foods/${id}`);
	const food = await res.json();
	return {
		props: {
			food,
		},
	};
}

const foodDetails = ({ food }) => {
	const { title, desc, price, catagory, image } = food;
	return (
		<>
			<div className="pt-14">
				<div className="container mx-auto py-4 px-8">
					<PageNavigation title={title} />

					<div className="grid grid-cols-2 gap-8  ">
						{/* product Images  */}
						<div className=" bg-gray-50/[.04] border rounded p-4">
							<img src={image} />
						</div>

						<div className="border  rounded p-4 text-black">
							<div className="text-2xl mb-2 font-semibold text-blue-900">
								{title}
							</div>

							<p className="font-semibold  mb-2">price : ${price}</p>

							<p className="font-semibold  mb-2">catagory : {catagory}</p>
							<p className="font-semibold  mb-2">{desc}</p>

							<div className="border-b-2 border-gray-100 pb-4">
								<button className="py-2 px-4 mt-4 rounded bg-blue-900 text-white font-medium w-full">
									add to cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default foodDetails;
