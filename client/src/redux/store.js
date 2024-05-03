import { configureStore } from "@reduxjs/toolkit";
import { gmailApi } from "./slices/gmailApi";

const store = configureStore({
  reducer: {
    [gmailApi.reducerPath]: gmailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gmailApi.middleware),
});

export default store;
