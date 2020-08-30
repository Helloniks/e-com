import { CartActionTypes } from "../model/cart";

export const fetchCartRequest = (cart: any) => ({
	type: CartActionTypes.FETCH_CART_SUCCESS,
	payload: cart
});

export const addItemToCart = (item: any) => ({
	type: CartActionTypes.ADD_TO_CART,
	payload: item
});