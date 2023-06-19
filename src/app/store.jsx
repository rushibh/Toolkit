import { configureStore } from '@reduxjs/toolkit';
import MedicineSlice from '../features/Medicine/MedicineSlice';
// import counterReducer from '../features/counter/counterSlice'
export const store = configureStore({
    reducer : {
        // counters : counterReducer, // counters will be use in useSelectore()
        manjulika : MedicineSlice
    }
})