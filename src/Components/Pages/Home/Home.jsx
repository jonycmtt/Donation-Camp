// import { useState } from "react";

import Header from "../../Header/Header";
import DonationsItem from "../../DonationsItems/DonationsItem";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const donationContainer = useLoaderData();
  // const [donationItems, setDonationItems] = useState([]);

  // setDonationItems(donationContainer);

  // console.log(donationItems);
  return (
    <>
     <Header></Header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {donationContainer.map((donations) => (
          <DonationsItem
            key={donations.id}
            donations={donations}
          ></DonationsItem>
        ))}
      </div>
    </>
  );
};

export default Home;
