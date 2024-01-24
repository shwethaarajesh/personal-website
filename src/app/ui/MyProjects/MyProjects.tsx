"use client";

import ImageComponent from "../components/ImageComponent/ImageComponent";

export default function MyProjects() {
  const arr = [1, 2, 3];
  const printNumber = (val: number) => {
    return val < 10 ? "0" + val.toString() : val.toString();
  };
  return (
    <div className="py-10 my-4 lg:py-[60px] bg-black">
      <div className="mx-4 lg:px-20">
        <div className="lg:mx-8 flex flex-col gap-5">
          <div className="py-5 gap-2 flex justify-center items-center text-white">
            <div className=" text-xl lg:text-3xl font-light leading-8 lg:leading-[56px] tracking-[0.56px] lg:tracking-[-0.96px] ">
              My
            </div>
            <div className=" text-xl lg:text-3xl font-semibold leading-8 lg:leading-[56px] tracking-[0.56px] lg:tracking-[-0.96px] ">
              Projects
            </div>
          </div>
          <div>
            {arr.map((eachItem, i) => {
              return (
                <div
                  className={` flex flex-col justify-between self-stretch py-5 lg:items-center gap-7 lg:gap-20 ${
                    i % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div>
                    <ImageComponent
                      className=" w-full rounded-[18.761px]"
                      title={"project-sample.jpeg"}
                      alt={"Project image"}
                    ></ImageComponent>
                  </div>
                  <div className="flex flex-col gap-7">
                    <div className=" text-white text-2xl lg:text-5xl font-semibold leading-[56px] tracking-[-0.96px] ">
                      {printNumber(i + 1)}
                    </div>
                    <div className=" text-white text-xl font-extrabold lg:font-bold lg:text-[32px] leading-6 lg:leading-10 capitalize tracking-[-0.4px] lg:tracking-[-0.64px]">
                      Crypto Screener Application
                    </div>
                    <div className=" text-sm font-normal tracking-[0.32px] leading-5 text-zinc-500 lg:text-sm ">
                      I'm Flora Sheen Lorem Ipsum is simply dummy text of the
                      printing and typesetting industry. Lorem Ipsum has been
                      the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to specimen book.
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
