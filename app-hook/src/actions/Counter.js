import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0
    },
    reducers:{
        increment: (state)=>{
            state.value = state.value + 1
        },
        decrement: (state)=>{
            state.value = state.value - 1
        },
        setCountValue: (state,action)=>{
            state.value = action.payload
        },
        logData:()=>{
            console.log("Hello world")
        }
    }
})

export const {decrement,increment,setCountValue,logData} = counterSlice.actions

export default counterSlice.reducer