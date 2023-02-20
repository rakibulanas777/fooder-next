import React from "react";
import FoodBanner from "./FoodBanner";

const Main = ({ foods }) => {
	return (
		<>
			<FoodBanner foods={foods} />
		</>
	);
};

export default Main;
