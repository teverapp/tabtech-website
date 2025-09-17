//import { useState } from "react";
import LastSection from "./LastSection";
import { Link } from "react-router-dom";

function LandingPage() {
  const options = [
    { title: "Get involved", path: "get-involved" },
    { title: "Learn more", path: "about-us" },
  ];
  const features = [
    {
      title: "The Underdog Logic",
      detail1: "Where rules are tested and underdogs take the lead.",
      detail2:
        "From self-taught designers to first-time founders, this hybrid docu-drama follows diverse talents navigating life-changing decisions in the evolving global tech landscape. It’s about resilience, ingenuity, and redefining success.",
    },
    {
      title: "Tech Through Africa’s Lens",
      detail1: "Tech Through Africa’s Lens",
      detail2:
        "A visually rich, thought-provoking series blending personal storytelling with practical explainers. We showcase African innovations, unpack emerging technologies, and offer honest, context-driven insights for the next generation of tech leaders.",
    },
  ];

  const role1 = [
    "Equip tech talents with future-ready skills and accredited credentials",
    "Mentor founders, product leaders, and innovators to investment readiness",
    "Build collaboration through summits, hackathons, and innovation labs",
  ];

  const role2 = [
    "Amplify African tech stories to inspire and attract opportunities",
    "Connect innovators with funding networks and strategic partners",
  ];

  return (
    <>
      <section className="flex items-center flex-col justify-center w-full bg-[url('/Pattern1.jpg')] bg-cover bg-center">
        <div className="flex items-center px-[4vw] py-[15vw] justify-center w-full h-full inset-0 bg-[#FFFFFF]/90">
          <div className="flex justify-center items-center flex-col w-full h-auto gap-[4vw]">
            <div className="flex flex-col justify-between w-full h-auto gap-[2vw] items-center">
              <span className="text-4xl lg:text-6xl font-anybody font-semibold text-center">
                Shifting Mindsets, <br /> Accelerating Africa’s Innovation.
              </span>
              <span className="w-full h-auto font-inter text-xl sm:text-2xl leading-[100%] text-center text-[#4F4F4F]">
                By 2050, Africa will lead the world in youth talent, yet too
                many
                <br /> ideas stall without mentorship, funding, and recognition.
              </span>
            </div>
            <div className="flex flex-row h-auto w-auto gap-5">
              {options.map((items, index) => (
                <Link
                  to={items.path}
                  key={index}
                  className={`${
                    items.title === "Get involved"
                      ? "bg-black"
                      : "bg-transparent"
                  } w-full h-full text-nowrap border-1 p-[1vw] gap-[2vw]`}
                >
                  <p
                    className={`${
                      items.title === "Get involved"
                        ? "text-white"
                        : "text-black"
                    } font-inter text-base font-semibold`}
                  >
                    {items.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-center bg-cover w-full bg-black bg-[url('/NavigationPattern.jpg')] bg-cover bg-center">
        <div className="flex w-full px-[2vw] py-[8vw] items-center justify-center inset-0 bg-[#242424E5]/90 flex flex-col gap-[2vw] text-center">
          <span className="font-anybody text-[#E1781F] font-semibold text-4xl leading-[120%]">
            TABTech bridges these gaps.
          </span>
          <span className="font-inter text-[#F9E8CC] text-xl leading-[100%]">
            We connect Africa’s tech professionals, startups, investors,
            <br />
            and educators to transform promising ideas into scalable,
            <br />
            sustainable solutions, designed for Africa’s realities.
          </span>
        </div>
      </section>
      <section className="grid grid-cols-[1fr_6fr_1fr] bg-[#242424] justify-center items-center w-full">
        <div className="bg-center bg-cover h-full bg-[url('/NavigationPattern.jpg')]" />
        <div className="flex flex-col h-auto gap-[4vw] items-center justify-center p-[5vw]">
          <div className="flex justify-center text-center items-center w-full">
            <p className="text-[#E1781F] font-anybody font-semibold text-4xl">
              Our impact goals by 2030
            </p>
          </div>
          <div className="grid grid-cols-1 justify-center w-fit h-auto gap-5">
            <div className="grid justify-center w-fit h-auto grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="border-[#E1781F] w-full h-auto p-5 gap-[2vw] border sm:h-full border-1">
                <p className="font-inter text-[#F9E8CC] font-semibold text-[16px] leading-[140%]">
                  Train and certify tens of thousands of <br />
                  tech professionals in Africa
                </p>
              </div>
              <div className="border-[#E1781F] w-full h-auto p-5 gap-8 sm:h-full border border-1">
                <p className="font-inter text-[#F9E8CC] font-semibold text-[16px] leading-[140%]">
                  Support 100+ startups to scale and <br />
                  secure investment
                </p>
              </div>
              <div className="border-[#E1781F] w-full h-auto sm:h-full p-5 gap-8 border border-1">
                <p className="font-inter text-[#F9E8CC] font-semibold text-[16px] leading-[140%]">
                  Create cross-border accreditation for <br />
                  tech talent
                </p>
              </div>
            </div>
            <div className="sm:px-[12vw] grid w-full grid-cols-1 sm:grid-cols-2 h-auto gap-[2vw]">
              <div className="border-[#E1781F] w-full sm:h-full h-auto p-5 gap-8 border border-1">
                <p className="font-inter text-[#F9E8CC] font-semibold text-[16px] leading-[140%]">
                  Establish trusted platforms connecting <br />
                  innovators, investors, and educators
                </p>
              </div>
              <div className="border-[#E1781F] w-full sm:h-full h-auto p-5 gap-8 border border-1">
                <p className="font-inter text-[#F9E8CC] font-semibold text-[16px] leading-[140%]">
                  Position Africa’s tech solutions on the <br />
                  global stage
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-center bg-cover h-full bg-[url('/NavigationPattern.jpg')]" />
      </section>
      <section className="w-full bg-[#FAFAFA] bg-[url('/Pattern1.jpg')] bg-cover bg-center">
        <div className="p-[8vw] flex justify-center items-center w-full h-full inset-0 bg-[#FAFAFA]/95 flex-col gap-[4vw]">
          <p className="font-anybody font-semibold sm:text-5xl text-4xl leading-[120%] text-[#242424]">
            The stories we tell
          </p>
          <div className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 w-fit h-auto gap-[4vw]">
            {features.map((items, index) => (
              <div
                key={index}
                className="grid justify-center items-center grid-cols-1 w-full bg-white h-auto p-[10vw] sm:p-[3vw] gap-[2vw]"
              >
                <div className="grid justify-center items-center grid-col-1 w-fit h-auto gap-[2vw]">
                  <div className="w-full sm:h-[12vw] h-[20vw] bg-[#E7E7E7]" />
                  <div className="flex justify-center flex-col w-fit h-auto gap-[1vw]">
                    <span className="font-anybody font-semibold sm:text-2xl text-xl leading-[100%]">
                      {items.title}
                    </span>
                    <span className="font-inter italic text-base sm:text-lg leading-[100%]">
                      {items.detail1}
                    </span>
                    <span className="font-inter leading-[100%] text-sm">
                      {items.detail2}
                    </span>
                  </div>
                </div>
                <Link
                  to={"./shows"}
                  className="cursor-pointer flex justify-center items-center w-[40%] h-auto border-1 p-[1vw]"
                >
                  <p className="font-inter font-semibold text-base">
                    Watch show
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-[50vw] sm:h-[20vw] bg-cover bg-center bg-[url('/NavigationPattern.jpg')]" />
      <section className="gap-[4vw] sm:gap-[2vw] flex flex-col justify-center items-center w-full bg-[#FAFAFA] p-[5vw]">
        <span className="font-anybody font-semibold text-4xl leading-[120%] text-[#242424]">
          What we do
        </span>
        <div className="grid grid-cols-1 justify-center w-fit h-auto gap-5">
          <div className="grid justify-center w-fit h-auto grid-cols-1 sm:grid-cols-3 gap-5">
            {role1.map((items, index) => (
              <div
                key={index}
                className="w-fit h-auto border-1 border-[#D1D1D1] p-5 gap-2"
              >
                <p className="text-[#4F4F4F] font-inter font-semibold text-base leading-[140%]">
                  {items}
                </p>
              </div>
            ))}
          </div>
          <div className="sm:px-[12vw] grid w-full grid-cols-1 sm:grid-cols-2 h-auto gap-[2vw]">
            {role2.map((items, index) => (
              <div
                key={index}
                className="w-fit h-auto border-1 border-[#D1D1D1] p-[2vw] gap-2"
              >
                <p className="text-[#4F4F4F] h-auto font-inter font-semibold text-base leading-[140%] ">
                  {items}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Link
          to={"./get-involved"}
          className="cursor-pointer flex justify-center items-center p-[2vw] sm:p-[1vw] bg-[#242424] text-center gap-5"
        >
          <p className="font-inter font-semibold text-base text-[#F6F6F6]">
            Get involved
          </p>
        </Link>
      </section>
      <LastSection />
    </>
  );
}
export default LandingPage;
