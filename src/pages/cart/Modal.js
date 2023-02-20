import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useCartContext } from "@/context/cart_context";
import { useSession, signIn, signOut } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";
const Modal = () => {
	const { cartItems, removeItem, addToCart, setCartItems } = useCartContext();
	const { data: session } = useSession();
	const handleSubmit = (e) => {
		e.preventDefault();
		const order = [
			...cartItems,
			{
				name: session.user.name,
				email: session.user.email,
				imageurl: session.user.image,
			},
		];

		console.log(order);
		fetch("http://localhost:8000/order", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(order),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data) {
					toast.success("product added");
				} else {
					toast.error(data.message);
				}
			});
	};
	return (
		<>
			<input type="checkbox" id="confrim-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box bg-white h-full relative">
					<label
						htmlFor="confrim-modal"
						className="btn btn-sm btn-circle absolute right-2 top-2 text-white hover:bg-red-600 hover:border-red-600 border-red-500 bg-red-500"
					>
						✕
					</label>
					<form onSubmit={handleSubmit}>
						<button
							className="btn flex-end text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:bg-red-600 hover:border-red-600 border-red-500 btn-sm bg-red-500"
							type="submit"
						>
							confrim purchase
						</button>
					</form>
				</div>
			</div>
			<ToastContainer />
		</>
	);
};

export default Modal;
