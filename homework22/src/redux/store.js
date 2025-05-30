import { configureStore } from '@reduxjs/toolkit'
import quoteReducer from './quote/quoteSlice'

const store = configureStore({
    reducer: {
        quote: quoteReducer,
    }
})

export default store;