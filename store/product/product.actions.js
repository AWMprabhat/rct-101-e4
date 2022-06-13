// Product actions here
import axios from "axios";
import {
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
} from "./product.types";

export const getProducts = () => (disptach) => {
  disptach({ type: GET_PRODUCTS_LOADING });

  axios
    .get("http://localhost:8080/products")
    .then((res) => {
      return disptach({ type: GET_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch(() => disptach({ type: GET_PRODUCTS_ERROR }));
};
