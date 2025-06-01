import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../slices/categorySlice";
import productSlice from "./../slices/productSlice";

export default configureStore({
  reducer: {
    category: categorySlice,
    products: productSlice,
  },
});
