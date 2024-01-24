"use client";

import ImageComponent from "../components/ImageComponent/ImageComponent";

export default function AboutMe() {
  return (
    <div className="my-10 py-10 border border-pink-50 shadow-pink-200 shadow-md mx-4 lg:py-[60px] gap-6 lg:gap-6 px-6 xl:px-20 flex flex-col-reverse items-center  lg:flex-row lg:justify-between">
      <div className="flex flex-col lg:flex-row px-4 lg:gap-20 xl:gap-10 items-center lg:px-8 ">
        <div className=" flex items-center justify-center">
          <ImageComponent
            title={"profilephoto.jpeg"}
            alt={"About me image"}
            className="min-w-[400px]"
          ></ImageComponent>
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-1 py-3 lg:py-5 justify-center items-center lg:justify-start lg:items-start">
            <div className=" text-xl lg:text-3xl font-normal leading-[56px] tracking-[-0.96px] ">
              About
            </div>
            <div className=" text-xl lg:text-3xl font-semibold leading-[56px] tracking-[-0.96px] ">
              Me
            </div>
          </div>
          <div className=" text-sm font-normal tracking-[0.32px] leading-5 text-zinc-500 lg:text-sm ">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me. <br />
            <br />
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me. <br />
            <br />
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </div>
        </div>
      </div>
    </div>
  );
}
