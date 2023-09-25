import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SingleDonationCard = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const Cards = useLoaderData();
  const [donationDetails, setDonationDetails] = useState({});
  // console.log(id,donationCards)
  useEffect(() => {
    const findDonationCard = Cards.find((card) => card.id === idInt);
    // console.log(Cards,id,findDonationCard)
    setDonationDetails(findDonationCard);
  }, []);

  const overlyColor = {
    background: "rgba(11, 11, 11, 0.50)",
    width: "100%",
    padding: "20px",
    // height : '70px'
  };
  return (
    <>
      <div className="max-w-6xl mt-24 mx-auto">
        <figure className="w-full relative overflow-hidden rounded-md">
          <img
            src={donationDetails.image}
            className=" w-full max-h-[500px] object-cover"
            alt=""
          />
          <div className="absolute bottom-0 left-0" style={overlyColor}>
            <button
              style={{ background: `${donationDetails.text_button_bg}` }}
              className="btn text-white border-0"
            >
              Donate ${donationDetails.price}
            </button>
          </div>
        </figure>
        <div className="my-12">
          <h1 className="text-2xl font-bold">{donationDetails.title}</h1>
          <p className="my-3">{donationDetails.description}</p>
        </div>
      </div>
    </>
  );
};

export default SingleDonationCard;
