import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import {
  FaHeart,
  FaStar,
  FaMapMarkerAlt,
  FaArrowLeft,
} from "react-icons/fa";

import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/wishlist/wishlistSlice";
import { toast } from "react-toastify";

const HotelDetails = () => {
  const location = useLocation();
  const hotel = location.state;

  const dispatch = useDispatch();

  const handleWishlist = () => {
    dispatch(addToWishlist(hotel));
    toast.success("Added to Wishlist");
  };

  if (!hotel) {
    return (
      <>
        <Navbar />

        <div className="flex h-screen items-center justify-center">
          <h2 className="text-3xl font-bold">
            Hotel data not found.
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-28">

        {/* Back Button */}

        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-blue-600 transition hover:text-blue-700"
        >
          <FaArrowLeft />
          Back
        </Link>

        <div className="grid gap-10 md:grid-cols-2">

          {/* Left Image */}

          <img
            src={hotel.thumbnail}
            alt={hotel.name}
            className="h-[500px] w-full rounded-2xl object-cover shadow-lg"
          />

          {/* Right Side */}

          <div>

            <div className="flex items-center justify-between">

              <h1 className="text-4xl font-bold">
                {hotel.name}
              </h1>

              <FaHeart
                size={24}
                onClick={handleWishlist}
                className="cursor-pointer text-gray-400 transition duration-300 hover:scale-110 hover:text-red-500"
              />

            </div>

            <div className="mt-5 flex items-center gap-2">

              <FaStar className="text-yellow-500" />

              <span className="text-lg">
                {hotel.rating}
              </span>

            </div>

            <div className="mt-4 flex items-center gap-2 text-gray-600">

              <FaMapMarkerAlt className="text-red-500" />

              <span>{hotel.location}</span>

            </div>

            <h2 className="mt-6 text-4xl font-bold text-blue-600">
              ₹{Math.round(hotel.price)}

              <span className="text-lg font-normal text-gray-500">
                {" "}
                / Night
              </span>

            </h2>

            <p className="mt-8 leading-8 text-gray-600">
              {hotel.description}
            </p>

            <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
              Book Now
            </button>

          </div>

        </div>

        {/* Gallery */}

        <div className="mt-20">

          <h2 className="mb-8 text-3xl font-bold">
            Hotel Gallery
          </h2>

          <div className="grid gap-6 md:grid-cols-4">

            {hotel.photos.map((photo, index) => (

              <img
                key={index}
                src={photo}
                alt={`Hotel ${index + 1}`}
                className="h-56 w-full rounded-xl object-cover transition duration-300 hover:scale-105"
              />

            ))}

          </div>

        </div>

      </div>
    </>
  );
};

export default HotelDetails;