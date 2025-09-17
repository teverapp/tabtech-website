import TabTech from "./assets/TabTech.svg";
import tiktok from "./assets/tiktok.svg";
import twitter from "./assets/twitter.svg";
import youtube from "./assets/youtube.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import linkedin from "./assets/linkedin.svg";
import { NavLink } from "react-router-dom";

function Footer() {
  const explore = [
    { title: "About us", path: "./about-us" },
    { title: "Our programs", path: "./our-programs" },
    { title: "Shows", path: "./shows" },
    { title: "Impact", path: "./impact" },
    { title: "Get involved", path: "./get-involved" },
    { title: "Contact", path: "./contact" },
    { title: "Donate", path: "./donate" },
  ];

  return (
    <>
      <section className="flex flex-col justify-center px-[8vw] py-[3vw] items-center bg-[#FAFAFA] w-full sm:gap-[2vw] gap-[4vw]">
        <div className="grid grid-cols-2 sm:grid-cols-3 justify-center items-center w-full h-auto gap-[5vw]">
          <div className="flex gap-[1vw] flex-col h-full w-auto">
            <div className="flex items-center w-full h-auto gap-[0.5vw]">
              <img src={TabTech} alt="TabTechLogo" className="w-auto h-[4vw]" />
              <p className="sm:text-2xl text-base font-bold leading-none font-inter text-[#242424]">
                TABTECH
              </p>
            </div>
            <span className="font-inter text-sm text-[#4F4F4F] leading-[140%]">
              Uniting Africa’s tech talent, innovators, and investors to turn
              bold ideas into lasting solutions.
            </span>
          </div>
          <div className="flex justify-center flex-col w-full h-auto items-end">
            <div className="flex flex-col text-[#4F4F4F] w-auto h-auto justify-center sm:items-start items-end gap-[0.5vw]">
              <span className="font-inter mb-[1vw] font-bold text-sm leading-[140%] text-[#B0B0B0]">
                Explore
              </span>
              {explore.map((items, index) => (
                <NavLink
                  key={index}
                  to={items.path}
                  className={({ isActive }) =>
                    `cursor-pointer lg:flex hover:text-[#242424] justify-center items-center border-b-2 transition ${
                      isActive
                        ? "border-[#E1781F] text-[#242424]"
                        : "border-transparent text-[#6D6D6D]"
                    } hover:border-[#E1781F] hidden`
                  }
                >
                  <p className="font-inter font-semibold text-sm leading-[140%]">
                    {items.title}
                  </p>
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex gap-[2vw] flex-col w-full h-full">
            <div className="flex flex-col sm:items-end items-start w-full h-auto gap-[2vw] ml-auto">
              <p className="font-inter text-[#B0B0B0] font-bold text-sm leading-[140%]">
                Contact us
              </p>
              <div className="flex flex-col sm:items-end items-start h-auto w-auto gap-[0.5vw]">
                <p className="font-inter font-semibold text-sm leading-[140%] text-[#4F4F4F]">
                  hello@tabtech.org
                </p>
                <p className="font-inter font-semibold text-sm leading-[140%] text-[#4F4F4F]">
                  [City, Country]
                </p>
              </div>
            </div>
            <div className="flex w-fit h-auto items-end gap-[1vw] ml-auto">
              <img src={linkedin} alt="linkedIn" className="w-auto h-auto" />
              <img src={youtube} alt="Youtube" className="w-auto h-auto" />
              <img src={tiktok} alt="Tiktok" className="w-auto h-autto" />
              <img src={instagram} alt="Instagram" className="w-auto h-auto" />
              <img src={facebook} alt="Facebook" className="w-auto h-auto" />
              <img src={twitter} alt="Twitter" className="w-auto h-auto" />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full h-auto justify-between">
          <p className="font-inter font-semibold text-[#6D6D6D] text-sm leading-[140%]">
            © 2025 TABTech. All rights reserved
          </p>
          <p className="font-inter font-semibold text-sm text-[#6D6D6D] leading-[140%]">
            Privacy Policy | Terms & Conditions
          </p>
        </div>
      </section>
      <section className="w-full h-[20vw] bg-[url('./NavigationPattern.jpg')]" />
    </>
  );
}
export default Footer;
