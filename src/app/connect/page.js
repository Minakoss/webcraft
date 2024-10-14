"use client"; // Ensure the component is rendered on the client side

import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from next/link
import Header from "../components/Header";

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

  // State for fade-in effect
  const [isVisible, setIsVisible] = useState(false);

  // For success and error messages
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Enable the fade-in effect after a short delay
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Send form data to Web3Forms
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "53eb1724-9fcc-4b94-b78b-01c0318bdde8",
        ...formData,
      }),
    });

    const result = await res.json();

    if (result.success) {
      setSuccessMessage("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
        websiteType: "",
        projectDetails: "",
      });
    } else {
      setErrorMessage("Oops! Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className={`min-h-screen text-light-gray p-4 md:p-8 relative transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`} // Add fade-in effect
      style={gradientStyle} // Apply the gradient background
    >
      <Header />
      <h1 className="text-3xl md:text-4xl font-bold text-white text-center mt-8 md:mt-0">
        WebBlend Connect
      </h1>

      <p className="text-md md:text-lg text-gray-400 mb-6 text-center mt-4 md:mt-0">
        Please fill out the form below to get in touch or to request a quote for
        your website project.
      </p>

      {/* Form container */}
      <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg">
        {successMessage && (
          <p className="text-green-500 text-center mb-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center mb-4">{errorMessage}</p>
        )}
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
              <option value="Content Management">Content management</option>
              <option value="Social Content/Management">
                Social content/management
              </option>
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
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
      {/* Back button */}
      <Link
        href="/"
        className="fixed bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <span className="px-4 py-2 text-[#66E0FF] rounded-full hover:underline">
          Back to home
        </span>
      </Link>
    </div>
  );
}
