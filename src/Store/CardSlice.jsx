import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name: 'cart',
    initialState:{
        cart: []
    },
    reducers:{
        addCard:(state, action)=>{
            const existingItem = state.cart.find((item)=>item.id === action.payload.id)
            if(existingItem){
                state.cart = state.cart.map((item)=>item.id === action.payload.id  ? {... item, qty: item.qty + 1 }: item)
            }else{
                state.cart.push(action.payload)
            }
        },
        removeCard:(state, action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload.id)
        }
    }
})
export const {addCard, removeCard} = CardSlice.actions
export default CardSlice.reducer