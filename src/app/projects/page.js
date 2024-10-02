"use client"; // Ensures the component is rendered on the client side

import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from next/link

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
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Example Project 1 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">
              Project Title 1
            </h2>
            <p className="text-gray-400">
              Brief description of project 1. Highlight key features and
              technologies used.
            </p>
            <a
              href="https://linktoyourproject1.com"
              className="text-blue-400 hover:underline"
            >
              View Project
            </a>
          </div>
          {/* Example Project 2 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">
              Project Title 2
            </h2>
            <p className="text-gray-400">
              Brief description of project 2. Highlight key features and
              technologies used.
            </p>
            <a
              href="https://linktoyourproject2.com"
              className="text-blue-400 hover:underline"
            >
              View Project
            </a>
          </div>
          {/* Example Project 3 */}
          <div className="bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-white">
              Project Title 3
            </h2>
            <p className="text-gray-400">
              Brief description of project 3. Highlight key features and
              technologies used.
            </p>
            <a
              href="https://linktoyourproject3.com"
              className="text-blue-400 hover:underline"
            >
              View Project
            </a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </div>
      {/* Back button at the bottom right */}
      <Link href="/" className="absolute bottom-4 right-4">
        <button className="bg-gradient-to-r from-blue-500 to-teal-500 text-white font-bold py-2 px-4 rounded">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
