"use client"; // Προσθήκη αυτής της γραμμής

import { useState, useEffect } from "react";

export default function Home() {
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
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.002), rgba(10, 25, 47, 1) 50%), rgba(10, 25, 47, 0.9)`, // Πολύ πιο αχνό
  };

  return (
    <div
      className="min-h-screen text-light-gray p-4 md:p-8"
      style={gradientStyle}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 container mx-auto">
        {/* Αριστερή στήλη */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            WebCraft
          </h1>
          <h2 className="text-lg md:text-xl font-medium text-gray-300">
            Frontend Engineer
          </h2>
          <p className="text-md md:text-lg text-gray-400">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>

          {/* Μενού πλοήγησης */}
          <nav className="mt-6 md:mt-8">
            <ul className="space-y-2 md:space-y-4">
              <li className="text-md md:text-lg font-medium text-gray-400 hover:text-white cursor-pointer">
                About
              </li>
              <li className="text-md md:text-lg font-medium text-gray-400 hover:text-white cursor-pointer">
                Projects
              </li>
              <li className="text-md md:text-lg font-medium text-gray-400 hover:text-white cursor-pointer">
                Connect
              </li>
            </ul>
          </nav>
        </div>

        {/* Δεξιά στήλη με margin-top */}
        <div className="text-md md:text-lg space-y-4 mt-10 md:mt-20">
          <div className="text-gray-400">
            <h4 className="text-lg md:text-xl font-bold text-white">
              Welcome to WebCraft
            </h4>
            <p>
              At WebCraft, we bring your digital ideas to life through modern,
              innovative, and beautifully crafted websites and applications. Our
              team of expert developers and designers specializes in creating
              high-performance, user-friendly web solutions that are not only
              functional but visually captivating.
            </p>
          </div>
          <p className="text-gray-400">
            We believe that design is more than just aesthetics—it’s about
            creating seamless and engaging user experiences that connect with
            audiences on every device. Whether you need a dynamic website, an
            interactive web application, or a bespoke digital solution, we
            combine cutting-edge technology with the latest design trends to
            deliver products that stand out. Explore our portfolio of
            pixel-perfect projects and let us help you build the future of your
            digital presence.
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
            </ul>
          </div>
          {/* Εμπειρία */}
          <div className="mt-6 md:mt-8">
            <h3 className="text-lg md:text-xl font-bold text-white">
              Let WebCraft transform your vision into reality. Together, we can
              build something remarkable.
            </h3>
            <p className="text-gray-400">
              This text positions your brand as a forward-thinking developer of
              modern websites and applications with an emphasis on high-quality
              design. Feel free to adjust it to match your brand’s tone or
              specific services!
            </p>

            {/* Τεχνολογίες */}
            <div className="flex space-x-2 md:space-x-4 mt-4">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-md">
                HTML/CSS
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-md">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-md">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-md">
                React
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full shadow-md">
                Wordpress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
