// import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import DonationsItem from "../../DonationsItems/DonationsItem";
import Header from "../../Header/Header";

const Home = () => {
  const donationContainer = useLoaderData();
  // const [donationItems, setDonationItems] = useState([]);

  // setDonationItems(donationContainer);

  // console.log(donationItems);
  return (
    <>
     <Header></Header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
