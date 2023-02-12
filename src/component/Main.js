import React from "react";
import FoodBanner from "./FoodBanner";

const Main = ({ foods, handleCatagory }) => {
	return (
		<>
			<FoodBanner foods={foods} handleCatagory={handleCatagory} />
		</>
	);
};

export default Main;
