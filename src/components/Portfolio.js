import Heading from "./Heading";
import ImgPortfolio from "./ImgPortfolio";
export default function Portfolio() {
  const photos = [
    {
      id: 1,
      img: "https://www.farescd.com/wp-content/uploads/2019/04/%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%A7%D9%84%D8%AA%D8%B9%D8%AF%D9%8A%D9%84-%D8%B9%D9%84%D9%89-%D8%A7%D9%84%D8%B5%D9%88%D8%B1-%D9%84%D9%84%D8%A7%D9%86%D8%AF%D8%B1%D9%88%D9%8A%D8%AF-PhotoDirector-Photo-Editor-App-Picture-Editor-Pro-300x300.jpg",
      title: "App",
    },
    {
      id: 2,
      img: "https://bestforandroid.com/apk/wp-content/uploads/2021/05/faceapp-pro-featured-image-300x300.png",
      title: "App",
    },
    {
      id: 3,
      img: "https://i.pinimg.com/474x/c4/93/a7/c493a76629c9c1ef5f85b2e8e2b30862.jpg",
      title: "Photography",
    },
    {
      id: 4,
      img: "https://i.pinimg.com/474x/d7/22/a6/d722a6d3f27326acc901fb3334771e49.jpg",
      title: "Photography",
    },
    {
      id: 5,
      img: "https://www.arageek.com/wp-content/uploads/2021/04/%D9%85%D8%AA%D8%B5%D9%81%D8%AD%D8%A7%D8%AA-%D8%A7%D9%84%D9%88%D9%8A%D8%A8-300x300.jpg",
      title: "Web",
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdawryVSyK68nSaZ5wB7tIBfUHqLgFkdE6AQ&usqp=CAU",
      title: "Web",
    },
    {
      id: 7,
      img: "https://s.alicdn.com/@sc04/kf/H7cce4ba7e7fb4737bf8ad2124bd89cdaG.jpg_300x300.jpg",
      title: "Print",
    },
    {
      id: 8,
      img: "https://arabic.werprinters.cc/wp-content/uploads/1-59-300x300.jpg",
      title: "Print",
    },
  ];
  return (
    <div className="py-16" id="portfolio">
      <div className="container py-3 lg:py-5  final-w mx-auto px-4">
        <Heading
          title="Portfolio"
          active="true"
          text="Lorem ipsum dolor sit amet elit. Accusamus molestias labore!"
        />
        <div className="content">
          {/* list */}
          <div className="mx-auto mb-10 w-72 sm:w-96">
            <ul className="flex flex-wrap justify-center sm:justify-between">
              <li className="cursor-pointer border-2 border-gray-300 py-1 px-3 mr-2 mb-3 sm:mr-0">
                All
              </li>
              <li className="cursor-pointer border-2 border-gray-300 py-1 px-3 mr-2 mb-3 sm:mr-0">
                App
              </li>
              <li className="cursor-pointer border-2 border-gray-300 py-1 px-3 mr-2 mb-3 sm:mr-0">
                Photography
              </li>
              <li className="cursor-pointer border-2 border-gray-300 py-1 px-3 mr-2 mb-3 sm:mr-0">
                Web
              </li>
              <li className="cursor-pointer border-2 border-gray-300 py-1 px-3 mr-2 mb-3 sm:mr-0">
                Print
              </li>
            </ul>
          </div>
          {/* boxes */}
          <div className="flex flex-wrap">
            {photos.map((e) => (
              <ImgPortfolio key={e.id} src={e.img} title={e.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
