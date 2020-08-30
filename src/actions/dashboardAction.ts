import { DashboardActionTypes } from "../model/Dashboard";

export const getProductsSuccess = (products: any) => ({
	type: DashboardActionTypes.FETCH_SUCCESS,
	payload: products
});

export const getProductsfailure = () => ({
	type: DashboardActionTypes.FETCH_ERROR
});

export const fetchRequest = () => ({
	type: DashboardActionTypes.FETCH_REQUEST
});

export const selectItem = (item: any) => ({
	type: DashboardActionTypes.SELECT_ITEM,
	payload: item
});
