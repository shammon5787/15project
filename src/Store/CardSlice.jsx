import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name: 'card',
    initialState:{
        card: []
    },
    reducers:{
        addCard:(state, action)=>{
            const existingItem = state.card.find((item)=>item.id === action.payload.id)
            if(existingItem){
                state.card = state.card.map((item)=>item.id === action.payload.id ? {... item, qty: item.qty + 1} : item)
            }else{
                state.card.push(action.payload)
            }
        },
        removeCard:(state, action)=>{
            state.card = state.card.filter((item)=>item.id !== action.payload.id)
        },
        increaseItem:(state, action)=>{
            state.card = state.card.map((item)=>item.id === action.payload.id? {... item, qty: item.qty + 1} : item)
        },
        decreaseItem:(state, action)=>{
            state.card = state.card.map((item)=>item.id === action.payload.id? {... item, qty: item.qty - 1} : item)
        }
    }
})
export const {addCard, removeCard, increaseItem, decreaseItem} = CardSlice.actions
export default CardSlice.reducer