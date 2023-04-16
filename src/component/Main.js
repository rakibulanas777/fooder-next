import React from "react";
import FoodBanner from "./FoodBanner";

const Main = ({ foods, setFoods, pageCount, pages, setPages }) => {
	return (
		<>
			<FoodBanner
				foods={foods}
				pages={pages}
				setpages={setPages}
				setFoods={setFoods}
				pageCount={pageCount}
			/>
		</>
	);
};

export default Main;
