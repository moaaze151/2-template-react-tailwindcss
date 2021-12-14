export default function Banner() {
  return (
    // banner
    <div
      className=" h-screen"
      style={{
        background:
          "url(https://cdn.wallpapersafari.com/42/30/3c4gfh.jpg) no-repeat center center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="h-full flex items-center"
        style={{ background: "rgba(0,0,0,0.4)", paddingTop: "80px" }}
      >
        <div className="text-white bg-color py-6 md:py-10 px-4 lg:px-8 w-full md:w-1/2 text-center md:text-left">
          <div className="container">
          <h1 className="sm:text-xl md:text-2xl lg:text-3xl">
            HELLO WORLD!
            <br />
            WE ARE KASPER,WE MAKE ART.
          </h1>
          <p className="text-xs sm:text-base sm:leading-6 lg:leading-8  text-gray-400  mt-4 lg:mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            facilis, illo maiores molestiae, sint vero, ex eum tempora at eaque
            cum nam dolore suscipit sit! Aperiam reprehenderit repellendus
            quisquam earum, odit quod. Molestiae.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}
