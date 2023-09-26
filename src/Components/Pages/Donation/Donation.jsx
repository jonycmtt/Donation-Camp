import { useEffect, useState } from "react";
import DonationSingleItem from "./DonationItem/DonationSingleItem";

const Donation = () => {
  const [donationItem, setDonationItem] = useState([4]);
  const [notFound, setNotFound] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    const getDonationCard = JSON.parse(localStorage.getItem("donation"));
    if (getDonationCard) {
      setDonationItem(getDonationCard);
    } else {
      setNotFound("No Data Found!");
    }
  }, []);

  return (
    <div className="max-w-6xl mt-36 sm:mt-32 mx-auto">
      {notFound ? (
        <p className="h-[400px] flex justify-center items-center text-4xl font-bold">
          {notFound}
        </p>
      ) : (
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
          {seeMore
            ? donationItem.map((donationItem) => (
                <DonationSingleItem
                  key={donationItem.id}
                  donationItem={donationItem}
                ></DonationSingleItem>
              ))
            : donationItem
                .slice(0, 4)
                .map((donationItem) => (
                  <DonationSingleItem
                    key={donationItem.id}
                    donationItem={donationItem}
                  ></DonationSingleItem>
                ))}
        </div>
      )}
      {donationItem.length > 4 && (
        <div className="my-8">
          <button
            onClick={() => setSeeMore(!seeMore)}
            className={`btn text-white bg-[#009444] hover:bg-green-600 block mx-auto ${
              seeMore ? "hidden" : ""
            }`}
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
