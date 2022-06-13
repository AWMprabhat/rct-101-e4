import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";

// reducers
import { authReducer } from "./auth/auth.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { productReducer } from "./product/product.reducer";


// TODO: use this store variable to create a store.
export const store = legacy_createStore(
  combineReducers({
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
  }),
  compose(applyMiddleware(thunk))
);

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}

