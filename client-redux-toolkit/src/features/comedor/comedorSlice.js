import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comedores: [],
  error: {},
  loading: false,
};

export const comedorSlice = createSlice({
  name: "comedores",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    getAll: (state, action) => {
      state.loading = false;
      state.comedores=action.payload
    },
    getComedor: (state, action) => {
      state.find((comedor) => comedor.id === action.payload.id);
    },
    addComedor: (state, action) => {
      state.push(action.payload);
    },
    deleteComedor: (state, action) => {
      state.filter((comedor) => comedor.id === action.payload.id);
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
  },
  
});

export const { startLoading, getAll, getComedor, setError } =
  comedorSlice.actions;
export default comedorSlice.reducer;
