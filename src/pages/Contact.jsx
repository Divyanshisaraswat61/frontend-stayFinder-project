import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaRegCommentDots,
  FaClock,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!form.email.trim()) {
      toast.error("Please enter your email");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!form.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    toast.success("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-7xl px-6">

          <h1 className="text-center text-5xl font-bold">
            Contact Us
          </h1>

          <p className="mt-4 text-center text-gray-500">
            We'd love to hear from you. Feel free to contact us anytime.
          </p>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">

            {/* Left */}

            <div className="space-y-8 rounded-2xl bg-white p-8 shadow-lg">

              <div className="flex items-center gap-5">
                <div className="rounded-full bg-blue-100 p-4">
                  <FaPhoneAlt className="text-xl text-blue-600" />
                </div>

                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-500">
                    +91 9876543210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="rounded-full bg-blue-100 p-4">
                  <FaEnvelope className="text-xl text-blue-600" />
                </div>

                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-500">
                    support@stayfinder.com
                  </p>
                </div>
              </div>

           <div className="flex items-center gap-5">
  <div className="rounded-full bg-blue-100 p-4">
    <FaMapMarkerAlt className="text-xl text-blue-600" />
  </div>

  <div>
    <h3 className="font-bold">Head Office</h3>
    <p className="text-gray-500">
   
Noida, Uttar Pradesh, India
    </p>
  </div>
</div>

              <div className="flex items-center gap-5">
                <div className="rounded-full bg-blue-100 p-4">
                  <FaClock className="text-xl text-blue-600" />
                </div>

                <div>
                  <h3 className="font-bold">Working Hours</h3>
                  <p className="text-gray-500">
                    Mon - Sat : 9 AM - 6 PM
                  </p>
                </div>
              </div>

<button
  type="button"
  onClick={() => toast.info("We'll get back to you soon!")}
  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
>
  <FaRegCommentDots />
  Start Conversation
</button>
            </div>

            {/* Right */}

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-8 shadow-lg"
            >

              <div className="mb-5 flex items-center gap-3 rounded-lg border px-4 py-3">

                <FaUser className="text-blue-600" />

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full outline-none"
                />

              </div>

              <div className="mb-5 flex items-center gap-3 rounded-lg border px-4 py-3">

                <FaEnvelope className="text-blue-600" />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full outline-none"
                />

              </div>

              <div className="mb-5 flex gap-3 rounded-lg border px-4 py-3">

                <FaRegCommentDots className="mt-1 text-blue-600" />

                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full resize-none outline-none"
                ></textarea>

              </div>

              <button
                className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;