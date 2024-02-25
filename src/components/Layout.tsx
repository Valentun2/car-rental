import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header className="bg-[#000080] p-4">
        <nav className="font-medium text-white ">
          <Link to="/" className="mr-6">
            Home
          </Link>
          <Link to="/rental" className="mr-6">
            Rental
          </Link>
          <Link to="/favorite">Favorite</Link>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
