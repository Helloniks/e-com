import { Reducer } from "redux";
import { CartActionTypes, ICartState } from "../model/cart";
import { ApplicationState } from ".";
import { createSelector } from "reselect";


export const initialState: ICartState = {
    data: {
        id: 0,
        items: []
    },
    errors: undefined,
    loading: false
};

const reducer: Reducer<ICartState> = (state = initialState, action) => {
    switch (action.type) {
        case CartActionTypes.FETCH_CART_REQUEST: {
            return { ...state, loading: true };
        }
        case CartActionTypes.FETCH_CART_SUCCESS: {
            return { ...state, loading: false, data: action.payload };
        }
        case CartActionTypes.ADD_TO_CART: {
            return {
                errors: state.errors,
                loading: state.loading,
                data: {
                    ...state.data,
                    id: state.data.id,
                    items: [...state.data.items, action.payload]
                }
            };
        }
        default: {
            return state;
        }
    }
};

export { reducer as CartReducer };

/** Dashboard state selectors */

const items = (state: ApplicationState) => state.cart.data;

export const getCartdetails = createSelector([items], (data) => data);