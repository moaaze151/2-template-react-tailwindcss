import React, { useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);
  const [bgActive, setBgActive] = useState(false);
  window.addEventListener("scroll", () => {
    if(active === true){setActive(false)}
    if (window.scrollY > window.innerHeight - 60) {
      setBgActive(true);
    } else {
      setBgActive(false);
    }
  });
  return (
    <header
      className={`${
        bgActive && "bg-gray-700"
      } text-white w-full fixed z-30 px-4 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`${
          !bgActive && "border-b-2"
        } container py-3 lg:py-5  final-w mx-auto grid grid-cols-12 items-center lg:gap-20  border-gray-500 relative`}
      >
        {/* logo */}
        <div className="col-span-5 sm:col-span-4  lg:col-span-2 flex items-center">
          <i className="fas fa-ghost mr-2 m-color sm:text-2xl"></i>
          <span className="text-lg sm:text-2xl">Kasper</span>
        </div>
        {/* links */}
        <div className="hidden lg:block lg:col-span-8">
          <ul className="flex justify-between">
            <li className="h-color">
              <a href="#">Home</a>
            </li>
            <li className="h-color">
              <a href="#services">Services</a>
            </li>
            <li className="h-color">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="h-color">
              <a href="#about">About</a>
            </li>
            <li className="h-color">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="h-color">
              <a href="#contact">Contact</a>
            </li>
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
            <i
              className="fas fa-bars mr-2 cursor-pointer"
              onClick={() => setActive(!active)}
            ></i>
            Menu
          </div>
        </div>
        {/* Menu */}
        {active && (
          <div className="rounded-md lg:hidden w-full bg-gray-600 absolute top-16 text-black inset-x-0 ease-in-out duration-400 transition-all">
            <ul className="text-lg lg:text-base flex flex-col justify-between text-center cursor-pointer p-8 ">
              <li className="pb-4 hover:text-gray-50 text-black ease-in-out duration-300 transition-all">
                <a href="#services">Home</a>
              </li>
              <li className="pb-4 hover:text-gray-50 text-black ease-in-out duration-300 transition-all">
                <a href="#services">Services</a>
              </li>
              <li className="pb-4 hover:text-gray-50 text-black ease-in-out duration-300 transition-all">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="pb-4 hover:text-gray-50 text-black ease-in-out duration-300 transition-all">
                <a href="#about">About</a>
              </li>

              <li className="pb-4 hover:text-gray-50 text-black ease-in-out duration-300 transition-all">
                <a href="#pricing">Pricing</a>
              </li>
              <li className="hover:text-gray-50 text-black ease-in-out duration-300 transition-all">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
