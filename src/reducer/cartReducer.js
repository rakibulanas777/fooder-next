const cartReducer = (state, action) => {
	if (action.type === "ADD_TO_CART") {
		let { food } = action.payload;

		let cartFood;

		cartFood = {
			id: food._id,
			title: food.title,
			image: food.image,
			price: food.price,
		};

		return {
			...state,
			cart: [...state.cart, cartFood],
		};
	}

	if (action.type === "REMOVE_ITEM") {
		let updatedCart = state.cart.filter(
			(curItem) => curItem._id !== action.payload
		);
		return {
			...state,
			cart: updatedCart,
		};
	}

	return state;
};

export default cartReducer;
