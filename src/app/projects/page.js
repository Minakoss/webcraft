"use client"; // Προσθέτουμε αυτό για να το κάνουμε Client Component

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Projects() {
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

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.002), rgba(10, 25, 47, 1) 50%), rgba(10, 25, 47, 0.9)`,
  };

  return (
    <div
      className="min-h-screen text-light-gray p-4 md:p-8"
      style={gradientStyle}
    >
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          WebCraft Projects
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
              </div>
            </div>
          </div>
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
                  Bootstrap
                </span>
                <span className="px-3 py-1 bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md">
                  Animate CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link href="/" className="fixed bottom-4 right-4">
        <span className="px-4 py-2 text-[#66E0FF] rounded-full hover:underline">
          Back to home
        </span>
      </Link>
    </div>
  );
}
