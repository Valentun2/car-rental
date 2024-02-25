import { createSlice } from "@reduxjs/toolkit";
import { CarData } from "../types/carDataType";

const initialState: CarData[] = [];

const filterSlise = createSlice({
  name: "cars",
  initialState,
  reducers: {
    fetchingAllCars(state, action) {
      console.log(action.payload);
      state = action.payload;
    },
  },
});
export const { fetchingAllCars } = filterSlise.actions;
export const filterReduser = filterSlise.reducer;
