import { useEffect, useState } from "react";
import { getHotels } from "../../services/hotelApi";
import HotelCard from "../common/HotelCard";

const FeaturedHotels = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      const data = await getHotels();
      setHotels(data.slice(0, 8));
    };

    fetchHotels();
  }, []);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-center text-blue-600 font-semibold tracking-[4px] uppercase">
          Featured Hotels
        </p>

        <h2 className="mt-3 text-center text-4xl font-bold">
          Handpicked Stays You'll Love
        </h2>

        <p className="mt-3 text-center text-gray-500">
          Explore our top-rated hotels with the best comfort and amenities.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedHotels;