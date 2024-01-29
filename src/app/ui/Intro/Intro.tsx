"use client";

import ImageComponent from "../components/ImageComponent/ImageComponent";

export default function Intro() {
  return (
    <div className="my-10 py-10 border border-pink-50 shadow-pink-200 shadow-md mx-4 lg:py-[60px] gap-6 lg:gap-6 lg:px-20 flex flex-col-reverse items-center  lg:flex-row lg:justify-between">
      <div className="px-4 ">
        <div className="flex-col flex items-center lg:items-start ">
          <div className="flex gap-2">
            <div className=" text-2xl lg:text-3xl font-normal leading-8 lg:leading-[56px] tracking-[-0.96px]">
              Hello
            </div>
            <div className=" text-2xl lg:text-3xl font-normal leading-8 lg:leading-[56px] tracking-[-0.96px]">
              I'm{" "}
            </div>
            <div className=" text-2xl lg:text-3xl font-semibold  leading-8 lg:leading-[56px] tracking-[-0.96px]">
              Shwethaa
            </div>
            <div className=" text-2xl lg:text-3xl font-semibold  leading-8 lg:leading-[56px] tracking-[-0.96px]">
              Rajesh
            </div>
          </div>
        </div>
        <div className="my-8 text-base font-normal leading-6 tracking-[0.32px] text-zinc-500">
          I am frontend developer specializing in React.js, Next.js, and React
          Native, I bring over two years of experience crafting seamless web and
          mobile applications. My proficiency extends to building
          high-performance, optimized solutions with meticulous attention to
          design details.
        </div>
      </div>
      <ImageComponent
        title={"intro.png"}
        alt={"Caricature of a woman programmer"}
        width={400}
        height={400}
      ></ImageComponent>
    </div>
  );
}
