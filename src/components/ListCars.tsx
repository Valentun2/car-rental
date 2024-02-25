import { CardCar } from "./CardsCar";
import { useSelector } from "react-redux";
import { fetchCars } from "../redux/operations";
import { useAppDispatch } from "../redux/store";
import { filterCars, getCarsSelector } from "../redux/selectors";
import { CarData } from "../types/carDataType";

let page = 1;
export const ListCars = () => {
  const selector = useSelector(getCarsSelector);
  const dispatch = useAppDispatch();
  const filter = useSelector(filterCars);
  const handleClick = () => {
    page += 1;
    dispatch(fetchCars(page));
  };

  return (
    <>
      {" "}
      <ul className="flex gap-6 flex-wrap mt-5 justify-center">
        {selector?.map((car: CarData, i) => {
          return <CardCar key={String(car.id) + i} data={car} />;
        })}
      </ul>
      <button
        className="mx-auto flex text-[#3470FF] font-medium text-base mt-[100px] mb-[20px] hover:text-[#0B44CD] focus:text-[#0B44CD]"
        type="button"
        onClick={handleClick}>
        Load more
      </button>
    </>
  );
};
