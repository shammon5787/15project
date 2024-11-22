import { configureStore } from "@reduxjs/toolkit";
import CategoryReducer from './CategorySlice.jsx'
import SearchReducer from './SearchSlice.jsx'

const Store = configureStore({
    reducer:{
        category: CategoryReducer ,
        search: SearchReducer ,
    }
})

export default Store