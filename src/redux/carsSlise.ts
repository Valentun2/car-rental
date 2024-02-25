import { createSlice } from "@reduxjs/toolkit";
import { CarData } from "../types/carDataType";

const initialState: CarData[] = [];

const carsSlise = createSlice({
  name: "cars",
  initialState,
  reducers: {
    fetchingSuccess(state, action) {
      state.push(...action.payload);
    },
  },

  
});
export const { fetchingSuccess } = carsSlise.actions;
export const carsReduser = carsSlise.reducer;
