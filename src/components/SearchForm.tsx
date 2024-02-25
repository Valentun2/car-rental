import { useAppDispatch } from "../redux/store";
import { fetchAllCars } from "../redux/operations";
import { useSelector } from "react-redux";
import { getCarsSelector } from "../redux/selectors";

const marks = [
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];

const arr: number[] = [];
for (let i = 10; i <= 200; i += 10) {
  arr.push(i);
}

const SearchForm = () => {
  const dispatch = useAppDispatch();
  const handleChange = (e: any) => {
    dispatch(fetchAllCars(e.target.value));
  };
  const select = useSelector;
  const handleSabmit = (e: any) => {
    e.preventDefault();
    select(getCarsSelector);
  };

  return (
    <form className="mt-5 " onSubmit={handleSabmit}>
      <select onChange={handleChange}>
        {marks.map((make, i) => {
          return (
            <option key={i} value={make}>
              {make}
            </option>
          );
        })}
      </select>
      <select>
        {arr.map((c, i) => (
          <option key={i} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input name="from" placeholder="From" />
      <input name="to" placeholder="To" />

      <button className="bg-[#3470FF] px-3 py-2">search</button>
    </form>
  );
};

export default SearchForm;
