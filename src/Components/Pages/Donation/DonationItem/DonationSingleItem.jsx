import { Link } from "react-router-dom";

const DonationSingleItem = ({ donationItem }) => {
  console.log(donationItem);
  return (
    <>
      <div style={{background : `${donationItem.card_bg}`}} className="relative flex w-full flex-col sm:flex-row text-gray-700 rounded-md">
        <div className="relative m-0 w-full sm:w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={donationItem.image}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="px-6 py-4">
          <h6 className=" block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            <span
              style={{
                background: `${donationItem.category_bg}`,
                color: `${donationItem.text_button_bg}`,
              }}
              className="btn btn-sm my-1 text-sm"
            >
              {donationItem.category}
            </span>
          </h6>
          <h4 className="mblock font-sans text-2xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {donationItem.title}
          </h4>
          <p className=" my-2 block  text-lg font-bold leading-relaxed text-gray-700 antialiased">
            ${donationItem.price}.00
          </p>
          <Link to={`/donationCard/${donationItem.id}`}>
              <button style={{background : `${donationItem.text_button_bg}`}} className="btn btn-sm text-white">View Details</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default DonationSingleItem;
