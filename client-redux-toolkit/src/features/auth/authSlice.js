import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  isLoading: false,
  error: {},
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = {}
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
});
export const { login, startLoading, setError } = authSlice.actions;
export default authSlice.reducer;
