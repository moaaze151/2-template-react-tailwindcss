import Heading from "./Heading";
export default function Pricing() {
  return (
    <div className="py-16" id="pricing">
      <div className="container final-w mx-auto px-4">
        <Heading
          title="Pricing"
          active="true"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, corrupti?"
        />
        <div>
          <table className="sm:w-full md:w-3/4 sm:mx-auto sm:text-center border-collapse border-blue-600 border-2">
            <thead className="border-blue-600 border-2">
              <tr className="text-left sm:text-center">
                <th className="text-xs md:text-base lg:text-lg">
                  <span>
                    BASIC
                    <br />
                    <span>19</span>$
                  </span>
                </th>
                <th className="text-xs md:text-base lg:text-lg">
                  <span>
                    PREMIUM
                    <br />
                    <span className="">29</span>$
                  </span>
                </th>
                <th className="text-xs md:text-base lg:text-lg">
                  <span>
                    PRO
                    <br />
                    <span>39</span>$
                  </span>
                </th>
                <th className="text-xs md:text-base lg:text-lg">
                  <span>
                    {" "}
                    PLATINIUM
                    <br />
                    <span className="">49</span>$
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="">
                <td className="">
                  <span>Feature no 1</span>
                </td>
                <td className="">
                  <span>Extra Feature</span>
                </td>
                <td className="">
                  <span>Feature No 2</span>
                </td>
                <td className="">
                  <span>Feature</span>
                </td>
              </tr>
              <tr className="">
                <td className="">
                  <span>Feature no 1</span>
                </td>
                <td className="">
                  <span>Extra Feature</span>
                </td>
                <td className="">
                  <span>Feature No 2</span>
                </td>
                <td className="">
                  <span>Feature</span>
                </td>
              </tr>
              <tr className="">
                <td className="">
                  <span>Feature no 3</span>
                </td>
                <td className="">
                  <span>Extra Feature</span>
                </td>
                <td className="">
                  <span>Feature No 2</span>
                </td>
                <td className="">
                  <span>Feature</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <tfoot>
            <tr>
              <td className="">Feature no 1</td>
              <td className="">Extra Feature</td>
              <td className="">Feature No 2</td>
              <td className="">Feature</td>
            </tr>
          </tfoot> */}
      </div>
    </div>
  );
}
