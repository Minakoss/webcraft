// components/Footer.js
"use client"; // Ensure the component is rendered on the client side

import { FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full mt-8">
      <div className="container mx-auto text-center p-4 border-t-2 border-b-2 border-black">
        <p className="text-gray-400">© 2024 WebCraft. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaFacebookF size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
