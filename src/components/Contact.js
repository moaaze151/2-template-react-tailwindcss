import Heading from "./Heading";
export default function Contact() {
  return (
    <div className="pt-10 pb-16" id="contact">
      <div className="container final-w mx-auto px-4">
        <Heading
          title="Contact us"
          active="true"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, corrupti?"
        />
        <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-1 sm:gap-8">
          <div className="form">
            <input
              type="text"
              placeholder="Your Name"
              className="cursor-pointer border border-gray-300 block w-full px-4 py-1 md:py-2 rounded-md outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="cursor-pointer border border-gray-300 block w-full my-4  py-1 px-4 md:py-2 rounded-md outline-none"
            />
            <textarea
              className="cursor-pointer border border-gray-300 w-full h-36 px-4 py-2 rounded-md outline-none"
              name=""
              id=""
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="info">
            <h4 className="text-xl font-semibold mb-2 mt-4 sm:mt-0">Get In Touch</h4>
            <span className="text-gray-400">+00 123 456 789</span>
            <span className="block  mb-5 text-gray-400">+00 987 654 321</span>
            <h4 className="text-xl font-semibold mb-2">Where We Are</h4>
            <address className="text-gray-400">
              Awesome Address 17 <br />
              New York, NyV
              <br />
              123-4567-890
              <br />
              USA
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
