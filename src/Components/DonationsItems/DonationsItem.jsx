import { Link } from "react-router-dom";

const DonationsItem = ({ donations }) => {
  const {
    card_bg,
    category,
    category_bg,
    id,
    image,
    price,
    text_button_bg,
    title,
  } = donations;
  // const {}
  // console.log(donations);
  return (
    <>
      <Link to={`/donationCard/${id}`}>
      <div style={{background : `${card_bg}`}} className="card">
        <figure className="">
          <img className="w-full"
            src={image}
            alt="donation-img"
          />
        </figure>
        <div className="px-3 py-4">
          <span style={{background : `${category_bg}`,color : `${text_button_bg}`}} className="btn btn-sm my-1 text-sm">{category}</span>
          <h2 style={{color : `${text_button_bg}`}} className="text-lg font-semibold">{title}</h2>
        </div>
      </div>
      </Link>
    </>
  );
};

export default DonationsItem;
