import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CarData } from "../types/carDataType";

const favoriteSlise = createSlice({
  name: "favorite",
  initialState: [],
  reducers: {
    addFavorite(state: CarData[], action: PayloadAction<CarData>) {
      state.push(action.payload);
    },
    deleteFavorite(state: never[], action: PayloadAction<number>) {
      return state.filter((car: CarData) => car.id !== action.payload);
    },
  },
});

export const { addFavorite, deleteFavorite } = favoriteSlise.actions;

export const favoriteReduser = favoriteSlise.reducer;
