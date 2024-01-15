"use client";

import { SkillInterface, skillCategoryInterface } from "@/app/lib/SkillType";
import SkillCategories from "../components/SkillCategories/SkillCategories";
import SkillComponent from "../components/SkillComponent/SkillComponent";

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
  return (
    <div className="px-4 pt-10 lg:py-15">
      <div className="flex gap-1 justify-center items-center">
        <div className=" text-xl lg:text-3xl font-normal leading-[56px] tracking-[-0.96px] ">
          My
        </div>
        <div className=" text-xl lg:text-3xl font-medium leading-[56px] tracking-[-0.96px] ">
          Skills
        </div>
      </div>
      <div className="  mt-5">
        <SkillCategories categories={skillCategories}></SkillCategories>
      </div>
    </div>
  );
}
