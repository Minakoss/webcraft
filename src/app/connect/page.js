"use client"; // Ensure the component is rendered on the client side

import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from next/link

export default function Connect() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    websiteType: "",
    projectDetails: "",
  });

  // Mouse position state for the background gradient effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Gradient effect based on mouse position
  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.002), rgba(10, 25, 47, 1) 50%), rgba(10, 25, 47, 0.9)`,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="min-h-screen text-light-gray p-4 md:p-8 relative"
      style={gradientStyle} // Apply the gradient background
    >
      <h1 className="text-2xl md:text-4xl font-bold text-white">Connect</h1>
      <p className="text-md md:text-lg text-gray-400 mb-6">
        We’d love to hear from you! Please fill out the form below to get in
        touch or to request a quote for your website project.
      </p>

      {/* Form container */}
      <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 text-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 text-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-gray-300" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 bg-gray-700 text-gray-300 rounded"
              rows="4"
            />
          </div>
          <div>
            <label className="block text-gray-300" htmlFor="websiteType">
              Type of Website
            </label>
            <select
              name="websiteType"
              id="websiteType"
              value={formData.websiteType}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-gray-300 rounded"
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="Personal Website">Personal Website</option>
              <option value="Business Website">Business Website</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Portfolio">Portfolio</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300" htmlFor="projectDetails">
              Project Details
            </label>
            <textarea
              name="projectDetails"
              id="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-gray-300 rounded"
              rows="4"
              placeholder="Provide any additional details about your project..."
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Back button at the bottom right */}
      <Link href="/" className="absolute bottom-4 right-4">
        <span className="px-4 py-2  text-[#66E0FF] rounded-full shadow-md hover:bg-[#0A2540]">
          Back to home
        </span>
      </Link>
    </div>
  );
}
