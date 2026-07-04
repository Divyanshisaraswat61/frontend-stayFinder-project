import { useNavigate } from "react-router-dom";
import { FaSearch, FaCalendarAlt, FaUserFriends, FaBed } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
const SearchBar = () => {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    rooms: 1,
  });
const [locations, setLocations] = useState([]);
const [suggestions, setSuggestions] = useState([]);


useEffect(() => {
  fetchLocations();
}, []);

const fetchLocations = async () => {
  try {
    const res = await axios.get(
      "https://demohotelsapi.pythonanywhere.com/hotels/"
    );

    const uniqueLocations = [
      ...new Set(res.data.data.map((hotel) => hotel.location)),
    ];

    setLocations(uniqueLocations);
  } catch (error) {
    console.log(error);
  }
};

 const handleChange = (e) => {
  const { name, value } = e.target;

  setSearchData({
    ...searchData,
    [name]: value,
  });

  if (name === "location") {
    const filtered = locations.filter((city) =>
      city.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filtered);
  }
};


 const handleSearch = () => {
  if (!searchData.location.trim()) {
    toast.error("Please enter a destination");
    return;
  }

  if (!searchData.checkIn) {
    toast.error("Please select Check In date");
    return;
  }

  if (!searchData.checkOut) {
    toast.error("Please select Check Out date");
    return;
  }

  if (new Date(searchData.checkOut) <= new Date(searchData.checkIn)) {
    toast.error("Check Out date must be after Check In date");
    return;
  }

  if (searchData.guests < 1) {
    toast.error("Guests should be at least 1");
    return;
  }

  if (searchData.rooms < 1) {
    toast.error("Rooms should be at least 1");
    return;
  }

 
  toast.success("Searching hotels...");

setSuggestions([]);

  navigate("/hotels", {
    state: {
      ...searchData,
      location: searchData.location.trim(),
    },
  });
};
  return (
    <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 rounded-2xl bg-white p-5 shadow-2xl md:grid-cols-6">

      
      <div className="relative">
  <p className="mb-2 text-sm font-semibold">Destination</p>

  <div className="flex items-center gap-2 rounded-lg border p-3">
    <IoLocationSharp className="text-blue-600" />

    <input
      type="text"
      name="location"
      placeholder="Where are you going?"
      value={searchData.location}
      onChange={handleChange}
      className="w-full outline-none"
    />
  </div>

  {suggestions.length > 0 && searchData.location.trim() !== "" && (
    <div className="absolute left-0 right-0 z-50 mt-1 max-h-52 overflow-y-auto rounded-lg border bg-white shadow-lg">

      {suggestions.map((city, index) => (
        <div
          key={index}
          onClick={() => {
            setSearchData({
              ...searchData,
              location: city,
            });

            setSuggestions([]);
          }}
          className="cursor-pointer px-4 py-3 hover:bg-blue-100"
        >
           {city}
        </div>
      ))}

    </div>
  )}
</div>

      
      <div>
        <p className="mb-2 text-sm font-semibold">Check In</p>

        <div className="flex items-center gap-2 rounded-lg border p-3">
          <FaCalendarAlt className="text-blue-600" />

          <input
            type="date"
            name="checkIn"
            value={searchData.checkIn}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>
      </div>

     
      <div>
        <p className="mb-2 text-sm font-semibold">Check Out</p>

        <div className="flex items-center gap-2 rounded-lg border p-3">
          <FaCalendarAlt className="text-blue-600" />

          <input
            type="date"
            name="checkOut"
            value={searchData.checkOut}
            onChange={handleChange}
            className="w-full outline-none"
          />
        </div>
      </div>

   
<div>
  <p className="mb-2 text-sm font-semibold">Guests</p>

  <div className="flex items-center gap-2 rounded-lg border p-3">
    <FaUserFriends className="text-blue-600" />

    <button
      type="button"
      onClick={() =>
        setSearchData({
          ...searchData,
          guests: Math.max(1, Number(searchData.guests) - 1),
        })
      }
      className="rounded bg-gray-200 px-2 hover:bg-gray-300"
    >
      -
    </button>

    <span className="w-8 text-center font-semibold">
      {searchData.guests}
    </span>

    <button
      type="button"
      onClick={() =>
        setSearchData({
          ...searchData,
          guests: Number(searchData.guests) + 1,
        })
      }
      className="rounded bg-gray-200 px-2 hover:bg-gray-300"
    >
      +
    </button>
  </div>
</div>


    
<div>
  <p className="mb-2 text-sm font-semibold">Rooms</p>

  <div className="flex items-center gap-2 rounded-lg border p-3">
    <FaBed className="text-blue-600" />

    <button
      type="button"
      onClick={() =>
        setSearchData({
          ...searchData,
          rooms: Math.max(1, Number(searchData.rooms) - 1),
        })
      }
      className="rounded bg-gray-200 px-2 hover:bg-gray-300"
    >
      -
    </button>

    <span className="w-8 text-center font-semibold">
      {searchData.rooms}
    </span>

    <button
      type="button"
      onClick={() =>
        setSearchData({
          ...searchData,
          rooms: Number(searchData.rooms) + 1,
        })
      }
      className="rounded bg-gray-200 px-2 hover:bg-gray-300"
    >
      +
    </button>
  </div>
</div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        <FaSearch />
        Search
      </button>

    </div>
  );
};

export default SearchBar;