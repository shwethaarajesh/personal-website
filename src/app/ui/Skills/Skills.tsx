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
[
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
];
export default function Skills() {
  const skillsList = [
    {
      name: "Git",
      icon: "icon-git.png",
    },
    {
      name: "ReactJS",
      icon: "icon-react.png",
    },
    {
      name: "React Native",
      icon: "icon-react.png",
    },
    {
      name: "NextJS",
      icon: "icon-nextjs.png",
    },
    {
      name: "Javascript",
      icon: "icon-js.png",
    },
    {
      name: "Typescript",
      icon: "icon-ts.png",
    },
    {
      name: "Storybook",
      icon: "icon-storybook.png",
    },
    {
      name: "Builder.io",
      icon: "icon-builder.png",
    },
    {
      name: "Xamarin Forms",
      icon: "icon-xamarin.png",
    },
    {
      name: "C#",
      icon: "icon-csharp.png",
    },
    {
      name: "Python",
      icon: "icon-python.png",
    },
    {
      name: "Scss",
      icon: "icon-sass.png",
    },
    {
      name: "Styled components",
      icon: "icon-styledcomponents.png",
    },
    {
      name: "Tailwind css",
      icon: "icon-tailwind.png",
    },
  ];
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
        <div className=" w-full lg:mx-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 3xl:grid-cols-8 gap-x-3 gap-y-4 ">
          {skillsList.map((eachSkill) => (
            <div key={eachSkill.name}>
              <SkillComponent
                skillName={eachSkill.name}
                url={eachSkill.icon}
              ></SkillComponent>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
