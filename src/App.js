import Header from "./components/Header.js";
import Banner from "./components/Banner.js";
import Services from "./components/Services.js";
import Portfolio from "./components/Portfolio.js";
function App() {
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
        <div className="w-full lg:w-1/2 py-5 md:pl-6  lg:text-left bg-color text-gray-300 pl-4" >
          <h2 className="mb-6 text-xl">OUR DESINGS COMES WITH...</h2>
          <ul>
            <li>
              <i className="fas fa-desktop mr-3 mb-4"></i>Responsive Design
            </li>
            <li>
              <i className="fas fa-desktop mr-3 mb-4"></i>Modern And Clean Design
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
      <Portfolio/>
    </div>
  );
}

export default App;
