import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 12,
    name: "clilicone",
    title: "homeMade",
  },
  {
    id: 1,
    name: "dondicated",
    title: "agricaltures Medicine's",
  },
];
export const MedicineSlice = createSlice({
  name: "Medicine",
  initialState,
  reducers: {
    addmedicine: (state, action) => {
      state.push(action.payload);
    },
    deletemedicine: (state, action) => {
      const objectId = action.payload;
      const index = state.findIndex((item) => item.id === objectId);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateMedicine: (state, action) => {
    //   const {id , name , title ,checkbox } = action.payload;
    //   const medicineToUpdate = state.find((medicine) => medicine.id == id);
    //     if(medicineToUpdate){
    //         medicineToUpdate.name = name;
    //         medicineToUpdate.title = title;
    //         medicineToUpdate.checkbox = checkbox;
    //     }

    const data = action.payload;
    const medicineData = state.find((i) => i.id == data.id);

    if(medicineData){
        medicineData.name = data.name;
        medicineData.title = data.title;
    }
    },
  },
});

export const { addmedicine, deletemedicine, updateMedicine } =
  MedicineSlice.actions;

export const mydata = (state) => state.manjulika;

export default MedicineSlice.reducer;
