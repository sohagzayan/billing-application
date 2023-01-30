import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billingDetailsSlice = createSlice({
  name: "billing",
  initialState: {
    loading: false,
    billing: {},
    error: null,
  },
  reducers: {
    requestGetNewBilling(state) {
      state.loading = true;
      state.error = null;
    },
    successGetBillingDetails(state, action) {
      state.loading = false;
      state.error = null;
      state.billing = action.payload;
    },

    failureGetBillingDetails(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearAddBillingError(state, action) {
      state.error = null;
      state.loading = false;
    },
  },
});

export const {
  requestGetNewBilling,
  successGetBillingDetails,
  failureGetBillingDetails,
  clearAddBillingError,
} = billingDetailsSlice.actions;
export default billingDetailsSlice.reducer;

/* get all Billing */
export const getBillingDetails = (id) => async (dispatch) => {
  try {
    dispatch(requestGetNewBilling());
    const { data } = await axios.get(`/api/billing-details/${id}`);
    dispatch(successGetBillingDetails(data.billing));
  } catch (error) {
    dispatch(failureGetBillingDetails(error.response.data.message));
  }
};
/* clear error billing error */
export const clearBillingError = () => async (dispatch) => {
  dispatch(clearAddBillingError());
};
