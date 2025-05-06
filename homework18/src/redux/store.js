import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { FLUSH, REHYDRATE, PAUSE, REGISTER, PURGE, PERSIST } from 'redux-persist';

const cartPersistConfig = {
    key: "cart",
    storage: storage,
    whitelist: ['cartId']
}

export const store = configureStore({
    reducer: {
        cart: persistReducer(cartPersistConfig, cartReducer),
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

export const persistor = persistStore(store);