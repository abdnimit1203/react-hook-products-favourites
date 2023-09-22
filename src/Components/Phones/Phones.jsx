import PhonesCard from "./PhonesCard";
import PropTypes from 'prop-types';


const Phones = ({phones}) => {
    console.log(phones);
    return (
        <div className="flex flex-col justify-center items-center gap-y-4 py-6">
            <h2 className='text-4xl w-fit text-secondary font-bold py-4 border-4 border-blue-300 rounded-xl p-4'>All categories phone</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
                {
                    phones?.slice(0,10).map(phone => <PhonesCard key={phone.id} phone={phone} ></PhonesCard> )
                }
            </div>
        </div>
    );
};
Phones.propTypes = {
    phones: PropTypes.array.isRequired
}

export default Phones;