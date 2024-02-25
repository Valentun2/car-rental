import React, { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Catalog } from "../page/Catalog";
import { Favorite } from "../page/Favorite";
import { HomePage } from "../page/HomePage";
import { Layout } from "./Layout";
import { useAppDispatch } from "../redux/store";
import { fetchCars } from "../redux/operations";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCars(1));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/rental" element={<Catalog />} />
        <Route path="/favorite" element={<Favorite />} />
      </Route>
    </Routes>
  );
}

export default App;
