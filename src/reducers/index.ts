import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { IDashboardState } from "../model/Dashboard";
import { DashboardReducer } from "./dashboardReducer";
import { CartReducer } from "./cartReducer"
import { ICartState } from "../model/cart";
import { RouterState } from "connected-react-router";

export interface ApplicationState {
  cart: ICartState;
  dashboard: IDashboardState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    cart: CartReducer,
    dashboard: DashboardReducer,
    router: connectRouter(history)
  });
