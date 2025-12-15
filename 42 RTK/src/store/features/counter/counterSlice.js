import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    name: 'mkl',
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state, action) =>{
            state.value += 1
        },
        decrement: (state, action) =>{
            state.value -= 1
        },
        changeByValue: (state, action)=>{
            state.value = action.payload
        },
        changeName: (state, action)=>{
            state.name = action.payload
        }
    }
})

export const {increment, decrement, changeByValue, changeName} = counterSlice.actions

export default counterSlice.reducer