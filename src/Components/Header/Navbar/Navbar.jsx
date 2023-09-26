import { Link, NavLink } from "react-router-dom";
import { HiMenu } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu,setMobileMenu] = useState(false);
  console.log(mobileMenu)
  return (
    <div className="">
      <nav className="z-50 flex justify-between items-center max-w-6xl mx-auto py-5 px-6">
      <div className="logo">
          <Link to="/">
            <img className="w-44" src={'https://i.ibb.co/StdQbJ4/Logo.png'} alt="" />
          </Link>
        </div>
        <ul className={`sm:flex items-center gap-5  flex-row absolute left-1/2 -translate-x-1/2 sm:-translate-x-0  top-24 sm:left-0 sm:top-0 sm:static ${mobileMenu ? 'flex' : 'hidden'}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] border-b border-[#FF444A] " : ""
              }
            >
             Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] border-b border-[#FF444A]" : ""
              }
            >
             Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] border-b border-[#FF444A]" : ""
              }
            >
             Statistics
            </NavLink>
          </li>
        </ul>
        <div className="text-3xl cursor-pointer block  sm:hidden" onClick={() => setMobileMenu(!mobileMenu)}>
       {
        mobileMenu ? <GrFormClose></GrFormClose> : <HiMenu ></HiMenu>
       }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
