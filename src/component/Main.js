import React from "react";
import FoodBanner from "./FoodBanner";

const Main = ({ foods, setFoods }) => {
	return (
		<>
			<FoodBanner foods={foods} setFoods={setFoods} />
		</>
	);
};

export default Main;
