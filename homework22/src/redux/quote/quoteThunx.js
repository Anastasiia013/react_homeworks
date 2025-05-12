import { createAsyncThunk } from "@reduxjs/toolkit";
import { getQuoteApi } from "../../api/backendInstance";

export const getRandomQuote = createAsyncThunk(
    "quote/get",
    async (_, { rejectWithValue }) => {
        try {
            const data = await getQuoteApi();
            return data.data;
        } catch (error) {
            return rejectWithValue(error?.response?.data?.message);
        }
    }
);
