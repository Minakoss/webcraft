// components/Header.js
"use client"; // Ensures it runs on the client-side

import { useRouter } from "next/navigation";
import { FaGlobe } from "react-icons/fa";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { useState } from "react";

const Header = () => {
  const router = useRouter(); // Use next/navigation's useRouter

  const [language, setLanguage] = useState("en"); // Default language: English
  // Toggle language
  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "gr" : "en"));
  };

  return (
    <div className="absolute top-4 right-4 flex space-x-4">
      {/* Login Icon */}
      <button onClick={() => router.push("/login")}>
        <FiLogIn className="text-xl text-gray-400" />
      </button>

      {/* Register Icon */}
      <button onClick={() => router.push("/register")}>
        <FiUserPlus className="text-xl text-gray-400" />
      </button>

      {/* Language Toggle */}
      <button onClick={toggleLanguage}>
        <FaGlobe className="text-xl text-gray-400" />
      </button>
    </div>
  );
};

export default Header;
