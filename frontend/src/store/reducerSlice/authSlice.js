import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    loading: true,
    isAuthenticated: false,
    error: null,
  },
  reducers: {
    requestUser(state) {
      state.loading = true;
      state.error = null;
      state.isAuthenticated = false;
    },
    requestUserSuccess(state, action) {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    requestUserLogOut(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = action.payload;
      state.error = null;
    },
    requestUserFailure(state, action) {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    requestUserClearError(state, action) {
      state.error = action.payload;
    },
  },
});
export const {
  requestUser,
  requestUserSuccess,
  requestUserFailure,
  requestUserClearError,
  requestUserLogOut,
} = authSlice.actions;
export default authSlice.reducer;

/* Login user */
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(requestUser());
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      "/api/login",
      {
        email,
        password,
      },
      config
    );

    dispatch(requestUserSuccess(data.user));
  } catch (error) {
    dispatch(requestUserFailure(error.response.data.message));
  }
};

/* register user */
export const register = (userData) => async (dispatch) => {
  try {
    dispatch(requestUser());
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post("/api/register", userData, config);
    dispatch(requestUserSuccess(data.user));
  } catch (error) {
    dispatch(requestUserFailure(error.response.data.message));
  }
};

/* load user */
export const loadUser = () => async (dispatch, getState) => {
  try {
    dispatch(requestUser());
    const { data } = await axios.get("/api/me");
    dispatch(requestUserSuccess(data.user));
  } catch (error) {
    dispatch(requestUserFailure(error.response.data.message));
  }
};

/* log out user */
export const logOut = () => async (dispatch) => {
  try {
    dispatch(requestUser());
    await axios.get("/api/logout");
    dispatch(requestUserLogOut(null));
  } catch (error) {
    dispatch(requestUserClearError(error.response.data.message));
  }
};

/* log out user */
export const clearAuthError = () => async (dispatch) => {
  dispatch(requestUserClearError(null));
};
