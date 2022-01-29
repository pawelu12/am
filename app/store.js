import { configureStore } from "@reduxjs/toolkit"

import apiReducer from './slices/apiSlice'
import productReducer from './slices/productSlice'
import companyReducer from './slices/companySlice'

export const store = configureStore({
  reducer: {
    api: apiReducer,
    product: productReducer,
    company: companyReducer
  }
})