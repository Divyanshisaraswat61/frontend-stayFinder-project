import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/layout/Navbar";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../redux/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import {
  FaHeart,
  FaStar,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Hotels = () => {
  const location = useLocation();
  const searchData = location.state;

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const handleWishlist = (hotel) => {
    dispatch(addToWishlist(hotel));
    toast.success("Added to Wishlist");
  };

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        let url = "https://demohotelsapi.pythonanywhere.com/hotels/";

        if (searchData?.location) {
          url += `?location=${searchData.location}`;
        }

        const res = await axios.get(url);
        setHotels(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHotels();
  }, [searchData]);

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="flex h-[70vh] items-center justify-center">
          <h2 className="text-3xl font-semibold">
            Loading Hotels...
          </h2>
        </div>
      </>
    );
  }

  if (hotels.length === 0) {
    return (
      <>
        <Navbar />

        <div className="flex h-[70vh] items-center justify-center">
          <h2 className="text-3xl font-semibold">
            {searchData?.location
              ? `No Hotels Found in ${searchData.location}`
              : "No Hotels Found"}
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-28">

        <h1 className="text-4xl font-bold">
          {searchData?.location
            ? `Hotels in ${searchData.location}`
            : "Explore Hotels"}
        </h1>

        <p className="mt-2 text-gray-500">
          {hotels.length} Hotels Available
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">

          {hotels.map((hotel) => (

            <div
              key={hotel.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <img
                src={hotel.thumbnail}
                alt={hotel.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">

                <div className="flex items-center justify-between">

                  <h2 className="text-xl font-bold">
                    {hotel.name}
                  </h2>

                  <FaHeart
                    size={20}
                    onClick={() => handleWishlist(hotel)}
                    className="cursor-pointer text-gray-400 transition hover:scale-110 hover:text-red-500"
                  />

                </div>

                <div className="mt-3 flex items-center gap-2 text-gray-500">

                  <FaMapMarkerAlt className="text-red-500" />
                  <span>{hotel.location}</span>

                </div>

                <div className="mt-2 flex items-center gap-2">

                  <FaStar className="text-yellow-500" />
                  <span>{hotel.rating}</span>

                </div>

                <p className="mt-4 text-sm text-gray-600">
                  {hotel.description.slice(0, 100)}...
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <h3 className="text-2xl font-bold text-blue-600">
                    ₹{Math.round(hotel.price)}
                  </h3>

                  <Link
                    to={`/hotel/${hotel.id}`}
                    state={hotel}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                  >
                    View Details
                    <FaArrowRight />
                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
};

export default Hotels;