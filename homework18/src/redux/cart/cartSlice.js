import { createSlice } from '@reduxjs/toolkit';
import { createCart, getCart } from './cartThunks';

const initialState = {
    items: [],
    loading: false,
    error: null,
    cartId: null,
};

const pending = (store) => {
    store.loading = true;
    store.error = null;
}

const rejected = (store, { payload }) => {
    store.loading = false;
    store.error = payload;
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(createCart.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.cartId = payload;
            })
            .addCase(createCart.pending, pending)
            .addCase(createCart.rejected, rejected)
            .addCase(getCart.fulfilled, (store, { payload }) => {
                store.loading = false;
                store.items = payload;
            })
            .addCase(getCart.pending, pending)
            .addCase(getCart.rejected, rejected)
    }
});

export default cartSlice.reducer;