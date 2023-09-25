// import Navbar from "./Navbar/Navbar";
// import banner from "../../../assets/hero.png";

const Header = () => {
  const bannerBackground = {
    background: `linear-gradient(rgba(255, 255, 255, 0.95),rgba(255, 255, 255, 0.95)),url(https://i.ibb.co/sbqscqM/hero.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    // minHeight: '100vh'
  };
  return (
    <>
      <header
        className="relative flex justify-center items-center min-h-[600px] px-6 lg:px-0 md:max-h-screen"
        style={bannerBackground}
      >
        
        <div className="banner-section">
          <h1 className="text-4xl text-center font-bold">
            I Grow By Helping People In Need
          </h1>
          <div className="">
            <label className="input-group sm:flex-row justify-center items-center mt-6">
              <input
                type="text"
                placeholder="Search here...."
                className="input input-bordered  rounded-r-none border-r-0 focus:outline-none"
              />
              <button className="btn bg-[#FF444A] hover:bg-rose-500 text-white">
                Search
              </button>
            </label>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
