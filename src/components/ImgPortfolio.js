export default function ImgPortfolio({ src, title }) {
  return (
    <div className="box w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center relative overflow-hidden">
      <img
        className="transition-all duration-300 ease-in-out w-3/4 sm:w-full bg-cover mx-auto sm:m-0 cursor-pointer"
        src={src}
        alt="error"
      />
      <h3 className="transition-all duration-500 ease-in-out m-color text-xl font-semibold text-left bg-white py-2 px-4 absolute btn-bottom inset-x-0 ">
        Awsome Image
        <br />
        {title}
      </h3>
    </div>
  );
}
