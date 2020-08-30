export interface IBook {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
  author?: string;
  availableStock: number;
}

export enum DashboardActionTypes {
  FETCH_REQUEST = "Dashboard/FETCH_REQUEST",
  FETCH_SUCCESS = "Dashboard/FETCH_SUCCESS",
  FETCH_ERROR = "Dashboard/FETCH_ERROR",
  SELECT_ITEM = "Dashboard/SELECT_ITEM",
}

export interface IDashboardState {
  readonly loading: boolean;
  readonly books: IBook[];
  readonly errors?: string;
}
