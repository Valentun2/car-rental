import { useState } from "react";
import { CardCarModal } from "./CardCarModal";
import { useAppDispatch } from "../redux/store";
import { addFavorite, deleteFavorite } from "../redux/favoriteCars";
import { useSelector } from "react-redux";
import { favoriteCars, getCarsSelector } from "../redux/selectors";
import { CarData } from "../types/carDataType";
import { number } from "prop-types";

const s = localStorage.getItem("id") || "";
const arr: number[] = s ? JSON.parse(s) : [];

export const CardCar = ({ data }: { data: CarData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cars = useSelector(getCarsSelector);
  const favoriteCarsArr = useSelector(favoriteCars);
  const dispatch = useAppDispatch();

  const handleClick = (e: any) => {

    e.currentTarget.classList.toggle("active");
    
    if (!arr.includes(Number(e.currentTarget.dataset.id))) {
      arr.push(Number(e.currentTarget.dataset.id));
      const car: CarData | undefined = cars.find((car: any) => {
        return car.id === Number(e.currentTarget.dataset.id);
      });
      if (car) {
        dispatch(addFavorite(car));
      }
    } else {
      arr.splice(arr.indexOf(Number(e.currentTarget.dataset.id)), 1);

      dispatch(deleteFavorite(Number(e.currentTarget.dataset.id)));
    }
    localStorage.setItem("id", JSON.stringify(arr));
  };

  const handleButtonClick = (e: any) => {
    setIsOpen(true);
  };

  return (
    <li className=" w-[274px] relative border-slate-500 border-[1px] rounded-2xl">
      <img src={data.img} className="h-[268px] rounded-[14px]" width={274} height={268} alt="Car" />

      <svg
        onClick={handleClick}
        className={` ${arr.indexOf(data.id) !== -1 ? "active" : "fill-transparent"}  
           absolute top-[14px] right-[14px]  stroke-white fill-transparent`}
        width="18px"
        height="18px"
        viewBox="0 0 15 15"
        version="1.1"
        data-id={data.id}
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.91,6.75c-1.17,2.25-4.3,5.31-6.07,6.94c-0.1903,0.1718-0.4797,0.1718-0.67,0C5.39,12.06,2.26,9,1.09,6.75&#xA;&#x9;C-1.48,1.8,5-1.5,7.5,3.45C10-1.5,16.48,1.8,13.91,6.75z"
        />
      </svg>

      <div className="flex  justify-between mt-[14px] px-2">
        <h3 className="font-medium text-base">
          {data.make} {data.model} {data.year}
        </h3>

        <h3 className="font-medium text-base">{data.rentalPrice}</h3>
      </div>
      <div className="flex flex-wrap text-[#12141780] mt-2 items-center gap-[12px] px-2">
        <p className=" relative  after:absolute after:text-[#1214171A] after:bottom-[3px] after:right-[-6px] after:h-[16px] text-sm/[18px]">
          {data.address.split(",")[1]}{" "}
        </p>
        <p className=" after:content-['_|']  relative  after:absolute after:text-[#1214171A] after:bottom-[3px] after:right-[-6px] after:h-[16px] text-sm/[18px]">
          {data.address.split(",")[2]}{" "}
        </p>

        <p className="after:content-['_|']  relative  after:absolute  after:text-[#1214171A] after:bottom-[3px] after:right-[-6px] after:h-[16px] text-sm/[18px]">
          {data.rentalCompany}
        </p>
        <p className="after:content-['_|']  relative  after:absolute after:text-[#1214171A] after:bottom-[3px] after:right-[-6px] after:h-[16px] text-sm/[18px]">
          {data.type}
        </p>
        <p className="after:content-['_|']  relative  after:absolute after:text-[#1214171A] after:bottom-[3px] after:right-[-6px] after:h-[16px] text-sm/[18px]">
          {data.model}
        </p>
        <p className=" text-sm/[18px]">{data.mileage}</p>
      </div>
      <CardCarModal data={data} />
    </li>
  );
};
