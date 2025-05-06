import { createAsyncThunk } from '@reduxjs/toolkit';
import { createCartApi, getCartApi } from '../../shared/api/cart-api';


export const createCart = createAsyncThunk(
    "cart/create",
    async (_, { rejectWithValue }) => {
        const { data, error } = await createCartApi();
        if (data) return data._id;
        return rejectWithValue(error?.response?.data?.message)
    }
);

export const getCart = createAsyncThunk(
    "cart/fetch",
    async (_, { rejectWithValue, getState }) => {
        const { cart } = getState();
        const { data, error } = await getCartApi(cart.cartId);
        if (data) return data.items;
        return rejectWithValue(error?.response?.data?.message)
    }
)