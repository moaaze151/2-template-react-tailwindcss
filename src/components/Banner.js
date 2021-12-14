export default function Banner() {
  return (
    // banner
    <div
      className=" h-screen"
      style={{
        background:
          "url(https://cdn.wallpapersafari.com/42/30/3c4gfh.jpg) no-repeat center center",
          backgroundSize:"cover"
      }}
    >
      <div
        className="h-full"
        style={{ background: "rgba(0,0,0,0.4)", paddingTop: "80px" }}
      >
        Banner
      </div>
    </div>
  );
}
