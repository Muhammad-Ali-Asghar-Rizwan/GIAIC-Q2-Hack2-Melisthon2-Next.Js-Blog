"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";


const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: `long`,
        year: `numeric`,
        month: `long`,
        day: `numeric`,
        hour: `2-digit`,
        minute: `2-digit`,
        second: `2-digit`,
        hour12: false,
      };
      setCurrentDateTime(
        now.toLocaleDateString("en-US", options) +
          "" +
          now.toLocaleTimeString("en-US", { hour12: false })
      );
    };

    updateDateTime();
    const interValid = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValid);
  }, []);

  return (
    <header className="  bg-stone-200 text-black body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 md:text-left text-center ">
          <span>{currentDateTime}</span>
        </div>

        <nav className="md:ml-auto mt-4 md:mt-0 flex flex-wrap items-center justify-center">
          <Link
            href="/"
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/"
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            About
          </Link>
          <Link
            href="/"
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Blog
          </Link>
          <Link
            href="/"
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Contact
          </Link>

          <div className="flex items-center justify-center gap-11">
            
          <button className="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-white mt-2 md:mt-0 transition-colors duration-300">
            Linkedin
          </button>

          {/* <ModeToggle /> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
