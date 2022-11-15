import { configureStore,createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        increment(state,action){
            state.counter++;
        },
        decrement(state,action){
            state.counter--;
        },
        Add(state,action){
            state.counter+=action.payload
        }
    }
});
export const actions=counterSlice.actions;
const store=configureStore({
    reducer:counterSlice.reducer
});
export default store;
/* import { type } from "@testing-library/user-event/dist/type";
import {createStore} from "redux";

const reduserFn=(state={counter:0},action)=>{

    if(action.type==="INC"){
        return {counter:state.counter+1}
    }
    if(action.type==="DEC"){
        return {counter:state.counter-1}
    }
    if(action.type==="ADD"){
        return {counter:state.counter+action.value}
    }
    return state;
}

const store=createStore(reduserFn);
export default store; */