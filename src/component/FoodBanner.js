import Link from "next/link";
import React from "react";
import { AiOutlineArrowUp, AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";
import data from "./food";
const FoodBanner = () => {
	const { foods } = data;
	return (
		<div>
			<Wrapper>
				<div className="container py-8 mx-auto">
					<div className="flex items-center justify-between text-black  pb-4">
						<select className="select w-full max-w-xs bg-white">
							<option disabled selected>
								choose catagory
							</option>
							<option>Homer</option>
							<option>Marge</option>
							<option>Bart</option>
							<option>Lisa</option>
							<option>Maggie</option>
						</select>
						<button className="flex bg-white py-2 px-3 gap-2 items-center rounded-sm font-medium border-white">
							<span className=" font-medium">sort</span>
							<AiOutlineArrowUp />
						</button>
					</div>
					<div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 ">
						{foods.map((curElem) => {
							return <Food key={curElem.id} curElem={curElem} />;
						})}
					</div>
				</div>
			</Wrapper>
		</div>
	);
};

export default FoodBanner;

const Food = ({ curElem }) => {
	const { _id, user, id, title, image, category, price } = curElem;
	return (
		<div className="card h-full bg-white w-full shadow-sm rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg  border p-3">
			<div className="relative">
				<figure>
					<img src={image} />
				</figure>

				<div className="absolute top-2 right-2">
					<div className="shadow-sm text-white bg-red-500 hover:bg-red-700  cursor-pointer p-5  rounded-full  relative">
						<AiOutlinePlus className="absolute text-xl font-medium top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 " />
					</div>
				</div>
			</div>
			<div className="card-data pt-3">
				<div className="flex items-center text-black justify-between">
					<div className="font-medium  cursor-pointer">{title}</div>
					<div className="font-medium text-red-500 cursor-pointer">
						${price}
					</div>
				</div>
			</div>
		</div>
	);
};
const Wrapper = styled.section`
	figure {
		width: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;
		transition: all 0.5s linear;
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			width: 0%;
			height: 100%;
			background-color: RGB(239, 68, 68, 0.5);
			transition: all 0.2s linear;
			cursor: pointer;
		}
		&:hover::after {
			width: 100%;
		}
		&:hover img {
			transform: scale(1.3);
		}
		img {
			height: 10rem;
			transition: all 0.2s linear;
		}
	}
`;
