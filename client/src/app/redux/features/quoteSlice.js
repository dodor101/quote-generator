//userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import  axios  from "axios";

// state initialization
const initialState = { data: null, loading: false, error: null };


// Define the async thunk for fetching user data
 export const fetchQuoteData = createAsyncThunk('quote/fetchQuoteData', async () => {
   const response = await axios('https://sv443.net/jokeapi/v2/joke/Miscellaneous?type=twopart&amount=10');
   return response.data;
 });
// Define the user slice
export const quoteSlice = createSlice({
  name: 'quote',
    initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuoteData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuoteData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchQuoteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong!";
      });
  },
});
export default quoteSlice.reducer;
