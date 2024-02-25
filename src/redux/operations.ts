import axios from "axios";
import { fetchingSuccess } from "./carsSlise";
import { Dispatch } from "redux";
import { CarData } from "../types/carDataType";
import { fetchingAllCars } from "./filterSlise";

axios.defaults.baseURL = "https://65d5ac6df6967ba8e3bc2d8d.mockapi.io/api/";

export const fetchCars = (page: number) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`cars?limit=12&page=${page}`);
    dispatch(fetchingSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchAllCars = (str: string) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get(`cars`);
    const arr = response.data.filter((car: CarData) => {
      return car.make === str;
    });
    dispatch(fetchingAllCars(arr));
  } catch (e) {
    console.log(e);
  }
};

// export const fetchCars = createAsyncThunk(
//     'cars/getCars',
//     // Declare the type your function argument here:
//     async (page: number, thunkAPI) => {
//       console.log(thunkAPI.getState());
//         try {
//             const resp  = await fetch(`https://65d5ac6df6967ba8e3bc2d8d.mockapi.io/api/cars?limit=12&page=${page}`)      // Inferred return type: Promise<MyData>

//           return await resp.json();
//         } catch (error:any) {
//           return thunkAPI.rejectWithValue(error.message);
//         }
//       }
//     );
