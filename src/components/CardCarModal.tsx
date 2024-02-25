import { useState } from "react";
import Modal from "react-modal";

type CarData = {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0px",
  },
};
Modal.setAppElement("#root");

export const CardCarModal = ({ data }: { data: CarData }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onClick = () => {
    setIsOpenModal(true);
  };

  const closeModal = (e: any) => {
    setIsOpenModal(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="transition-all text-white bg-[#3470FF] w-full py-3 rounded-xl mt-[28px] hover:bg-[#0B44CD] focus:bg-[#0B44CD]">
        Learn more
      </button>

      <Modal isOpen={isOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <div className="w-[540px] bg-white px-10 py-4">
          <img src={data.img} className="h-[268px] rounded-[14px] " width={460} height={268} alt="Car" />
          <div className="flex  justify-between mt-[12px]">
            <h3 className="font-medium text-base">
              {data.make} {data.model} {data.year}
            </h3>
          </div>
          <div className="flex flex-wrap text-[#12141780] mt-2 items-center gap-[12px] ">
            <p className=" relative  after:absolute after:text-[#1214171A] after:bottom-[3px] after:right-[-6px] after:h-[16px] text-sm/[18px]">
              {data.address.split(",")[1]}{" "}
            </p>
            <p className=" after:content-['_|']  relative  after:absolute after:text-[#1214171A] after:bottom-[3px] after:right-[-6px] after:h-[16px] text-sm/[18px]">
              {data.address.split(",")[2]}{" "}
            </p>

            <p className="after:content-['_|']  relative  after:absolute  after:text-[#1214171A] after:bottom-[3px] after:right-[-6px] after:h-[16px] text-sm/[18px]">
              Id: {data.id}
            </p>
            <p className="after:content-['_|']  relative  after:absolute after:text-[#1214171A] after:bottom-[3px] after:right-[-6px] after:h-[16px] text-sm/[18px]">
              Year: {data.year}
            </p>
            <p className="after:content-['_|']  relative  after:absolute after:text-[#1214171A] after:bottom-[3px] after:right-[-6px] after:h-[16px] text-sm/[18px]">
              Type: {data.type}
            </p>
            <p className=" text-sm/[18px]">Fuel consumption: {data.fuelConsumption}</p>
            <p className=" text-sm/[18px]">Engine size: {data.engineSize}</p>
          </div>
          <h4 className="mt-[12px] text-sm">{data.description}</h4>
          <h4 className="mt-[12px] text-sm font-medium">Accessories and functionalities: </h4>
          <p className="mt-[8px] text-sm/[18px] text-[#12141780] flex gap-[6px] flex-wrap">
            {data.accessories.map((el,i)=><span key={i}>{el}</span>)} {data.functionalities.map((el,i)=><span key={i}>{el}</span>)}
          </p>
          <h4 className="mt-[12px]">Rental Conditions: </h4>
          <div className="flex  flex-wrap gap-3 mt-[12px]">
            <p>
              Minimum age :<span className=" text-blue-600">{}</span>{" "}
            </p>
            <p>Valid driver’s license</p>
            <p>Security deposite required </p>
            <p>
              Mileage: <span className=" text-blue-600">{data.mileage}</span>
            </p>
            <p>
              Price: <span className=" text-blue-600">{data.rentalPrice}</span>
            </p>
          </div>
          <button onClick={closeModal} type="button" className=" absolute z-10 text-red-400 top-2 right-2">
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z"
                fill="#000"></path>
            </svg>
          </button>
        <button className="transition-all text-white bg-[#3470FF] px-[50px] py-3 rounded-xl mt-[8px] hover:bg-[#0B44CD] focus:bg-[#0B44CD]">  <a className="" href="tel:+380730000000"
                > </a>Rental car</button>
        </div>
      </Modal>
    </>
  );
};
