import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

    
      <div className="overflow-hidden"> 
        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          className="h-60 w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      
      <div className="p-5"> 

        
        <div className="flex items-center justify-between">

          <h2 className="text-xl font-semibold">
            {hotel.name}
          </h2>

          <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-sm">
            <FaStar className="text-yellow-500" />
            {hotel.rating}
          </span>

        </div>

        
        <p className="mt-3 flex items-center gap-2 text-gray-500">
          <FaMapMarkerAlt className="text-red-500" />
          {hotel.location}
        </p>

        
        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-2xl font-bold text-blue-600">
              ₹{Math.floor(hotel.price)}
            </p>

            <span className="text-sm text-gray-500">
              per night
            </span>
          </div>

          <Link
            to={`/hotel/${hotel.id}`}
            state={hotel}
            className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
};

export default HotelCard;