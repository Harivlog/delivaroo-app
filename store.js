import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import basketReducer from "./features/baskitSlice"
import restaurantReducer from "./features/resturentSlice"
const reducer = combineReducers({
    // here we will be adding reducers
    basket : basketReducer,
    restaurant : restaurantReducer,

  })
export const store = configureStore({
    reducer,
 
})