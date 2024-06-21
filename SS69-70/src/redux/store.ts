import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/cart";
import { listProductReducer } from "./reducers/listProduct";

const reducer =combineReducers({cartReducer,listProductReducer});
export const store =createStore(reducer);