import { createSlice } from '@reduxjs/toolkit';


const initialState  = {
    counter : 0
}
export const counterSlice = createSlice({
    name: 'constara',
    initialState,
    reducers: {
        //anonymous(અનામી) callback function () => {}
        increment: (state) => {
            state.counter +=  1;
            // state.count = state.count + 1
        },
        decrement: (state) => {
            state.counter -=  1;
            // state.count = state.count - 1
        },
        reset : (state) => {
            state.counter = 0
        },
        incrementBynumber : (state , action) => {
            state.counter = state.counter + action.payload 
        }
    }
})

export const { increment , decrement , reset , incrementBynumber} = counterSlice.actions;  // this needed for action despatch okay
export default counterSlice.reducer;