"use client"; // Κάνουμε το component client-side

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Projects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false); // State για fade-in

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Ενεργοποίηση του fade-in όταν φορτώνει η σελίδα
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Μικρή καθυστέρηση

    // Καθαρισμός του event listener
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Ορισμός του στυλ για το gradient
  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.002), rgba(10, 25, 47, 1) 50%), rgba(10, 25, 47, 0.9)`,
  };

  return (
    <div
      className={`min-h-screen text-light-gray p-4 md:p-8 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`} // Προσθήκη fade-in
      style={gradientStyle}
    >
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          WebBlend Projects
        </h1>
        <div className="space-y-8">
          {/* Example Project 1 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col md:flex-row">
            <img
              src="/project_photos/grainlife.png"
              alt="Project 1"
              className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-white">Grain Life</h2>
              <p className="text-gray-400">Photo Gallery site</p>
              <a
                href="https://grainlife.gr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2"
              >
                View Project ↗
              </a>
              <div className="flex space-x-2 mt-4">
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  HTML
                </span>
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  CSS
                </span>
              </div>
            </div>
          </div>

          {/* Example Project 2 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col md:flex-row">
            <img
              src="/project_photos/wordin.png"
              alt="Project 1"
              className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-white">WordIn</h2>
              <p className="text-gray-400">
                WordIn is a creative communication platform dedicated to
                delivering clear, concise, and impactful content.
              </p>
              <a
                href="https://wordin.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2"
              >
                View Project ↗
              </a>
              <div className="flex space-x-2 mt-4">
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  React
                </span>
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  Animate CSS
                </span>
              </div>
            </div>
          </div>

          {/* Example Project 3 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col md:flex-row">
            <img
              src="/project_photos/helpanimals.png"
              alt="Project 1"
              className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-white">Help-Animals</h2>
              <p className="text-gray-400">
                Pet Help Site is a web application designed to provide
                resources, information, and services related to pet care and
                support.
              </p>
              <a
                href="https://animalshelp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2"
              >
                View Project ↗
              </a>
              <div className="flex space-x-2 mt-4">
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  React
                </span>
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  Animate CSS
                </span>
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  Tailwind
                </span>
              </div>
            </div>
          </div>

          {/* Example Project 4 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col md:flex-row">
            <img
              src="/project_photos/companypromo.png"
              alt="Project 1"
              className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-white">
                Company Promo Project
              </h2>
              <p className="text-gray-400">
                A promo company site made by Travercy Media
              </p>
              <a
                href="https://managesamplepromo.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2"
              >
                View Project ↗
              </a>
              <div className="flex space-x-2 mt-4">
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  HTML
                </span>
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  Tailwind
                </span>
              </div>
            </div>
          </div>

          {/* Example Project 5 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col md:flex-row">
            <img
              src="/project_photos/Analog-Life.png"
              alt="Project 1"
              className="w-full md:w-1/3 rounded-lg mb-4 md:mb-0 md:mr-4"
            />
            <div className="flex flex-col">
              <h2 className="text-xl font-semibold text-white">Analog-Life</h2>
              <p className="text-gray-400">Photo Gallery site</p>
              <a
                href="https://analog-life.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2"
              >
                View Project ↗
              </a>
              <div className="flex space-x-2 mt-4">
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  React
                </span>
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
