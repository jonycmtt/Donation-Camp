import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

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

  const handleDonate = () =>{
    const donationCard = [];
    const getDonationCard = JSON.parse(localStorage.getItem('donation'));

    if(!getDonationCard) {
        donationCard.push(donationDetails);
        localStorage.setItem('donation', JSON.stringify(donationCard));
        swal("Good job!", "Donation Added Successful!", "success");
    } else {
        const isExits = getDonationCard.find((card) => card.id === idInt);

        if(isExits) {
          return  swal("Ops!", "Donation Duplicated!", "error");
        }
        donationCard.push(...getDonationCard,donationDetails);
        localStorage.setItem('donation',JSON.stringify(donationCard));
        swal("Good job!", "Donation Added Successful!", "success");
    }
  }
  const overlyColor = {
    background: "rgba(11, 11, 11, 0.50)",
    width: "100%",
    padding: "20px",
    // height : '70px'
  };
  return (
    <>
      <div className="max-w-6xl mt-36 sm:mt-24  mx-auto">
        <figure className="w-full relative overflow-hidden rounded-md">
          <img
            src={donationDetails.image}
            className=" w-full max-h-[500px] object-cover"
            alt=""
          />
          <div className="absolute bottom-0 left-0" style={overlyColor}>
            <button onClick={handleDonate}
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
