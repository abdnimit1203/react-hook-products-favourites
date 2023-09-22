import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const PhoneCard = ({ phone }) => {
  const {id, brand, title, thumbnail } = phone;

  const handleAddToFavorite = () => {
    const addedFavArray = [];

    const favouriteItem = JSON.parse(localStorage.getItem("favorites"));
    if (!favouriteItem) {
      addedFavArray.push(phone);
      localStorage.setItem('favorites',JSON.stringify(addedFavArray)  )
    }else{

        const isExists = favouriteItem.find(phone=>phone.id == id)
        if(!isExists){
           
            addedFavArray.push(...favouriteItem,phone)
            localStorage.setItem('favorites',JSON.stringify(addedFavArray))
            Swal.fire({
                color: 'green',
                timer: 4000,
                title: 'Yeah Added',
                text: 'Success',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }else{
            Swal.fire({
                color: 'red',
                timer: 4000,
                title: 'Already Added',
                text: 'OPPS!',
                icon: 'error',
                confirmButtonText: 'NOOOOO'
              })
        }

        }
        
  };
  return (
    <div className="py-4 h-full flex justify-center">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md h-full">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={thumbnail}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {brand}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>

          <Link>
            <button
              onClick={handleAddToFavorite}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Add To Favorites
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
PhoneCard.propTypes = {
    phone: PropTypes.object.isRequired
}

export default PhoneCard;
