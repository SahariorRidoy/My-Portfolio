import { useState } from "react";
import Typewriter from "typewriter-effect";
import animation from "../../../assets/contact.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please fill in all fields!",
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }

    // Show success alert
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "I will get back to you soon.",
      showConfirmButton: false,
      timer: 1500,

    });

    // Clear form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="max-w-[1320px] mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left */}
        <div className="flex justify-center">
          <Lottie
            animationData={animation}
            loop={true}
            className="w-[300px] md:w-[400px] lg:w-[400px]"
          />
        </div>

        {/* Right */}
        <div className="w-full max-w-[600px] px-6 md:px-0">
          <h2 className="text-3xl font-semibold text-white mb-6">
            <Typewriter
              options={{
                strings: ["Get in Touch", "Contact With Me"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 20,
              }}
            />
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full p-3 bg-green-500 text-white font-semibold rounded-lg cursor-pointer hover:bg-green-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
