import { createContext, useContext, useReducer, useState } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const initialState = {
	cart: [],
	total_item: "",
	total_amount: "",
	shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (food) => {
		const exist = cartItems.find((x) => x._id === food._id);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x._id === food._id ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setCartItems([...cartItems, { ...food, qty: 1 }]);
		}
	};

	const removeItem = (food) => {
		const exist = cartItems.find((x) => x._id === food._id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x._id !== food._id));
		} else {
			setCartItems(
				cartItems.map((x) =>
					x._id === food._id ? { ...exist, qty: exist.qty - 1 } : x
				)
			);
		}
	};

	return (
		<CartContext.Provider value={{ cartItems, addToCart, removeItem }}>
			{children}
		</CartContext.Provider>
	);
};

const useCartContext = () => {
	return useContext(CartContext);
};

export { CartProvider, useCartContext };
