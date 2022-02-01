import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"

import apiReducer from './slices/apiSlice'
import productReducer from './slices/productSlice'
import companyReducer from './slices/companySlice'
import appReducer from './slices/app.slice'

const rootReducer = combineReducers({
  app: appReducer,
  // add more reducers
})

const defaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
})

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
    api: apiReducer,
    product: productReducer,
    company: companyReducer,
    middleware:  defaultMiddleware,
  }
})