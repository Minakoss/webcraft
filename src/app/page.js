"use client"; // Ensure the code runs on the client-side

import { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Import Link from next/link
import { useRouter } from "next/navigation"; // Correct import for App Router
import Footer from "./components/Footer"; // Import Footer
import Head from "next/head";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaArrowDown,
} from "react-icons/fa";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isIntroVisible, setIntroVisible] = useState(true); // State για το intro
  const rightColumnRef = useRef(null); // Reference for the right column
  const router = useRouter(); // Use next/navigation's useRouter

  useEffect(() => {
    // Check if the user has already seen the intro in this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    if (!hasSeenIntro) {
      // If it's the user's first visit in this session, show the intro
      setIntroVisible(true);

      const introTimeout = setTimeout(() => {
        setIntroVisible(false);
        sessionStorage.setItem("hasSeenIntro", "true"); // Store flag in sessionStorage
      }, 1500);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        clearTimeout(introTimeout);
      };
    } else {
      // If intro has been seen, do not show it again for this session
      setIntroVisible(false);
    }
  }, []);

  // Function to handle the smooth scroll transition
  const handleSmoothTransition = (e, path) => {
    e.preventDefault();
    document.documentElement.style.scrollBehavior = "smooth"; // Apply smooth scroll
    setTimeout(() => {
      router.push(path); // Navigate to the new page after a slight delay
    }, 200); // Delay for smooth effect
  };

  // Function to scroll to the right column
  const scrollToRightColumn = () => {
    if (rightColumnRef.current) {
      rightColumnRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.002), rgba(10, 25, 47, 1) 50%), rgba(10, 25, 47, 0.9)`,
  };

  return (
    <div
      className="min-h-screen text-light-gray p-4 md:p-8"
      style={gradientStyle}
    >
      {/* Intro Section */}
      {isIntroVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#0A192F] z-50 animate-pixel-fade">
          <h1 className="text-6xl md:text-[8rem]  font-thin text-white animate-fade tracking-wide">
            WebBlend
          </h1>
        </div>
      )}

      <div
        className={`transition-opacity duration-1000 ${
          isIntroVisible ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Εδώ ξεκινάει το περιεχόμενο της σελίδας */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 container mx-auto">
          {/* Αριστερή στήλη */}
          <div className="flex flex-col justify-start space-y-4 md:sticky top-0 h-screen pt-20">
            <img
              src="/icons/code.png"
              alt="WebCraft Logo"
              className="w-32 h-32 md:w-30 md:h-30 mb-4 filter grayscale"
            />

            <h1 className="text-2xl md:text-4xl font-bold text-white">
              WebBlend
            </h1>
            <h2 className="text-md md:text-xl font-medium text-gray-300">
              front-end developer Services
            </h2>
            <p className="text-md text-gray-400">
              Building perfect, engaging, and accessible digital experiences.
            </p>

            {/* Μενού πλοήγησης */}
            <nav className="mt-4 md:mt-8">
              <ul className="space-y-6">
                <li className="group text-md font-medium text-gray-400 hover:text-white cursor-pointer">
                  <a
                    href="/projects"
                    onClick={(e) => handleSmoothTransition(e, "/projects")}
                  >
                    <span className="relative">
                      Projects
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-400 opacity-0 group-hover:opacity-100 group-hover:h-[2px] transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
                <li className="group text-md font-medium text-gray-400 hover:text-white cursor-pointer">
                  <a
                    href="/connect"
                    onClick={(e) => handleSmoothTransition(e, "/connect")}
                  >
                    <span className="relative">
                      Connect
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-400 opacity-0 group-hover:opacity-100 group-hover:h-[2px] transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex space-x-4 mt-8 justify-left">
              <Link href="https://github.com/Minakoss" target="blank">
                <FaGithub className="text-gray-400 hover:text-white text-2xl cursor-pointer transition-colors duration-300" />
              </Link>
              <Link href="https://linkedin.com" target="blank">
                <FaLinkedin className="text-gray-400 hover:text-white text-2xl cursor-pointer transition-colors duration-300" />
              </Link>
              <Link href="https://codepen.io/Minakoss" target="blank">
                <FaCodepen className="text-gray-400 hover:text-white text-2xl cursor-pointer transition-colors duration-300" />
              </Link>
              <Link href="https://instagram.com" target="blank">
                <FaInstagram className="text-gray-400 hover:text-white text-2xl cursor-pointer transition-colors duration-300" />
              </Link>
              <Link href="https://twitter.com" target="blank">
                <FaDiscord className="text-gray-400 hover:text-white text-2xl cursor-pointer transition-colors duration-300" />
              </Link>
            </div>

            {/* Βελάκι για μετάβαση στη δεξιά στήλη */}
            <div className="flex justify-center mt-auto mb-4 sm:mb-0 md:hidden absolute bottom-0 left-0 right-0">
              <a onClick={scrollToRightColumn} className="block cursor-pointer">
                <FaArrowDown className="text-gray-400 hover:text-white text-3xl animate-bounce" />
              </a>
            </div>
          </div>

          {/* Δεξιά στήλη */}
          <div
            id="right-column"
            ref={rightColumnRef}
            className="text-md space-y-4 mt-10 md:mt-20 overflow-y-scroll h-screen"
          >
            <div className="text-gray-400">
              <h1 className="text-lg md:text-xl font-bold text-white">
                Welcome to WebBlend
              </h1>
              <p>
                At WebBlend, we bring your digital ideas to life through modern,
                innovative, and beautifully crafted websites and applications.
                Our team of expert developers and designers specializes in
                creating high-performance, user-friendly web solutions that are
                not only functional but visually captivating.
              </p>
            </div>
            <p className="text-gray-400">
              We believe that design is more than just aesthetics—it’s about
              creating seamless and engaging user experiences that connect with
              audiences on every device. Whether you need a dynamic website, an
              interactive web application, or a bespoke digital solution, we
              combine cutting-edge technology with the latest design trends to
              deliver products that stand out. Explore our portfolio of
              pixel-perfect projects and let us help you build the future of
              your digital presence.
            </p>
            <div className="text-gray-400">
              <h3 className="text-lg text-white">Services We Offer:</h3>
              <ul className="list-disc ml-4 md:ml-6">
                <li>Custom website development</li>
                <li>Web and mobile application design</li>
                <li>UI/UX design and consultation</li>
                <li>Responsive design for all devices</li>
                <li>E-commerce solutions</li>
                <li>Content management systems</li>
                <li>Social content/management</li>
              </ul>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-lg text-white">
                Let WebBlend transform your vision into reality. Together, we
                can build something remarkable.
              </h3>
              <p className="text-gray-400">
                This text positions your brand as a forward-thinking developer
                of modern websites and applications with an emphasis on
                high-quality design. Feel free to adjust it to match your
                brand’s tone or specific services!
              </p>

              {/* Τεχνολογίες */}
              <div className="flex flex-wrap space-x-2 md:space-x-2 mt-4">
                <span className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-base bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md hover:bg-[#0A2540]">
                  HTML/CSS
                </span>
                <span className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-base bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md hover:bg-[#0A2540]">
                  JavaScript
                </span>
                <span className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-base bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md hover:bg-[#0A2540]">
                  React
                </span>
                <span className="px-2 py-1 text-sm md:px-4 md:py-2 md:text-base bg-[#0A192F] text-[#66E0FF] rounded-full shadow-md hover:bg-[#0A2540]">
                  WordPress
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Προσθήκη Footer */}
      </div>
    </div>
  );
}
