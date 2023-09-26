// import { useState } from "react";

import { useEffect, useState } from "react";
import DonationsItem from "../../DonationsItems/DonationsItem";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const donationContainer = useLoaderData();
  const [inputValue,setInputValue] = useState('');
  const [displayItem,setDisplayItem] = useState([]);
  // const [errorMessage,setErrorMessage] = useState('');


  // setDisplayItem(donationContainer);
   useEffect(() => {
      const loadData = donationContainer;
      setDisplayItem(loadData)
  },[donationContainer])
  const bannerBackground = {
    background: `linear-gradient(rgba(255, 255, 255, 0.95),rgba(255, 255, 255, 0.95)),url(https://i.ibb.co/sbqscqM/hero.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };


  const handleSearch = (e) => {
    e.preventDefault();
    // console.log(inputValue);
   const searchValue= donationContainer.filter(items => items.category === inputValue);
  //  console.log(searchValue)
  if(searchValue.length > 0) {
    setDisplayItem(searchValue)
  } else {
     return toast("Search results are empty!");
  }
  


   
  };
  const handleInputText = e => {
    // console.log(e.target.value);
    setInputValue(e.target.value)
  }
  // console.log(inputValue)
  return (
    <>
      <header
        className="relative flex justify-center items-center min-h-[500px] px-6 lg:px-0 md:max-h-screen"
        style={bannerBackground}
      >
        <div className="banner-section">
          <h1 className="text-4xl text-center font-bold">
            I Grow By Helping People In Need 
          </h1>
          <div className="">
            <form onSubmit={handleSearch}>
              <label className="input-group sm:flex-row justify-center items-center mt-6">
                <input onChange={handleInputText}
                  id="input-Field"
                  type="text" name="text"
                  placeholder="Search here...."
                  className="input input-bordered  rounded-r-none border-r-0 focus:outline-none"
                />
                <button className="btn bg-[#FF444A] hover:bg-rose-500 text-white">
                  Search
                </button>
              </label>
            </form>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto my-12">
        {displayItem.map((donations) => (
          <DonationsItem
            key={donations.id}
            donations={donations}
          ></DonationsItem>
        ))}
        
      </div>
    <ToastContainer></ToastContainer>
    </>
  );
};

export default Home;
