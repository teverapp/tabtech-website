import Title from "./Title";
import { Link as ScrollLink } from "react-scroll";
import LastSection from "./LastSection";
function Shows() {
  return (
    <>
      <Title name="Shows" />
      <section className="flex flex-col justify-center items-center w-full px-[10vw] mt-[5vw] mb-[5vw] gap-[5vw]">
        <div
          id="first-show"
          className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full  gap-[2vw]"
        >
          <div className="flex sm:hidden w-full h-[80vw] bg-[#E7E7E7]" />
          <div className="flex flex-col  w-full pr-[2vw] py-[4vw] pl-[1vw] gap-[2vw]">
            <div className="flex flex-col justify-center items-center w-full gap-[1vw]">
              <p className="w-full font-anybody font-semibold text-3xl">
                The Underdog Logic
              </p>
              <p className="w-full text-[#4F4F4F] font-inter italic text-lg">
                Where rules are tested and underdogs take the lead.
              </p>
              <p className="w-full text-[#4F4F4F] font-inter text-base leading-[140%]">
                From self-taught designers to first-time founders, this hybrid
                docu-drama follows diverse talents navigating life-changing
                decisions in the evolving global tech landscape. It’s about
                resilience, ingenuity, and redefining success.
              </p>
            </div>
            <ScrollLink
              to="first-show"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className="cursor-pointer mr-auto px-[4vw] py-[1vw] mt-[3vw] sm:mt-[1vw] border-1"
            >
              <span className="font-inter font-semibold text-base">
                Watch show
              </span>
            </ScrollLink>
          </div>
          <div className="sm:flex hidden w-full h-full bg-[#E7E7E7]" />
        </div>
        <div
          id="second-show"
          className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full  gap-[2vw]"
        >
          <div className="w-full sm:h-full h-[80vw] bg-[#E7E7E7]" />
          <div className="flex flex-col  w-full pr-[2vw] py-[4vw] pl-[1vw] gap-[2vw]">
            <div className="flex flex-col justify-center items-center w-full gap-[1vw]">
              <p className="w-full font-anybody font-semibold text-3xl">
                Tech Through Africa’s Lens
              </p>
              <p className="w-full text-[#4F4F4F] font-inter italic text-lg">
                Seeing tech and innovation through our own eyes.
              </p>
              <p className="w-full text-[#4F4F4F] font-inter text-base leading-[140%]">
                A visually rich series blending personal storytelling with
                practical explainers. The show spotlights African innovations,
                demystifies emerging technologies, and provides context-driven
                insights for aspiring tech leaders across the continent.
              </p>
            </div>
            <ScrollLink
              to="second-show"
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              className="mr-auto px-[4vw] cursor-pointer py-[1vw] mt-[3vw] sm:mt-[1vw] border-1"
            >
              <span className="font-inter font-semibold text-base">
                Watch show
              </span>
            </ScrollLink>
          </div>
        </div>
      </section>
      <LastSection />
    </>
  );
}

export default Shows;
