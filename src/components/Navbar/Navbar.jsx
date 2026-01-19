import React, { useEffect, useState } from "react";
import { IoHeart } from "react-icons/io5";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]" : ""
      }`}
    >
      <nav className="max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] px-10 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">O</span>cify
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          <li>
            <Link
              to="/"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/AllProducts"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors"
            >
              Products
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-x-5">
          {/* Desktop Search */}
          <div className="hidden md:flex p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-linear-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </div>

          <a href="#" className="text-zinc-800 text-3xl">
            <IoHeart />
          </a>

          <a href="#" className="text-zinc-800 text-3xl">
            <HiMiniShoppingBag />
          </a>

          <button
            onClick={toggleMenu}
            className="text-zinc-400 text-3xl md:hidden"
          >
            {showMenu ? <RxCross2 /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed top-[12vh] left-1/2 -translate-x-1/2 md:hidden flex flex-col items-center gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 transition-all duration-500 shadow-xl z-40 ${
            showMenu
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none -left-full"
          }`}
        >
          <li>
            <Link
              to="/"
              className="font-semibold tracking-wider text-orange-500"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/AllProducts"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>

          <li className="flex p-1 border-2 border-orange-500 rounded-full w-full max-w-xs">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-linear-to-b from-orange-400 to-orange-500 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;