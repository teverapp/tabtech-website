type TitleProps = {
  name: string;
};

function Title({ name }: TitleProps) {
  return (
    <section className="flex justify-between bg-[#242424] w-full flex items-start flex-col h-[25vw]">
      <div className="flex mt-[3vw] px-[10vw] h-[88%] w-full">
        <span className="font-anybody text-2xl sm:text-5xl mt-[10vw] font-semibold leading-[120%] text-[#E1781F]">
          {name}
        </span>
      </div>
      <div className="w-full h-[12%] bg-[url('./NavigationPattern.jpg')]" />
    </section>
  );
}
export default Title;
