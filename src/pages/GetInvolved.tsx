import dropdown from "../assets/dropdown.svg";
import Title from "../components/Title";
import { useState } from "react";
import LastSection from "../components/LastSection";
function GetInvolved() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const option1 = [
    "Yes, sign me up for newsletters and opportunities",
    "No, only contact me regarding this application",
  ];

  const option2 = ["On-site", "Virtual", "Both"];

  const option3 = [
    "Volunteer in Operations",
    "Speak at Events or Panels",
    "Other",
  ];

  const toggleOption = (options: string) => {
    setSelected((prev) =>
      prev.includes(options)
        ? prev.filter((item) => item !== options)
        : [...prev, options]
    );
  };
  return (
    <>
      <Title name="Get Involved" />
      <section className="grid sm:grid-cols-2 grid-cols-1 justify-center items-center w-full px-[5vw] sm:px-[10vw] py-[5vw] gap-5">
        <div className="flex sm:hidden w-full h-[80vw] bg-[#E7E7E7]" />
        <div className="flex flex-col justify-center items-center w-full p-[2vw] gap-[4vw]">
          <div className="w-full border-b-1 pb-[4vw] border-[#E7E7E7]">
            <span className="w-full font-inter text-[#4F4F4F] text-xl leading-[120%]">
              TABTech is for all tech professionals, innovators, and ecosystem
              builders, from designers and engineers to researchers, product
              managers, and entrepreneurs.
            </span>
          </div>
          <div className="flex flex-col justify-center w-full h-full p-[2vw] gap-[3vw] bg-[#FDF7ED]">
            <div className="flex flex-col justify-center w-full text-[#4F4F4F]">
              <p className="font-inter font-bold text-xl leading-[120%]">
                Choose how you’d like to contribute
              </p>
            </div>
            <form className="flex flex-col justify-center w-ful gap-[2vw] flex justify-center items-center flex-col">
              <div className="flex flex-col justify-between w-full gap-[0.5vw]">
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="text-sm w-full placeholder:text-[#888888] rounded-lg border-[#EFEFEF] border-1 p-[0.7vw] bg-[#FFFFFF]"
                />
              </div>
              <div className="flex flex-col justify-between w-full gap-[0.5vw]">
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                  Enter email address
                </label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  required
                  className="text-sm w-full placeholder:text-[#888888] border-[#EFEFEF] border-1 p-[0.7vw] bg-[#FFFFFF]"
                />
              </div>
              <div className="flex flex-col justify-between w-full gap-[0.5vw]">
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                  Phone number (optional)
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="text-sm w-full placeholder:text-[#888888] border-[#EFEFEF] border-1 p-[0.7vw] bg-[#FFFFFF]"
                />
              </div>
              <div className="flex flex-col justify-between w-full gap-[0.5vw]">
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                  Organization/Affiliation
                </label>
                <input
                  type="text"
                  placeholder="What organization or affiliation are you connected with?"
                  className="text-sm w-full placeholder:text-[#888888] p-[0.7vw] bg-[#FFFFFF] cursor-pointer"
                />
              </div>
              <div className="flex flex-col justify-between w-full gap-[0.5vw]">
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                  How would you like to get involved?
                </label>
                <div className="flex border-[#EFEFEF] border-1">
                  <input
                    type="text"
                    placeholder="Choose all that apply"
                    className="text-sm w-full placeholder:text-[#888888] rounded-lg border-[#EFEFEF] border-1 p-[0.7vw] bg-[#FFFFFF]"
                  />
                  <div
                    onClick={() => {
                      setIsOpen1(!isOpen1);
                      setIsOpen2(false);
                      setIsOpen3(false);
                    }}
                  >
                    <img
                      src={dropdown}
                      alt="drop-down"
                      className={`w-[4vw] cursor-pointer text-sm h-full border-white bg-[#FFFFFF] border-b-1 border-t-1 border-r-1 p-[1.2vw] transition-transform duration-300 ease-in-out transform ${
                        isOpen1 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                  {isOpen1 && (
                    <div className="absolute mt-1 w-auto bg-white border border-gray-300 rounded text-[#4F4F4F] shadow-lg z-10">
                      <ul className="flex flex-col p-2 gap-2">
                        {option1.map((option, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={selected.includes(option)}
                              onChange={() => toggleOption(option)}
                              className="accent-[#4F4F4F] rounded bg-white border border-[#4F4F4F] w-[1vw] h-[1vw]"
                            />
                            <span className="text-sm">{option}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-between w-full gap-[0.5vw]">
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                  Tell us more about your interest or expertise
                </label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter your message here"
                    className="w-full text-sm placeholder:text-[#888888] border-[#EFEFEF] border-1 p-[0.7vw] bg-[#FFFFFF]"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between w-full gap-[0.5vw]">
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                  Preferred mode of participation
                </label>
                <div className="flex border-[#EFEFEF] border-1">
                  <input
                    type="text"
                    placeholder="Choose an option"
                    className="text-sm w-full placeholder:text-[#888888] border-[#EFEFEF] border-1 p-[0.7vw] bg-[#FFFFFF]"
                  />
                  <div
                    onClick={() => {
                      setIsOpen2(!isOpen2);
                      setIsOpen1(false);
                      setIsOpen3(false);
                    }}
                  >
                    <img
                      src={dropdown}
                      alt="drop-down"
                      className={`w-[4vw] text-sm h-full cursor-pointer border-white bg-[#FFFFFF] border-b-1 border-t-1 border-r-1 p-[1.2vw] transition-transform duration-300 ease-in-out transform ${
                        isOpen3 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                  {isOpen2 && (
                    <div className="absolute mt-[1vw] pr-[20vw] bg-white border border-gray-300 rounded text-[#4F4F4F] shadow-lg z-10">
                      <ul className="flex flex-col p-2 gap-2">
                        {option2.map((option, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={selected.includes(option)}
                              onChange={() => toggleOption(option)}
                              className="accent-[#4F4F4F] rounded bg-white border border-[#4F4F4F] w-[1vw] h-[1vw]"
                            />
                            <span className="text-sm">{option}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col justify-between w-full gap-[0.5vw]">
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                  Would you like updates from TABTech?
                </label>
                <div className="flex border-[#EFEFEF] border-1">
                  <input
                    type="text"
                    placeholder="Choose an option"
                    className="w-full placeholder:text-[#888888] p-[0.7vw] bg-[#FFFFFF]"
                  />
                  <div
                    onClick={() => {
                      setIsOpen3(!isOpen3);
                      setIsOpen2(false);
                      setIsOpen1(false);
                    }}
                  >
                    <img
                      src={dropdown}
                      alt="drop-down"
                      className={`w-[4vw] text-sm h-full cursor-pointer border-white bg-[#FFFFFF] border-b-1 border-t-1 border-r-1 p-[1.2vw] transition-transform duration-300 ease-in-out transform ${
                        isOpen3 ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                  {isOpen3 && (
                    <div className="absolute mt-1 w-fit pr-[12vw] bg-white border border-gray-300 rounded text-[#4F4F4F] shadow-lg z-10">
                      <ul className="flex flex-col p-2 gap-2">
                        {option3.map((option, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              checked={selected.includes(option)}
                              onChange={() => toggleOption(option)}
                              className="accent-[#4F4F4F] rounded bg-white border border-[#4F4F4F] w-[1vw] h-[1vw]"
                            />
                            <span className="text-sm">{option}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="mr-auto cursor-pointer px-[4vw] py-[1vw] mt-[3vw] sm:mt-[1vw] bg-[#E1781F]"
              >
                <p className="font-inter font-semibold text-base text-[#242424]">
                  Submit
                </p>
              </button>
            </form>
          </div>
        </div>
        <div className="sm:flex hidden w-full h-full bg-[#E7E7E7]" />
      </section>
      <LastSection />
    </>
  );
}
export default GetInvolved;
