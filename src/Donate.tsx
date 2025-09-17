import Title from "./Title";
import dropdown from "./assets/dropdown.svg";
import LastSection from "./LastSection";
function Donate() {
  return (
    <>
      <Title name="Donate to TABTech" />
      <section className="text-[#4F4F4F] text-center sm:text-start flex w-full px-[10vw] gap-[2vw] mt-[5vw] flex-col">
        <span className="font-inter text-2xl leading-[140%]">
          Africa’s tech future is being built today by young innovators,
          designers, engineers, and entrepreneurs across the continent.But too
          many ideas stall before they start.
        </span>
        <span className="font-inter text-2xl leading-[140%]">
          Your support helps break barriers and create pathways for Africa’s
          brightest talents.
        </span>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center w-full gap-[5vw] px-[10vw] sm:mt-[5vw] mt-[10vw]">
        <div className="w-full sm:hidden h-[60vw] bg-[#E7E7E7]" />
        <div className="flex w-full gap-[2vw] flex-col pr-[2vw]">
          <span className="font-anybody font-semibold text-3xl leading-[120%] text-[#242424]">
            Why Donate?
          </span>
          <div className="flex justify-between flex-col text-[#4F4F4F] w-full">
            <p className="font-inter text-[#4F4F4F] text-xl leading-[140%]">
              Your contribution will:
            </p>
            <ul className="list-disc pl-6 text-xl space-y-2">
              <li>
                <p className="font-inter text-[#4F4F4F] leading-[140%]">
                  Equip tech talents with future-ready skills and accredited
                  credentials
                </p>
              </li>
              <li>
                <p className="font-inter leading-[140%]">
                  Support startups and founders to reach investment readiness
                </p>
              </li>
              <li>
                <p className="font-inter leading-[140%]">
                  Fund summits, hackathons, and innovation labs that foster
                  collaboration
                </p>
              </li>
              <li>
                <p className="font-inter leading-[140%]">
                  Amplify African innovation stories to a global audience
                </p>
              </li>
              <li>
                <p className="font-inter leading-[140%]">
                  Build platforms that connect innovators, investors, and
                  educators
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full hidden h-full sm:flex bg-[#E7E7E7]" />
      </section>
      <section className="flex pt-[7vw] pb-[5vw] px-[10vw] sm:px-[20vw] flex-col justify-center items-center mt-[10vw] w-full mt-[10vw] sm:mt-[5vw] bg-[#FDF7ED] gap-[2vw]">
        <span className="font-semibold font-anybody text-[#242424] text-3xl leading-[120%]">
          Ways to give
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full flex flex-col justify-center items-center gap-[2vw]">
          <div className="flex px-[2vw] sm:px-[1vw] pt-[1vw] flex-col w-full bg-[#F9E8CC] h-[40vw] pb-[4vw] sm:h-full">
            <span className="font-anybody font-semibold text-xl">
              One-time donation
            </span>
            <span className="font-inter text-[18px] text-[#4F4F4F] leading-[140%]">
              Make an immediate <br />
              impact today.
            </span>
          </div>
          <div className="flex px-[2vw] sm:px-[1vw] pt-[1vw] pb-[4vw] flex-col w-full bg-[#F9E8CC] sm:h-full h-[40vw]">
            <span className="font-anybody text-[#242424] font-semibold text-xl">
              Monthly giving
            </span>
            <span className="font-inter text-lg text-[#4F4F4F] leading-[140%]">
              Become a long-term <br />
              partner in Africa’s tech <br />
              transformation.
            </span>
          </div>
          <div className="flex sm:px-[1vw] pt-[1vw] px-[2vw] pb-[4vw] flex-col w-full bg-[#F9E8CC] sm:h-full h-[40vw]">
            <span className="font-anybody font-semibold text-xl">
              Corporate & institutional giving
            </span>
            <span className="font-inter text-lg text-[#4F4F4F] leading-[140%]">
              Sponsor programs, events, or infrastructure to scale your impact.
            </span>
          </div>
          <div className="flex sm:px-[1vw] px-[2vw] pt-[1vw] pb-[4vw] flex-col w-full bg-[#F9E8CC] sm:h-full h-[40vw]">
            <span className="font-anybody text-[#242424] font-semibold text-xl">
              In-kind support
            </span>
            <span className="font-inter text-lg text-[#4F4F4F] leading-[140%]">
              Offer resources,
              <br />
              expertise, or tools that
              <br />
              empower emerging talent.
            </span>
          </div>
        </div>
      </section>
      <section className="w-[82%] p-[4vw] mt-[5vw] border-1 border-[#E7E7E7] mx-[8vw] gap-[2vw] flex justify-center items-center flex-col">
        <span className="font-anybody font-semibold text-2xl text-[#4F4F4F] leading-[140%]">
          Transparency & accountability
        </span>
        <span className="font-inter text-[18px] text-[#4F4F4F] leading-[140%]">
          TABTech is committed to full transparency. All donations are tracked,
          and impact reports are shared regularly. Your support directly funds
          programs that unlock Africa’s tech potential.
        </span>
      </section>
      <section className="px-[10vw] py-[5vw] grid grid-cols-1 sm:grid-cols-2 gap-[4vw] w-full justify-center items-center">
        <div className="lg:hidden flex w-full h-[100vw] bg-[#E7E7E7]" />
        <div className="flex flex-col justify-center  w-full h-full p-[2vw] gap-[5vw] bg-[#FDF7ED]">
          <span className="font-inter font-bold text-xl leading-[120%]">
            Donation form
          </span>
          <form className="w-full h-full gap-[1vw] flex justify-center flex-col">
            <div className="flex flex-col justify-between w-full gap-[1vw]">
              <label className="w-full font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                Full name/ Organization name
              </label>
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full rounded-lg placeholder:text-[#888888] border-[#EFEFEF] border-1 p-[1vw] bg-[#FFFFFF]"
              />
            </div>
            <div className="flex flex-col justify-between w-full gap-[1vw]">
              <label className="w-full font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                Enter email address
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                required
                className="w-full rounded-lg placeholder:text-[#888888] border-[#EFEFEF] border-1 p-[1vw] bg-[#FFFFFF]"
              />
            </div>
            <div className="flex flex-col justify-between w-full gap-[1vw]">
              <label className="w-full font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                Phone number (optional)
              </label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full rounded-lg placeholder:text-[#888888] border-[#EFEFEF] border-1 p-[1vw] bg-[#FFFFFF]"
              />
            </div>
            <div className="flex flex-col justify-between w-full gap-[1vw]">
              <label className="w-full font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                Donation amount
              </label>
              <div className="flex">
                <input
                  type="text"
                  required
                  placeholder="Choose an option"
                  className="w-full rounded-l-lg placeholder:text-[#888888] border-[#EFEFEF] border-1 p-[1vw] bg-[#FFFFFF]"
                />
                <img
                  src={dropdown}
                  alt="drop-down"
                  className="w-[4vw] cursor-pointer h-full border-white bg-[#FFFFFF] border-b-1 border-t-1 border-r-1 p-[1.2vw]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between w-full gap-[1vw]">
              <label className="w-full font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                Donation frequency
              </label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Choose an option"
                  className="w-full rounded-l-lg cursor-pointer placeholder:text-[#888888] border-[#EFEFEF] border-1 p-[1vw] bg-[#FFFFFF]"
                />
                <img
                  src={dropdown}
                  alt="drop-down"
                  className="w-[4vw] h-full cursor-pointer border-white bg-[#FFFFFF] border-b-1 border-t-1 border-r-1 p-[1.2vw]"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between w-full gap-[1vw]">
              <label className="w-full font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                Message(optional)
              </label>
              <textarea
                placeholder="Start typing..."
                className="w-full h-[30vw] sm:h-[10vw] placeholder:text-[#888888] border border-[#EFEFEF] p-[2vw] bg-[#FFFFFF] resize-none"
              />
            </div>
            <button
              type="submit"
              className="mr-auto px-[4vw] py-[1vw] cursor-pointer mt-[3vw] sm:mt-[1vw] bg-[#E1781F]"
            >
              <p className="font-inter font-semibold text-base text-[#242424]">
                Submit
              </p>
            </button>
          </form>
        </div>
        <div className="lg:flex hidden w-full h-full bg-[#E7E7E7]" />
      </section>
      <LastSection />
    </>
  );
}
export default Donate;
