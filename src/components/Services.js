import Heading from "./Heading";
import ServiceItem from "./ServiceItem";

export default function Services() {
  const hData = [
    "Services",
    "Lorem ipsum dolor sit amet consec tetur adipisicing elit. Dicta, autem voluptate! Delectus!",
  ];
  const innerInfo = [
    {
      id: 1,
      tit: "vorem amet intuitive",
      txt: " Lorem ipsum dolor sit amet consec tetur adipisicing elit. Accus amus dignissimos magni eum porro culpa dolores?",
      icon: "fas fa-desktop",
    },
    {
      id: 2,
      tit: "vorem amet intuitive",
      txt: " Lorem ipsum dolor sit amet consec tetur adipisicing elit. Accus amus dignissimos magni eum porro culpa dolores?",
      icon: "fas fa-cog",
    },
    {
      id: 3,
      tit: "vorem amet intuitive",
      txt: " Lorem ipsum dolor sit amet consec tetur adipisicing elit. Accus amus dignissimos magni eum porro culpa dolores?",
      icon: "fas fa-pencil-ruler",
    },
    {
      id: 4,
      tit: "vorem amet intuitive",
      txt: " Lorem ipsum dolor sit amet consec tetur adipisicing elit. Accus amus dignissimos magni eum porro culpa dolores?",
      icon: "fas fa-camera",
    },
  ];
  // const inner = [1,2,3,4].map(e=>)

  return (
    <div className="py-16" id="services">
      <div className="glo-container final-w ">
        <Heading title={hData[0]} text={hData[1]} active="true" />
        <div className="flex flex-col items-center  lg:flex-row lg:flex-wrap  lg:justify-between" >
          {innerInfo.map((e) => (
            <ServiceItem className="w-full" key={e.id} title={e.tit} text={e.txt} icon={e.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}
