import { RootState } from "./store";

export const getCarsSelector = (state: RootState) => {
  return state.cars;
};

export const favoriteCars = (state: RootState) => {
  return state.favorite;
};

export const filterCars = (state: RootState) => {
  return state.filter;
};
