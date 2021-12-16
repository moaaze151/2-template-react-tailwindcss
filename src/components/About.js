import Heading from "./Heading";
export default function About() {
  return (
    <div className="container pb-6 pt-16 lg:py-5  final-w mx-auto px-4" id="about">
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
            <h3 className="text-gray-900 text-xl font-medium mb-3">Testimonials</h3>
            <p className="w-full  text-gray-400 sm:w-96 mx-auto md:mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
              cumque!
            </p>
          </div>
          {/*inner*/}
          <div className="flex items-center  flex-col sm:flex-row mb-4">
            <img
              className="mr-6 w-28 h-28 rounded-full"
              src="./carton2.jpg"
              alt="error"
            />
            <p className="text-center sm:text-left text-gray-700">
              Lorem ipsum dolor sit amet elit. Accusamus ipsum dolor sit amet
              elit molestias labore!
            </p>
          </div>
          <div className="flex items-center  flex-col sm:flex-row mb-4">
            <img
              className="mr-6 w-28 h-28 rounded-full"
              src="./carton2.jpg"
              alt="error"
            />
            <p className="text-center sm:text-left text-gray-700">
              Lorem ipsum dolor sit amet elit. Accusamus ipsum dolor sit amet
              elit molestias labore!
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="md:w-1/2 lg:w-5/12 h-full">
          {/*head*/}
          <div className="text-center my-6 md:mt-0">
            <h3 className="text-gray-900 text-xl font-medium mb-3">Our Skills</h3>
            <p className="w-full  text-gray-400 sm:w-96 mx-auto md:mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
              cumque!
            </p>
          </div>
           {/*inner*/}
           <div className="">
               <div className="mb-4 md:mb-8 bg-gray-300 h-8 w-full rounded-md overflow-hidden">
                   <span className="text-white py-1 px-4 w-11/12 bg-blue-600 block">HTML</span>
               </div>
               <div className="mb-4 md:mb-8 bg-gray-300 h-8 w-full rounded-md overflow-hidden">
                   <span className="text-white py-1 px-4 w-10/12 bg-blue-600 block">Css</span>
               </div>
               <div className="mb-4 md:mb-8 bg-gray-300 h-8 w-full rounded-md overflow-hidden">
                   <span className="text-white py-1 px-4 w-8/12 bg-blue-600 block">Javascript</span>
               </div>
               <div className="bg-gray-300 h-8 w-full rounded-md overflow-hidden">
                   <span className="text-white py-1 px-4 w-10/12fd bg-blue-600 block">Sass</span>
               </div>
           </div>
        </div>
      </div>
    </div>
  );
}
