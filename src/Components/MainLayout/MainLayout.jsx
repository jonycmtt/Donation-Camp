import { Outlet } from "react-router-dom";
// import Header from "../Header/Header";
import Navbar from "../Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="absolute top-0 w-full z-10">
        <Navbar></Navbar>
      </div>

      <div className="">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default MainLayout;
