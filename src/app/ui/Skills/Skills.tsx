"use client";

import SkillComponent from "../components/SkillComponent/SkillComponent";

// Programming Languages:
// C#
// Python
// JavaScript
// TypeScript
// Web Development:
// ReactJS
// NextJS
// Storybook
// Builder.io
// Mobile App Development:
// React Native
// Xamarin Forms
// Version Control:
// Git

export default function Skills() {
  return (
    <div className="mb-8">
      <div className="flex gap-1 justify-center items-center">
        <div className=" text-3xl font-normal leading-[56px] tracking-[-0.96px] ">
          My
        </div>
        <div className=" text-3xl font-medium leading-[56px] tracking-[-0.96px] ">
          Skills
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className=" lg:mx-12 grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 gap-y-4 ">
          {[
            "Git",
            "ReactJS",
            "React Native",
            "NextJS",
            "Javascript",
            "Typescript",
            "Storybook",
            "Builder.io",
            "Xamarin Forms",
            "C#",
            "Python",
          ].map((eachTitle) => (
            <div className={eachTitle}>
              <SkillComponent skillName={eachTitle}></SkillComponent>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
