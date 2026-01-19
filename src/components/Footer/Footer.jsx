import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-zinc-100  py-20">
      <div className="max-w-[1400px] gap-y-12 mx-auto px-10 flex flex-wrap">
        <div className="flex-1 basis-[300px]">
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">O</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px]">
            Bred for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <p className="text-zinc-800 mt-6 ">
            2025 &copy;   All rights reserved.
          </p>
        </div>
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">
              Company
            </h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 mt-6 ">About</a>
          </li>
           <li>
            <a href="#" className="hover:text-orange-500 text-zinc-800 mt-6 ">FAQ</a>
          </li>
        </ul>

        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">
              Support
            </h5>
          </li>
          <li className="mt-6">
            <a href="#" className="hover:text-orange-500 text-zinc-800 mt-6 ">Support Center</a>
          </li>
           <li>
            <a href="#" className="hover:text-orange-500 text-zinc-800 mt-6 ">Feedback</a>
          </li>
           <li>
            <a href="#" className="hover:text-orange-500 text-zinc-800 mt-6 ">Contact Us</a>
          </li>
        </ul>

        <div className="flex-1">
          
            <h5 className="text-zinc-800 text-2xl font-bold">
              Stay Connected
            </h5>
         
          <p className="mt-6 text-zinc-600">
            Questions or Feedbacks ? <br/>
            we 'd love to hear from you!
          </p>
          <div className="p-1 bg-white rounded-lg mt-6 flex">
            <input type="email" name="email" id="email" autoComplete="off" placeholder="Enter your email" className="h-[5vh] pl-4 flex-1 focus:outline-none"/>
            <button className="bg-linear-to-b from-orange-400 to-orange-500 text-white p-2  rounded-lg flex text-2xl hover:to-orange-600 cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
