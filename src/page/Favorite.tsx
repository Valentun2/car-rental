import { useSelector } from "react-redux";
import { favoriteCars, getCarsSelector } from "../redux/selectors";
import { CardCar } from "../components/CardsCar";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/store";
import { CarData } from "../types/carDataType";

const s = localStorage.getItem("id") || "";
const arr: number[] = s ? JSON.parse(s) : [];
export const Favorite = () => {
  let selector = useSelector(favoriteCars);
  

  return (
    <section className="p-5">
      <ul className="flex gap-6 flex-wrap  justify-center">
        {selector.map((car: CarData) => (
          <CardCar key={car.id} data={car} />
        ))}
      </ul>
    </section>
  );
};
