import React, { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  return (
    <header className=" text-white w-full fixed px-4">
      <div className="container py-3 lg:py-5  final-w mx-auto grid grid-cols-12 items-center lg:gap-20 border-b-2 border-gray-500 relative">
        {/* logo */}
        <div className="col-span-5 sm:col-span-4  lg:col-span-2 flex items-center">
          <i className="fas fa-ghost mr-2 m-color sm:text-2xl"></i>
          <span className="text-lg sm:text-2xl">Kasper</span>
        </div>
        {/* links */}
        <div className="hidden lg:block lg:col-span-8">
          <ul className="flex justify-between">
            <li className="h-color">Home</li>
            <li className="h-color">Services</li>
            <li className="h-color">Portfolio</li>
            <li className="h-color">About</li>
            <li className="h-color">Pricing</li>
            <li className="h-color">Contact</li>
          </ul>
        </div>

        {/* search btn */}
        <div className="col-span-3 sm:col-span-5 lg:col-span-2 relative ">
          <input
            type="text"
            className="px-2 w-full  bg-transparent border-gray-300 border-l-2 outline-none lg:border-0 lg:border-r-2"
          />
          <i className="fas fa-search absolute left-4 top-1 cursor-auto lg:left-0 lg:left-14"></i>
        </div>
        {/* Menu Icon*/}
        <div className="col-span-4 sm:col-span-3 flex justify-end lg:hidden ">
          <div className="icon">
            <i className="fas fa-bars mr-2 cursor-pointer" onClick={() => setActive(!active)}></i>Menu
          </div>
        </div>
        {/* Menu */}
        {active && (
          <div className="rounded-md lg:hidden w-full bg-white absolute top-16 text-black inset-x-0 ease-in-out duration-400 transition-all">
            <ul className="text-lg lg:text-base flex flex-col justify-between text-center cursor-pointer p-8 ">
              <li className="pb-4 hover:text-gray-500 text-black ease-in-out duration-300 transition-all">
                Home
              </li>
              <li className="pb-4 h-color text-black ease-in-out duration-300 transition-all">
                Services
              </li>
              <li className="pb-4 h-color text-black ease-in-out duration-300 transition-all">
                Portfolio
              </li>
              <li className="pb-4 h-color text-black ease-in-out duration-300 transition-all">
                About
              </li>
              <li className="pb-4 h-color text-black ease-in-out duration-300 transition-all">
                Pricing
              </li>
              <li className=" h-color text-black ease-in-out duration-300 transition-all">
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
