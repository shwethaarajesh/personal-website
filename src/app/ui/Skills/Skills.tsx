"use client";

import { SkillInterface, skillCategoryInterface } from "@/app/lib/SkillType";
import SkillCategories from "../components/SkillCategories/SkillCategories";
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
  const skillCategories: skillCategoryInterface[] = [
    {
      category: "Web Development ",
      list: [
        {
          name: "ReactJS",
          icon: "icon-react.png",
        },
        {
          name: "NextJS",
          icon: "icon-nextjs.png",
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
          name: "Tailwind css",
          icon: "icon-tailwind.png",
        },
        {
          name: "Scss",
          icon: "icon-sass.png",
        },
        {
          name: "Styled components",
          icon: "icon-styledcomponents.png",
        },
      ],
    },
    {
      category: "Mobile Development",
      list: [
        {
          name: "React Native",
          icon: "icon-react.png",
        },
        {
          name: "Xamarin Forms",
          icon: "icon-xamarin.png",
        },
      ],
    },
    {
      category: "Programming Languages",
      list: [
        {
          name: "Javascript",
          icon: "icon-js.png",
        },
        {
          name: "Typescript",
          icon: "icon-ts.png",
        },
        {
          name: "C#",
          icon: "icon-csharp.png",
        },
        {
          name: "Python",
          icon: "icon-python.png",
        },
      ],
    },
    {
      category: "Version Control",
      list: [
        {
          name: "Git",
          icon: "icon-git.png",
        },
      ],
    },
  ];
  const skillsList: SkillInterface[] = [
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
    <div className="mb-8 px-4 py-10 lg:py-15">
      <div className="flex gap-1 justify-center items-center">
        <div className=" text-3xl font-normal leading-[56px] tracking-[-0.96px] ">
          My
        </div>
        <div className=" text-3xl font-medium leading-[56px] tracking-[-0.96px] ">
          Skills
        </div>
      </div>
      <div className="  mt-5">
        <SkillCategories categories={skillCategories}></SkillCategories>
        {/* <div
          className=" lg:mx-12 w-full grid grid-cols-2 xs:grid-cols-3
                         md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 
                         2xl:grid-cols-7 3xl:grid-cols-8 gap-x-6 gap-y-6 lg:gap-x-7 xl:gap-x-8  lg:gap-y-7 "
        >
          {skillsList.map((eachSkill) => (
            <div key={eachSkill.name}>
              <SkillComponent
                skillName={eachSkill.name}
                url={eachSkill.icon}
              ></SkillComponent>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
