import { FaHotel, FaShieldAlt, FaHeadset, FaTags } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaHotel size={35} />,
      title: "500+ Hotels",
      text: "Choose from premium hotels across India.",
    },
    {
      icon: <FaTags size={35} />,
      title: "Best Price",
      text: "Affordable prices with exclusive offers.",
    },
    {
      icon: <FaShieldAlt size={35} />,
      title: "Secure Booking",
      text: "100% safe and trusted booking experience.",
    },
    {
      icon: <FaHeadset size={35} />,
      title: "24/7 Support",
      text: "Our team is always ready to help you.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="text-center text-4xl font-bold">
        Why Choose StayFinder?
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-4">

        {features.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border p-8 text-center shadow hover:-translate-y-2 hover:shadow-xl duration-300"
          >
            <div className="mb-5 flex justify-center text-blue-600">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {item.title}
            </h3>

            <p className="mt-3 text-gray-500">
              {item.text}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default WhyChooseUs;