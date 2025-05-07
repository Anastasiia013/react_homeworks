import { createSlice } from "@reduxjs/toolkit";
import { getRandomQuote } from "./quoteThunx";

const initialState = {
    quote: null,
    author: null,
    error: null,
    loading: false,
}

const pending = (store) => {
    store.loading = true;
    store.error = null;
}
const rejected = (store, { payload }) => {
    store.loading = false;
    store.error = payload;
}

const quoteSlice = createSlice({
    name: "quote",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getRandomQuote.pending, pending)
            .addCase(getRandomQuote.fulfilled, (store, { payload }) => {
                store.quote = payload.quote;
                store.author = payload.author;
                store.loading = false;
                store.error = null;
            })
            .addCase(getRandomQuote.rejected, rejected)
    }
})

export default quoteSlice.reducer;
