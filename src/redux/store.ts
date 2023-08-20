import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./Slices/contactSlice";

const store = configureStore({
    reducer: {
      contacts:contactSlice
    },
  });
  
  export default store;