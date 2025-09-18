import Title from "../components/Title";
import LastSection from "../components/LastSection";
function Programs() {
  return (
    <>
      <Title name="Programs" />
      <section className="flex sm:pr-[10vw] pr-[5vw] sm:pl-[12vw] pl-[5vw] text-center sm:text-start justify-center items-center w-full gap-[2vw] mt-[5vw]">
        <span className="font-inter text-2xl leading-[140%] text-[#4F4F4F]">
          TABTech’s programs are designed to equip, mentor, fund, and showcase
          Africa’s tech talent, spanning five pillars
        </span>
      </section>
      <section className="sm:px-[10vw] px-[5vw] flex flex-col  justify-center item-center py-[5vw] gap-[10vw]">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full gap-[2vw]">
          <div className="w-full h-[60vw] flex sm:hidden items-center justify-center">
            <div className="bg-center w-full h-full bg-cover bg-[url('/Programs1.jpg')]" />
          </div>
          <div className="flex-col flex gap-[1vw] p-[2vw]">
            <span className="font-anybody font-semibold text-3xl leading-[120%] text-[#242424]">
              Talent pipeline & skills development
            </span>
            <div className="flex justify-center flex-col items-center text-[#4F4F4F] w-full">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p className="font-inter text-[#4F4F4F] text-xl leading-[140%]">
                    <strong>Catch-them-Young:</strong> Early exposure to digital
                    literacy, coding, design thinking, and problem-solving for
                    students aged 7–26.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Scholarships & Upskilling:</strong> Fully or
                    partially funded training in AI, design, data, cloud, and
                    cybersecurity.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Community Learning Circles</strong> Blended learning
                    experiences in low-access communities.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Curriculum & Accreditation:</strong> Open-source,
                    locally relevant curricula with continent-wide recognition.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-full hidden sm:flex items-center justify-center">
            <div className="bg-center w-full h-full bg-cover bg-[url('/Programs1.jpg')]" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full gap-[2vw]">
          <div className="w-full h-[60vw] sm:h-full bg-[#E7E7E7]" />
          <div className="flex-col flex gap-[1vw] p-[2vw]">
            <span className="font-anybody font-semibold text-3xl leading-[120%] text-[#242424]">
              Mentorship & leadership development
            </span>
            <div className="flex justify-center flex-col items-center text-[#4F4F4F] w-full">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p className="font-inter text-[#4F4F4F] text-xl leading-[140%]">
                    <strong>Startup Mentorship Hub:</strong>: Match early-stage
                    founders with experienced tech leaders.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Tech Founders Accelerator:</strong> Guidance on
                    product-market fit, leadership, and investment readiness.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Governance & Board Readiness:</strong> Preparing
                    mid-career professionals for board-level positions.
                    readiness.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Leadership Coaching Circles:</strong> Peer-led
                    groups nurturing resilience, decision-making, and emotional
                    intelligence.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full gap-[2vw]">
          <div className="w-full h-[60vw] sm:hidden flex items-center justify-center">
            <div className="bg-center w-full h-full bg-cover bg-[url('/Programs2.jpg')]" />
          </div>
          <div className="flex-col flex gap-[1vw] p-[2vw]">
            <span className="font-anybody font-semibold text-3xl leading-[120%] text-[#242424]">
              Innovation & ecosystem building
            </span>
            <div className="flex justify-center flex-col items-center text-[#4F4F4F] w-full h-full">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p className="font-inter text-[#4F4F4F] text-xl leading-[140%]">
                    <strong>Tech Innovation Summit:</strong> Annual gathering
                    spotlighting African innovations.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Hackathons & Innovation Challenges: </strong> City
                    or sector-specific problem-solving events.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Community Chapters Network:</strong> Local hubs
                    fostering grassroots innovation. readiness.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Collaborative Innovation Labs:</strong> Co-creation
                    sessions for shared IP and pooled resources. emotional
                    intelligence.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-full hidden sm:flex items-center justify-center">
            <div className="bg-center w-full h-full bg-cover bg-[url('/Programs2.jpg')]" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full gap-[2vw] h-full">
          <div className="w-full h-[60vw] sm:h-full bg-[#E7E7E7]" />
          <div className="flex-col flex gap-[1vw] p-[2vw]">
            <span className="font-anybody font-semibold text-3xl leading-[120%] text-[#242424]">
              Funding & investment readiness
            </span>
            <div className="flex justify-center flex-col items-center text-[#4F4F4F] w-full">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p className="font-inter text-[#4F4F4F] text-xl leading-[140%]">
                    <strong>Tech Investment & Sponsorship Network: </strong>{" "}
                    Connect innovators to VCs, angel investors, and development
                    finance institutions.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Funding Bootcamps & Readiness Clinics:</strong>{" "}
                    Training on pitch decks, financial modeling, and valuations.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Grant & Impact Funding Labs:</strong> Support for
                    early-stage Africa-centric solutions. readiness.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Future Investment Vehicle:</strong> Feasibility
                    study for SPV or donor-advised fund to fund emerging
                    startups long-term.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full gap-[2vw]">
          <div className="flex sm:hidden w-full h-[60vw] bg-[#E7E7E7]" />
          <div className="flex-col flex gap-[1vw] p-[2vw]">
            <span className="font-anybody font-semibold text-3xl leading-[120%] text-[#242424]">
              Recognition & storytelling
            </span>
            <div className="flex justify-center flex-col items-center text-[#4F4F4F] w-full h-full">
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <p className="font-inter text-[#4F4F4F] text-xl leading-[140%]">
                    <strong>Tech Excellence Awards:</strong> Celebrating
                    outstanding innovators and ecosystem enablers.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Member Spotlight Series:</strong> Multimedia
                    storytelling of TABTech members’ journeys.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Youth-Led Media Projects:</strong> Empowering youth
                    to narrate their innovations with agency.
                  </p>
                </li>
                <li>
                  <p className="font-inter text-xl leading-[140%]">
                    <strong>Future Investment Vehicle:</strong> Feasibility
                    study for SPV or donor-advised fund to fund emerging
                    startups long-term.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="sm:flex hidden w-full h-full bg-[#E7E7E7]" />
        </div>
      </section>
      <LastSection />
    </>
  );
}
export default Programs;
