import Title from "./Title";
import { Link as RouterLink } from "react-router-dom";
import LastSection from "./LastSection";
function Impact() {
  return (
    <>
      <Title name="Impact" />
      <section className="grid sm:grid-cols-2 grid-cols-1 justify-center items-center w-full py-[5vw] px-[10vw] gap-[4vw]">
        <div className="w-full sm:hidden flex h-[80vw] bg-[#E7E7E7]" />
        <div className="flex justify-center flex-col items-center w-full p-[2vw] gap-[3vw]">
          <div className="flex flex-col border-b-1 border-b-[#E7E7E7] pb-[2vw] gap-[0.1vw]">
            <div className="flex justify-center items-center text-[#4F4F4F] flex-col w-full gap-[0.3vw]">
              <span className="w-full font-inter text-xl leading-[120%]">
                TABTech’s programs and initiatives aim to create measurable,
                long-term impact across Africa:
              </span>
              <div className="w-full">
                <ul className="p-6 list-disc">
                  <li>
                    <p className="font-inter text-xl leading-[140%]">
                      Train and certify tens of thousands of tech professionals
                      in Africa.
                    </p>
                  </li>
                  <li>
                    <p className="font-inter text-xl leading-[140%]">
                      Support 100+ startups to scale, secure investment, and
                      thrive sustainably.
                    </p>
                  </li>
                  <li>
                    <p className="font-inter text-xl leading-[140%]">
                      Establish cross-border accreditation systems for skills
                      and certifications
                    </p>
                  </li>
                  <li>
                    <p className="font-inter text-xl leading-[140%]">
                      Build a trusted digital platform connecting innovators,
                      educators, and investors.
                    </p>
                  </li>
                  <li>
                    <p className="font-inter text-xl leading-[140%]">
                      Elevate Africa’s tech solutions on the global stage,
                      showing the world what African talent can achieve.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <RouterLink
              to="/get-involved"
              className="mr-auto px-[4vw] py-[1vw] border-1"
            >
              <p className="text-[#242424] font-inter font-semibold text-base">
                Get involved
              </p>
            </RouterLink>
          </div>
          <div className="flex justify-center text-[#4F4F4F] items-center flex-col w-full gap-[0.5vw]">
            <p className="w-full font-inter text-xl leading-[120%]">
              We track success through measurable KPIs, including:
            </p>
            <div className="w-full">
              <ul className="p-6 list-disc">
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    Number of talents trained and certified
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    Startups funded and scaled
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    Jobs created or sustained
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    Mentorship relationships formed
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    Growth of community chapters across Africa
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full hidden sm:flex h-full bg-[#E7E7E7]" />
      </section>
      <LastSection />
    </>
  );
}

export default Impact;
