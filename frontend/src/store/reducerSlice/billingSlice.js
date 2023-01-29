import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billingSlice = createSlice({
  name: "billing",
  initialState: {
    success: null,
    loading: true,
    error: null,
  },
  reducers: {
    requestAddNewBilling(state) {
      state.loading = true;
      state.error = null;
    },
    successAddNewBilling(state) {
      state.loading = false;
      state.error = null;
      state.success = "Successfully added new billing info";
    },
    failureAddNewBilling(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.success = null;
    },
    clearAddBillingError(state, action) {
      state.error = null;
    },
    clearAddBillingSuccess(state, action) {
      state.success = null;
    },
  },
});

export const {
  requestAddNewBilling,
  successAddNewBilling,
  failureAddNewBilling,
  clearAddBillingError,
  clearAddBillingSuccess,
} = billingSlice.actions;
export default billingSlice.reducer;

/* add New Billing */
export const addNewBilling = (billingData) => async (dispatch) => {
  try {
    dispatch(requestAddNewBilling());
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/api/add-billing", billingData, config);
    dispatch(successAddNewBilling());
  } catch (error) {
    dispatch(failureAddNewBilling(error.response.data.message));
  }
};

/* clear error billing error */
export const clearBillingError = (billingData) => async (dispatch) => {
  dispatch(clearAddBillingError());
};

/* clear success billing  */
export const clearBillingSuccess = (billingData) => async (dispatch) => {
  dispatch(clearAddBillingSuccess());
};
