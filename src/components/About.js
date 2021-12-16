import Heading from "./Heading";
export default function About() {
  return (
    <div className="glo-container final-w" id="about">
      <Heading
        title="About Us"
        active="true"
        text="Lorem ipsum dolor sit amet elit. Accusamus molestias labore!"
      />
      <div className="md:flex md:items-start md:justify-between">
        {/* tesimonials */}
        <div className="md:w-1/2 lg:w-5/12 mb-12 md:mb-2">
          {/*head*/}
          <div className="text-center mb-6">
            <h3 className="about-heads">Testimonials</h3>
            <p className="about-txt md:mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
              cumque!
            </p>
          </div>
          {/*inner*/}
          <div className="testi-in-div">
            <img className="testi-img" src="./carton2.jpg" alt="error" />
            <p className="testi-txt">
              Lorem ipsum dolor sit amet elit. Accusamus ipsum dolor sit amet
              elit molestias labore!
            </p>
          </div>
          <div className="testi-in-div">
            <img className="testi-img" src="./carton2.jpg" alt="error" />
            <p className="testi-txt">
              Lorem ipsum dolor sit amet elit. Accusamus ipsum dolor sit amet
              elit molestias labore!
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="md:w-1/2 lg:w-5/12 h-full">
          {/*head*/}
          <div className="text-center my-6 md:mt-0">
            <h3 className="about-heads">Our Skills</h3>
            <p className="about-txt md:mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
              cumque!
            </p>
          </div>
          {/*inner*/}
          <div className="">
            <div className="mb-4 md:mb-8 skills-div">
              <span className="skills-span  w-11/12">HTML</span>
            </div>
            <div className="mb-4 md:mb-8 skills-div">
              <span className="skills-span w-10/12">Css</span>
            </div>
            <div className="mb-4 md:mb-8 skills-div">
              <span className="skills-span w-8/12">Javascript</span>
            </div>
            <div className="skills-div">
              <span className="skills-span w-10/12">Sass</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
