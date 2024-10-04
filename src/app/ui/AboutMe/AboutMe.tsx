"use client";

import ImageComponent from "../components/ImageComponent/ImageComponent";

export default function AboutMe() {
  return (
    <div className="my-10 py-10 border border-primary shadow-primary-dark shadow-md mx-4 lg:py-[60px] gap-6 lg:gap-6 px-6 xl:px-20 flex flex-col-reverse items-center  lg:flex-row lg:justify-between">
      <div className="flex flex-col lg:flex-row px-4 lg:gap-20 xl:gap-10 items-center lg:px-8 ">
        <div className=" flex items-center justify-center">
          <ImageComponent
            title={"profilephoto.jpeg"}
            alt={"About me image"}
            className="min-w-[200px] md:min-w-[400px]"
          ></ImageComponent>
        </div>
        <div className="flex flex-col ">
          <div className="flex gap-2 py-3 lg:py-5 justify-center items-center lg:justify-start lg:items-start">
            <div className=" text-xl lg:text-3xl font-normal leading-[56px] tracking-[-0.96px] ">
              About
            </div>
            <div className=" text-xl lg:text-3xl font-semibold leading-[56px] tracking-[-0.96px] ">
              Me
            </div>
          </div>
          <div className=" text-sm font-normal tracking-[0.32px] leading-5 text-zinc-500 lg:text-sm text-wrap">
           <div></div>
            
           I'm a full-stack developer passionate about turning ideas into seamless digital experiences. 
            I enjoy building both intuitive user interfaces and efficient backend systems that work together to create meaningful solutions.  
            <br />
            <br />
            My technical expertise spans frontend and backend development, where I’ve used technologies like 
            React, ReactNative, Xamarin, Express, MongoDB, and PostgreSQL to build optimized solutions. 
            Additionally, I’ve worked on AI-driven projects involving deep learning models that enhance functionality and user interaction. 
            <br />
            <br />
            At Carnegie Mellon University, I’m furthering my knowledge of scalable systems this semester with Design Patterns and Formal Methods, 
            with the goal of building more robust, innovative applications. 
            If you're excited about the intersection of AI, software engineering, and scalable systems, I’d love to connect.
          </div>
        </div>
      </div>
    </div>
  );
}
