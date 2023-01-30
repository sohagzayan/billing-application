import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billingSlice = createSlice({
  name: "billing",
  initialState: {
    success: null,
    successUpdate: null,
    successDelete: null,
    successNewBilling: null,
    loading: false,
    billing: [],
    filteredProductsCount: null,
    totalPrice: 0,
    error: null,
  },
  reducers: {
    requestAddNewBilling(state) {
      state.loading = true;
      state.error = null;
    },
    requestAllBilling(state, action) {
      state.loading = false;
      state.error = null;
      state.billing = action.payload.billing;
      state.filteredProductsCount = action.payload.filteredProductsCount;
      state.totalPrice = action.payload.totalPrice;
    },
    successAddNewBilling(state, action) {
      state.loading = false;
      state.error = null;
      state.successNewBilling = "Successfully added new billing info";
      state.billing.push(action.payload);
      state.filteredProductsCount = state.filteredProductsCount + 1;
    },
    successUpdateBilling(state, action) {
      state.loading = false;
      state.error = null;
      state.successUpdate = "Successfully Updated  billing info";
      // state.billing.push(action.payload);
    },
    successDeleteBilling(state, action) {
      state.loading = false;
      state.error = null;
      state.successDelete = "Successfully Delete  billing info";
      state.billing = action.payload;
      // state.filteredProductsCount = state.filteredProductsCount - 1;
    },
    failureAddNewBilling(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.success = null;
    },
    clearAddBillingError(state, action) {
      state.error = null;
      state.loading = false;
    },
    clearAddBillingSuccess(state, action) {
      state.success = null;
      state.successUpdate = null;
      state.successDelete = null;
      state.successNewBilling = null;
      state.loading = false;
    },
  },
});

export const {
  requestAddNewBilling,
  successAddNewBilling,
  failureAddNewBilling,
  clearAddBillingError,
  clearAddBillingSuccess,
  successUpdateBilling,
  successDeleteBilling,
  requestAllBilling,
} = billingSlice.actions;
export default billingSlice.reducer;

/* get all Billing */
export const getAllBilling =
  (search = "", page = 1) =>
  async (dispatch) => {
    try {
      dispatch(requestAddNewBilling());
      const { data } = await axios.get(
        `/api/billing-list?search=${search}&page=${page}`
      );
      dispatch(
        requestAllBilling({
          billing: data.billing,
          filteredProductsCount: data.filteredProductsCount,
          totalPrice: data.totalPrice,
        })
      );
    } catch (error) {
      dispatch(failureAddNewBilling(error.response.data.message));
    }
  };
/* add New Billing */
export const addNewBilling = (billingData) => async (dispatch) => {
  try {
    dispatch(requestAddNewBilling());
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/api/add-billing", billingData, config);
    dispatch(successAddNewBilling(data.newBilling));
  } catch (error) {
    dispatch(failureAddNewBilling(error.response.data.message));
  }
};

/* Update billing */
export const updateBillingInfo =
  (id, billingData) => async (dispatch, getState) => {
    try {
      dispatch(requestAddNewBilling());
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(
        `/api/update-billing/${id}`,
        billingData,
        config
      );
      dispatch(successUpdateBilling(data.updatedBilling));
    } catch (error) {
      dispatch(failureAddNewBilling(error.response.data.message));
    }
  };

/* Update billing */
export const deleteBilling = (id) => async (dispatch, getState) => {
  try {
    dispatch(requestAddNewBilling());
    const { data } = await axios.delete(`/api/delete-billing/${id}`);
    dispatch(successDeleteBilling(data.updatedBilling));
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
