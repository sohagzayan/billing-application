import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducerSlice/authSlice";
import thunk from "redux-thunk";
import billingSlice from "./reducerSlice/billingSlice";
import billingDetailsSlice from "./reducerSlice/billingDetailsSlice";

export const store = configureStore({
  reducer: {
    user: authSlice,
    billing: billingSlice,
    billingDetails: billingDetailsSlice,
  },
  middleware: [thunk],
});
