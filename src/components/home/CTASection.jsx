import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <h2 className="text-4xl font-bold text-white">
          Ready For Your Next Stay?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
          Explore premium hotels, compare prices, and book your perfect stay
          with StayFinder.
        </p>

        <Link
          to="/contact"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition duration-300 hover:bg-gray-100"
        >
          Contact Us
        </Link>

      </div>
    </section>
  );
};

export default CTASection;