import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { carsReduser } from "./carsSlise";
import { favoriteReduser } from "./favoriteCars";
import { filterReduser } from "./filterSlise";
// ...

export const store = configureStore({
  reducer: {
    filter: filterReduser,
    cars: carsReduser,
    favorite: favoriteReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
