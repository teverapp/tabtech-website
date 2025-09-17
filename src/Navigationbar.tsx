import TabTech from "./assets/TabTech.svg";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
function Navigationbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sections = [
    { title: "Home", path: "/" },
    { title: "About us", path: "./about-us" },
    { title: "Our programs", path: "./our-programs" },
    { title: "Shows", path: "./shows" },
    { title: "Impact", path: "./impact" },
    { title: "Get involved", path: "./get-involved" },
    { title: "Contact", path: "./contact" },
  ];

  return (
    <>
      <nav className="fixed w-full bg-white px-[3vw] shadow flex justify-between items-center lg:h-[6vw] sm:px-[10vw] sm:py-0 z-50">
        <div className="flex w-auto h-auto gap-[10vw] lg:gap-[2vw] justify-center items-center">
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <div className="flex w-[10vw] h-full items-center justify-center">
            <img src={TabTech} alt="TabTechLogo" />
            <p className="font-bold text-sm leading-none text-center font-inter h-auto w-auto text-[#242424] text-xl">
              TABTECH
            </p>
          </div>
          {sections.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `cursor-pointer lg:flex justify-center hover:text-[#242424] items-center pt-2 pb-2 border-b-2 transition ${
                  isActive
                    ? "border-[#E1781F] text-[#242424]"
                    : "border-transparent text-[#6D6D6D]"
                } hover:border-[#E1781F] hidden`
              }
            >
              <p className="font-inter font-semibold leading-none text-center">
                {item.title}
              </p>
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/donate"
          className={({ isActive }) =>
            `flex justify-center items-center bg-[#242424] h-auto gap-2  text-center p-[5vw] sm:p-[2.5vw] w-auto" ${
              isActive ? "bg-[#E1781F]" : "bg-[#242424]"
            } hover:bg-[#E1781F]`
          }
        >
          <p className="font-inter font-semibold text-base leading-none tracking-[-0.025em] text-[#F6F6F6]">
            Donate
          </p>
        </NavLink>
      </nav>
      {isOpen && (
        <div className="lg:hidden absolute top-[12vw] fixed z-50 left-0 w-full bg-white shadow-md flex flex-col items-start px-[10vw] py-4 gap-1 z-40">
          {sections.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `w-full p-2 cursor-pointer flex py-[1vw] transition ${
                  isActive
                    ? "border-b border-[#E1781F] text-[#E1781F]"
                    : "text-[#6D6D6D]"
                } lg:hidden`
              }
            >
              <p className="font-inter font-semibold leading-none text-center text-sm text-[#6D6D6D]">
                {item.title}
              </p>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
}
export default Navigationbar;
