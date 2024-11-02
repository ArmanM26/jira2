import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export default userProfileSlice.reducer;
export const { increment, decrement } = userProfileSlice.actions;
