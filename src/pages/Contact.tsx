import Title from "../components/Title";
import LastSection from "../components/LastSection";
function Contact() {
  return (
    <>
      <Title name="Contact" />
      <section className="grid sm:grid-cols-2 grid-cols-1 gap-[2vw] w-full py-[5vw] px-[5vw] sm:px-[10vw] justify-center items-center">
        <div className="sm:hidden flex w-full h-[100vw] bg-[#E7E7E7]" />
        <div className="flex flex-col justify-center w-full p-[2vw] gap-[5vw] sm:gap-[2vw] items-center">
          <div className="gap-[2vw] flex flex-col justify-center w-full text-[#4F4F4F] border-b-1 border-b-[#E7E7E7] pb-[1vw]">
            <span className="font-inter text-xl leading-[120%]">
              We’d love to hear from you. Reach out to learn more, explore
              collaborations, or offer strategic guidance.
            </span>
            <span className="text-[#E1781F] font-inter font-semibold text-base leading-[120%]">
              <a
                href="mailto:partnership@tabtechafrica.org"
                className="hover:underline"
              >
                partnership@tabtechafrica.org
              </a>
              ,{" "}
              <a
                href="mailto:info@tabtechafrica.org"
                className="hover:underline"
              >
                info@tabtechafrica.org
              </a>
            </span>
          </div>
          <div className="flex flex-col w-full bg-[#FDF7ED] p-[2vw] gap-[3vw] justify-center">
            <span className="font-inter font-bold text-lg leading-[120%] text-[#4F4F4F]">
              Or use the form below:
            </span>
            <form className=" bg-[#FDF7ED] flex flex-col justify-center w-full gap-[2vw] items-center">
              <div className="flex flex-col justify-between w-full gap-[1vw]">
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
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
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
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
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                  Phone number (optional)
                </label>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  className="w-full rounded-lg placeholder:text-[#888888] border-[#EFEFEF] border-1 p-[1vw] bg-[#FFFFFF]"
                />
              </div>
              <div className="flex flex-col justify-between w-full gap-[1vw]">
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                  Subject (Title)
                </label>
                <input
                  type="text"
                  placeholder="Enter the subject of your message"
                  required
                  className="w-full rounded-lg placeholder:text-[#888888] border-[#EFEFEF] border-1 p-[1vw] bg-[#FFFFFF]"
                />
              </div>
              <div className="flex flex-col justify-between w-full gap-[1vw]">
                <label className="font-inter text-[#242424] font-semibold text-sm leading-[140%]">
                  Message(optional)
                </label>
                <textarea
                  placeholder="Start typing..."
                  className="w-full h-[15vw] placeholder:text-[#888888] rounded-lg border border-[#EFEFEF] p-[1vw] bg-[#FFFFFF] resize-none"
                />
              </div>
              <button
                type="submit"
                className="cursor-pointer mr-auto px-[4vw] py-[1vw] mt-[3vw] sm:mt-[1vw] bg-[#E1781F]"
              >
                <p className="font-inter font-semibold text-base text-[#242424]">
                  Submit
                </p>
              </button>
            </form>
          </div>
        </div>
        <div className="hidden sm:flex w-full h-full bg-[#E7E7E7]" />
      </section>
      <LastSection />
    </>
  );
}
export default Contact;
