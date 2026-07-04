import { Link } from "react-router-dom";

const LuxuryBanner = () => {
  return (
    <section
      className="relative my-20 h-[450px] w-full bg-cover bg-center"
     style={{
  backgroundImage:
    "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80')",
}}
    >
     
      <div className="absolute inset-0 bg-black/60"></div>

      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        <p className="mb-3 uppercase tracking-[5px] text-yellow-400">
          Luxury Experience
        </p>

        <h2 className="max-w-3xl text-4xl font-bold text-white md:text-6xl">
          Your Dream Vacation Starts Here
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-gray-200">
          Book premium hotels at the best prices and enjoy a memorable stay
          with world-class comfort.
        </p>

        <Link
          to="/"
          className="mt-8 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Book Your Stay
        </Link>

      </div>
    </section>
  );
};

export default LuxuryBanner;