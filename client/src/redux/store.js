import { configureStore } from "@reduxjs/toolkit";
import { gmailApi } from "./slices/gmailApi";
import gmailSlice from "./slices/gmailSlice";

const store = configureStore({
  reducer: {
    getGmail:gmailSlice,
    [gmailApi.reducerPath]: gmailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gmailApi.middleware),
});

export default store;
