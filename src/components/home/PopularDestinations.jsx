const places = [
  {
    id: 1,
    name: "Goa",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
  },
  {
    id: 2,
    name: "Jaipur",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245",
  },
  {
    id: 3,
    name: "Manali",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
  },
  {
    id: 4,
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
  },
];

const PopularDestinations = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <h2 className="text-4xl font-bold text-center">
        Popular Destinations
      </h2>

      <p className="text-center text-gray-500 mt-3">
        Discover India's most loved destinations.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-12">

        {places.map((place) => (
          <div
            key={place.id}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={place.image}
              alt={place.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold">
                {place.name}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default PopularDestinations;