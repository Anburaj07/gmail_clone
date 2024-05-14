import { createSlice } from "@reduxjs/toolkit";

const gmailSlice = createSlice({
  name: "gmailId",
  initialState: {
    gmailId: "",
  },
  reducers: {
    setGmailId: (state, { payload }) => {
      state.gmailId = payload.gmailId;
    },
  },
});

export const { setGmailId } = gmailSlice.actions;
export default gmailSlice.reducer;
