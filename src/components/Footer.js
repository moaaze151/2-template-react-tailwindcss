export default function Footer() {
  return (
    <footer
      style={{
        background:
          "url('https://wallpapersmug.com/large/761f4e/galaxy-space-stars-5k.jpg') no-repeat center",
        backgroundSize: "cover",
      }}
      className="h-64 pt-10 pb-6 text-white relative"
    >
      <div className="flex flex-col justify-between h-full items-center">
        <div className="flex flex-col h-3/5 justify-between items-center">
          <div className="">
            <i className="fas fa-ghost mr-2 m-color sm:text-2xl"></i>
            <span className="text-lg sm:text-2xl">Kasper</span>
          </div>
          <div className="">
            <h3 className="">WE ARE SOCIAL</h3>
            <hr className="text-white" />
            <div className="text-center">
              <i className="fab fa-facebook mr-2 m-color "></i>
              <i className="fab fa-twitter mr-2 m-color "></i>
              <i className="fas fa-home mr-2 m-color "></i>
              <i className="fab fa-linkedin mr-2 m-color "></i>
            </div>
          </div>
        </div>
        <p className="flex items-center">
          &copy;2021-
          <span className="m-color">Kasper</span>
        </p>
      </div>
    </footer>
  );
}
