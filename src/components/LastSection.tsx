import { Link } from "react-router-dom";
function LastSection() {
  const options = [
    { title: "Get involved", path: "./get-involved" },
    { title: "Learn more", path: "./about-us" },
  ];

  return (
    <section className="flex gap-[4vw] flex-col py-[8vw] px-[10vw] sm:px-[25vw] justify-center items-center bg-[#242424] w-full">
      <div className="flex justify-center flex-col items-center w-full h-auto gap-2">
        <span className="text-center font-anybody font-semibold text-4xl text-[#E1781F] leading-[120%]">
          Be part of Africa’s tech future
        </span>
        <span className="text-center text-[#F9E8CC] font-inter text-xl leading-[100%]">
          Your involvement helps equip Africa’s tech talents with the tools,
          networks, and opportunities to create lasting, scalable solutions for
          the continent and beyond.
        </span>
      </div>
      <div className="flex flex-row h-auto w-auto gap-5">
        {options.map((items, index) => (
          <Link
            key={index}
            to={items.path}
            className={`${
              items.title === "Get involved" ? "bg-[#E1781F]" : "bg-transparent"
            } border-[#E1781F] border-1 w-full h-full text-nowrap p-[2vw] sm:p-[1vw] gap-[2vw]`}
          >
            <p
              className={`${
                items.title === "Get involved"
                  ? "text-[#242424]"
                  : "text-[#E1781F]"
              } font-inter text-sm sm:text-base font-semibold`}
            >
              {items.title}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
export default LastSection;
