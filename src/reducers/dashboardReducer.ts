import { Reducer } from "redux";
import { DashboardActionTypes, IDashboardState } from "../model/Dashboard";
import { ApplicationState } from ".";
import { createSelector } from "reselect";

export const initialState: IDashboardState = {
  books: [],
  errors: undefined,
  loading: false
};

const reducer: Reducer<IDashboardState> = (state = initialState, action) => {
  switch (action.type) {
    case DashboardActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case DashboardActionTypes.FETCH_SUCCESS: {
      console.log("action payload", action.payload);
      return { ...state, loading: false, books: action.payload };
    }
    case DashboardActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as DashboardReducer };

/** Dashboard state selectors */

const books = (state: ApplicationState) => state.dashboard.books;

export const getAllBooks = createSelector([books], (data) => data);
