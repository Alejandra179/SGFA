import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import comedorSlice from "../features/comedor/comedorSlice";


export const store = configureStore(
  {
    reducer: {
      auth: authReducer,
      comedores: comedorSlice,
    },
   
  },
 
);
