"use client";

import ExperienceComponent from "../components/ExperienceComponent/ExperienceComponent";

export default function Experiences() {
  return (
    <div className=" py-10 my-4 lg:py-[60px] bg-pink-50">
      <div className=" mx-4 lg:px-20">
        <div className="flex gap-2 py-5 justify-center items-center ">
          <div className="text-xl lg:text-3xl font-normal leading-8 tracking-[-0.56px] lg:leading-[56px] lg:tracking-[0.96px]">
            My
          </div>
          <div className="text-xl lg:text-3xl font-semibold leading-8 tracking-[-0.56px] lg:leading-[56px] lg:tracking-[0.96px]">
            Experience
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <ExperienceComponent
            designation="Software Developer I at Mckinsey & Company"
            duration="Aug 2022 - Jan 2024"
            description=""
            icon=""
          ></ExperienceComponent>
          <ExperienceComponent
            designation="Software Developer Intern at Mckinsey & Company"
            duration="Feb 2022 - Aug 2022"
            description=""
            icon=""
          ></ExperienceComponent>
          <ExperienceComponent
            designation="Research Intern and Samsung Research institute"
            duration="Sep 2020 - Nov 2021"
            description=""
            icon=""
          ></ExperienceComponent>
        </div>
      </div>
    </div>
  );
}
