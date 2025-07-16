import React, { useState } from "react";
import { Link } from "react-router-dom";

import nashlogodark from "./assets/nashdarklogo.svg"; // Update path as needed
import nashlogolight from "./assets/nashlightlogo.svg"; // Update path as needed
import burger from "./assets/burger.svg"; // Use any burger icon
import LightBulb from "./components/LightBulb";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="pt-3 shadow-sm">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <div className="block dark:hidden">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={nashlogolight} className="h-8" alt="Logo" />
            <span className="dark:text-2ndry-1 self-center text-2xl font-semibold whitespace-nowrap">
              Sm.
            </span>
          </a>
        </div>
        <div className="hidden dark:block">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={nashlogodark} className="h-8" alt="Logo" />
            <span className="dark:text-2ndry-1 self-center text-2xl font-semibold whitespace-nowrap">
              Sm.
            </span>
          </a>
        </div>
        {/* Buttons */}
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          {/* Light bulb toggle - simplified without tooltip */}
          <div className="relative top-4 scale-140 transition-transform lg:scale-175 xl:scale-200">
            <LightBulb />
          </div>

          {/* Toggle mobile menu */}
          <button
            onClick={toggleMenu}
            type="button"
            className="texthilit1 dark:hover:bg-primary focus:ring-2ndry-1 dark:focus:ring-primary-3 inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm focus:ring-2 focus:outline-none md:hidden"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="material-symbols-outlined">menu</span>
            <span className="sr-only">Open main menu</span>
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-cta"
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            <li>
              <Link to="/" className="navilink">
                <span className="texthilit1"></span>Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="navilink">
                <span className="texthilit1"></span>About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="navilink">
                <span className="texthilit1"></span>Projects
              </Link>
            </li>
            <li>
              <Link to="/projects" className="navilink">
                <span className="texthilit1"></span>Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="navilink">
                <span className="texthilit1"></span>Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
