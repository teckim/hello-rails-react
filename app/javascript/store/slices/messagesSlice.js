import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchRandomMessage from "../../services/messagesService";

const initialState = {
  isLoading: false,
  isFaild: false,
  massage: null,
};

export const fetchRandomMessageThunk = createAsyncThunk(
  "messages/fetchRandomMessage",
  async () => {
    const { data } = await fetchRandomMessage();
    return data.text;
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  extraReducers: {
    [fetchRandomMessageThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
    [fetchRandomMessageThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchRandomMessageThunk.rejected]: (state) => {
      state.isFaild = true;
    },
  },
});

export default messagesSlice.reducer;
