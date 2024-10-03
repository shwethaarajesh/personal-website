"use client";

import ImageComponent from "../components/ImageComponent/ImageComponent";

export default function Intro() {
  return (
    <div className="my-10 py-10 border bg-black text-white border-primary shadow-primary-dark shadow-md mx-4 lg:py-[60px] gap-6 lg:gap-6 lg:px-20 flex flex-col-reverse items-center  lg:flex-row lg:justify-between">
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
        <div className="my-8 text-base font-normal leading-6 tracking-[0.32px] gap-4 flex flex-col text-zinc-300">
          <div>
          I’m a graduate student at Carnegie Mellon University, specializing in Software Engineering with a focus on scalable systems. </div>
          <div>With over two years of experience, I’ve developed seamless web and mobile applications using React.js, Next.js, and React Native. 
         </div>
           
           <div> In addition to my full-stack development skills, I have hands-on experience building deep learning models. 
          I’m also expanding my expertise in scalable architectures, cloud solutions, and design patterns through my studies at CMU.</div>
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
