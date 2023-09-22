import Rating from "react-rating";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PhonesCard = ({ phone }) => {
  const { id, title, brand, rating, images, price } = phone || {};
  return (
    <div className="mx-auto">
      <div className="relative max-w-lg flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-44 w-44 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={images[0]} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {title}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              $ {price}
            </p>
          </div>
          <p className="block font-sans text-sm font-black leading-normal text-gray-700 antialiased opacity-75">
            {brand}
          </p>
          <p className="block font-sans text-sm font-normal py-2 leading-normal text-gray-700 antialiased opacity-75">
            {rating}
          </p>

          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            readOnly
          />
        </div>
        <div className="p-6 pt-0">
          <Link to={`/phones/${id}`}>
            <button
              className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn-primary"
              type="button"
            >
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
PhonesCard.propTypes = {
    phone: PropTypes.object.isRequired
}

export default PhonesCard;
