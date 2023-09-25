import { Link, NavLink } from "react-router-dom";
// import logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="">
      <nav className="z-50 flex justify-between items-center max-w-6xl mx-auto py-5 px-6">
      <div className="logo">
          <Link to="/">
            <img className="w-44" src={'https://i.ibb.co/StdQbJ4/Logo.png'} alt="" />
          </Link>
        </div>
        <ul className="md:flex items-center gap-5 hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] border-b border-[#FF444A] font-bold" : ""
              }
            >
             Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] border-b border-[#FF444A] font-bold" : ""
              }
            >
             Donation
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] border-b border-[#FF444A] font-bold" : ""
              }
            >
             Statistics
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
