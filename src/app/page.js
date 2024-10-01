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
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.2), rgba(10, 25, 47, 1))`,
  };

  return (
    <div className="min-h-screen text-light-gray p-8" style={gradientStyle}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
        {/* Αριστερή στήλη */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold text-white">WebCraft</h1>
          <h2 className="text-xl font-medium text-gray-300">
            Frontend Engineer
          </h2>
          <p className="text-lg text-gray-400">
            I build pixel-perfect, engaging, and accessible digital experiences.
          </p>

          {/* Μενού πλοήγησης */}
          <nav className="mt-8">
            <ul className="space-y-4">
              <li className="text-lg font-medium text-gray-400 hover:text-white cursor-pointer">
                About
              </li>
              <li className="text-lg font-medium text-gray-400 hover:text-white cursor-pointer">
                Experience
              </li>
              <li className="text-lg font-medium text-gray-400 hover:text-white cursor-pointer">
                Projects
              </li>
            </ul>
          </nav>
        </div>

        {/* Δεξιά στήλη με margin-top */}
        <div className="text-lg space-y-4 mt-20">
          <p className="text-gray-400">
            Back in 2012, I decided to try my hand at creating custom Tumblr
            themes and tumbled headfirst into the rabbit hole of coding and web
            development. Fast-forward to today, and I've had the privilege of
            building software for an advertising agency, a start-up, a huge
            corporation, and a digital product studio.
          </p>
          <p className="text-gray-400">
            My main focus these days is building accessible user interfaces for
            our customers at Klaviyo. I most enjoy building software in the
            sweet spot where design and engineering meet — things that look good
            but are also built well under the hood. In my free time, I've also
            released an online video course that covers everything you need to
            know to build a web app with the Spotify API.
          </p>
          <p className="text-gray-400">
            When I'm not at the computer, I'm usually rock climbing, reading,
            hanging out with my wife and two cats, or running around Hyrule
            searching for Korok seeds.
          </p>
          {/* Εμπειρία */}
          <div className="mt-8">
            <h3 className="text-lg text-white">2024 — PRESENT</h3>
            <h4 className="text-xl font-bold text-white">
              Senior Frontend Engineer, Accessibility · Klaviyo
            </h4>
            <p className="text-gray-400">
              Build and maintain critical components used to construct Klaviyo’s
              frontend, across the whole product. Work closely with
              cross-functional teams, including developers, designers, and
              product managers, to implement and advocate for best practices in
              web accessibility.
            </p>

            {/* Τεχνολογίες */}
            <div className="flex space-x-4 mt-4">
              <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full">
                SCSS
              </span>
              <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full">
                React
              </span>
              <span className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full">
                Wordpress
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
