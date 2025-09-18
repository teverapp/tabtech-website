import Title from "../components/Title";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function AboutUs() {
  const options = [
    { title: "Get involved", path: "/get-involved", type: "route" },
    { title: "Learn more", path: "about-section", type: "scroll" },
  ];

  const coreValues = [
    {
      point: "Africa-Centricity",
      detail:
        " We build and support solutions designed for Africa’s cultures, economies, and infrastructures.",
    },
    {
      point: "Innovation:",
      detail:
        " We believe in creative problem-solving through leveraging technology, especially when it simplifies complex challenges in practical, cost-effective ways.",
    },
    {
      point: "Unification & Standardization",
      detail:
        " We connect fragmented efforts, encouraging cooperation, even in spite of access constraints.",
    },
    {
      point: "Collaboration",
      detail: " We actively seek partnerships that expand reach and impact",
    },
    {
      point: "Partnership:",
      detail:
        " We build lasting, mutually beneficial relationships with individuals, organizations, and institutions.",
    },
    {
      point: "Resource Efficiency",
      detail:
        " We promote shared infrastructure, tools, and knowledge to reduce redundancy and increase accessibility.",
    },
    {
      point: "Transparency",
      detail: " We are open about our processes and outcomes.",
    },
    {
      point: "Accountability",
      detail:
        " We commit to measurable results, regular audits, and a culture of continuous improvement.",
    },
    {
      point: "Common Good",
      detail:
        " We have zero-tolerance for solutions that cause destruction to human life or promote natural habitat decline.",
    },
  ];
  return (
    <>
      <Title name="About us" />
      <section className="grid grid-cols-1 sm:grid-cols-2 sm:px-[10vw] px-[5vw] pt-[6vw] w-full gap-[4vw] justify-center items-center">
        <div className="w-full h-[80vw] flex sm:hidden items-center justify-center ">
          <div className="bg-cover w-full h-full bg-center bg-[url('/FirstAboutImage.jpg')]" />
        </div>
        <div className="flex justify-center items-start flex-col w-full h-auto gap-[1vw]">
          <p className="font-inter text-xl leading-[140%] text-[#4F4F4F]">
            By 2050, Africa will have the largest youth population in the world,
            with millions of designers, engineers, innovators, entrepreneurs,
            product managers, and problem-solvers. Yet too many brilliant ideas
            stall before they start. Access to mentorship, funding, and credible
            credentials is fragmented. Talents remain under-recognized.
            Potential is left untapped.
          </p>
          <p className="text-[#4F4F4F] font-inter text-xl leading-[140%]">
            TABTech exists to change that.
          </p>
          <p className="text-[#4F4F4F] font-inter text-xl leading-[140%]">
            We are a nonprofit technology ecosystem enabler, connecting Africa’s
            tech professionals, startups, educators, and investors. Our programs
            focus on building solutions for Africa, by Africa, fostering a
            mindset that homegrown innovation is not just possible, but
            necessary.
          </p>
        </div>
        <div className="w-full sm:flex h-full hidden flex items-center justify-center ">
          <div className="bg-cover w-full h-full bg-center bg-[url('/FirstAboutImage.jpg')]" />
        </div>
      </section>
      <section
        id="about-section"
        className="flex flex-col pt-[5vw] gap-[2vw] px-[5vw] sm:px-[10vw] justify-center items-center w-full"
      >
        <div className="bg-[#F9E8CC] flex justify-center px-[10vw] py-[2vw] items-center flex-col w-full gap-[1vw] text-center">
          <span className="font-anybody font-semibold text-2xl text-[#242424]">
            Our vision
          </span>
          <span className="font-inter text-xl leading-[140%] text-[#4F4F4F]">
            A unified, forward-thinking tech ecosystem where Africa’s talents
            collaborate across disciplines, break silos, and lead
            self-sustaining innovation by 2030.
          </span>
        </div>
        <div className="flex justify-center px-[10vw] py-[2vw] items-center flex-col w-full gap-[1vw] text-center bg-[#E5F0F9]">
          <span className="font-anybody font-semibold text-2xl text-[#242424]">
            Our mission
          </span>
          <span className="font-inter text-xl leading-[140%] text-[#4F4F4F]">
            A unified, forward-thinking tech ecosystem where Africa’s talents
            collaborate across disciplines, break silos, and lead
            self-sustaining innovation by 2030.
          </span>
        </div>
      </section>
      <section className="grid sm:grid-cols-2 grid-cols-1 justify-center item-center w-full mt-[8vw] px-[5vw] sm:px-[10vw]">
        <div className="w-full h-[60vw] flex items-center justify-center">
          <div className="w-full h-full bg-cover bg-[url('/SecondAboutImage.jpg')] bg-center" />
        </div>
        <div className="flex flex-col justify-center items-center w-full h-fit py-[1vw] px-[3vw] gap-[0.5vw]">
          <span className="font-anybody font-semibold text-2xl">
            Core Values
          </span>
          <div className="w-full h-fit gap-5">
            {coreValues.map((items, index) => (
              <li key={index} className="flex">
                <p className="text-[#4F4F4F] font-inter text-xl">
                  <strong className="font-bold">{items.point}</strong>&nbsp;
                  {items.detail}
                </p>
              </li>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full h-[40%] bg-black bg-[url('/Pattern3.jpg')] bg-cover bg-center mt-[8vw]">
        <div className="flex w-full h-full flex-col items-center justify-center inset-0 bg-[#242424E5]/95 gap-[5vw] p-[4vw]">
          <div className="flex justify-center flex-col items-center w-full h-auto gap-[2vw] px-[20vw] text-center">
            <span className="font-anybody font-semibold text-4xl text-[#E1781F] leading-[120%]">
              Our Approach
            </span>
            <span className="text-[#F9E8CC] font-inter text-xl leading-[100%]">
              Through strategic programs, ecosystem-building events, and
              storytelling, TABTech ensures that African talents not only
              innovate but thrive in a supportive, continent-wide network.
            </span>
          </div>
          <div className="flex h-auto justify-center items-center w-full gap-[4vw]">
            <div className="flex flex-row gap-5">
              {options.map((item, index) =>
                item.type === "route" ? (
                  <RouterLink
                    to={item.path}
                    key={index}
                    className={`${
                      item.title === "Get involved"
                        ? "bg-[#E1781F]"
                        : "bg-transparent"
                    } border-[#E1781F] cursor-pointer border w-full h-full text-nowrap p-[1vw]`}
                  >
                    <p
                      className={`${
                        item.title === "Get involved"
                          ? "text-[#242424]"
                          : "text-[#E1781F]"
                      } font-inter text-base font-semibold`}
                    >
                      {item.title}
                    </p>
                  </RouterLink>
                ) : (
                  <ScrollLink
                    to={item.path}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    key={index}
                    className="border-[#E1781F] cursor-pointer border text-[#E1781F] w-full h-full text-nowrap p-[1vw]"
                  >
                    {item.title}
                  </ScrollLink>
                )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
