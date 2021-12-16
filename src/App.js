import Header from "./components/Header.js";
import Banner from "./components/Banner.js";
import Services from "./components/Services.js";
import Portfolio from "./components/Portfolio.js";
import About from "./components/About.js";
import Pricing from "./components/Pricing.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import { useState } from "react";

function App() {
  const [activeIcon, setActiveIcon] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 1000) {
      setActiveIcon(true);
    } else {
      setActiveIcon(false);
    }
  });
  return (
    <div className="App">
      <Header />
      <Banner />
      <Services />
      <div
        style={{
          background:
            "url('https://www.teahub.io/photos/full/200-2006872_wallpaper-of-bird-owl-tree-background-hd-image.jpg') no-repeat center",
          backgroundSize: "cover",
        }}
        className="h-96 flex flex-col  justify-center lg:items-end"
      >
        <div className="w-full lg:w-1/2 py-5 md:pl-6  lg:text-left bg-color text-gray-300 pl-4">
          <h2 className="mb-6 text-xl">OUR DESINGS COMES WITH...</h2>
          <ul>
            <li>
              <i className="fas fa-desktop mr-3 mb-4"></i>Responsive Design
            </li>
            <li>
              <i className="fas fa-desktop mr-3 mb-4"></i>Modern And Clean
              Design
            </li>
            <li>
              <i className="fas fa-desktop mr-3 mb-4"></i>Clean Code
            </li>
            <li>
              <i className="fas fa-desktop mr-3"></i>Browser Friendly
            </li>
          </ul>
        </div>
      </div>
      <Portfolio />
      <About />
      <Pricing />
      <Contact />
      <Footer />
      {activeIcon && (
        <div
          onClick={() =>
            (document.documentElement.scrollTop = 0) ||
            (document.body.scrollTop = 0)
          }
          className="cursor-pointer transition-all duration-500 ease-in-out flex flex-col justify-center items-center fixed bottom-12 right-8 w-12 h-12 bg-blue-500 rounded-full"
        >
          <i className="fas fa-chevron-up text-xl  text-white"></i>
        </div>
      )}
    </div>
  );
}

export default App;
