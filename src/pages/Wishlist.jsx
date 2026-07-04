import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlist/wishlistSlice";
import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Navbar from "../components/layout/Navbar";
import { toast } from "react-toastify";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
    toast.success("Removed from Wishlist");
  };

  if (wishlist.length === 0) {
    return (
      <>
        <Navbar />

        <div className="flex h-[70vh] items-center justify-center">
          <h2 className="text-3xl font-bold">
            Your Wishlist is Empty 
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 py-28">

        <h1 className="mb-10 text-4xl font-bold">
          My Wishlist
        </h1>

        <div className="grid gap-8 md:grid-cols-3">

          {wishlist.map((hotel) => (

            <div
              key={hotel.id}
              className="overflow-hidden rounded-2xl bg-white shadow-lg"
            >

              <img
                src={hotel.thumbnail}
                alt={hotel.name}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold">
                  {hotel.name}
                </h2>

                <div className="mt-3 flex items-center gap-2 text-gray-600">
                  <FaMapMarkerAlt className="text-red-500" />
                  {hotel.location}
                </div>

                <div className="mt-2 flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  {hotel.rating}
                </div>

                <h3 className="mt-4 text-2xl font-bold text-blue-600">
                  ₹{Math.round(hotel.price)}
                </h3>

                <button
                  onClick={() => handleRemove(hotel.id)}
                  className="mt-5 flex items-center gap-2 rounded-lg bg-red-500 px-5 py-2 text-white hover:bg-red-600"
                >
                  <FaHeart />
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </>
  );
};

export default Wishlist;