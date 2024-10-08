"use client";

import { SkillInterface, skillCategoryInterface } from "@/app/lib/SkillType";
import { useState } from "react";
import SkillComponent from "../SkillComponent/SkillComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./SkillCategories.css";
export default function SkillCategories(props: {
  categories: skillCategoryInterface[];
}) {
  const categoryList = props.categories;
  const [skillList, setSkillList] = useState<SkillInterface[]>(
    categoryList[0].list
  );
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryList[0].category
  );
  const onClickCategory = (categoryName: string, list: SkillInterface[]) => {
    setSkillList(list);
    setSelectedCategory(categoryName);
  };
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 xs:grid:cols-2 sm:grid-cols-3 md:grid-cols-4 flex-col items-start gap-4  ">
        {categoryList.map((eachCategory: skillCategoryInterface) => {
          console.log(
            eachCategory.category,
            selectedCategory,
            selectedCategory === eachCategory.category
          );
          return (
            <button
              key={eachCategory.category}
              onClick={() => {
                onClickCategory(eachCategory.category, eachCategory.list);
              }}
              className={`p-3 ${
                selectedCategory === eachCategory.category
                  ? "bg-primary-dark text-black"
                  : "bg-primary text-white"
              }   aspect-video flex justify-center items-center text-sm`}
            >
              {eachCategory.category}
            </button>
          );
        })}
      </div>
      <TransitionGroup
        className="lg:px-12 border-2 border-primary shadow-sm my-4 py-4 px-4 md:px-6 grid grid-cols-2 xsm:grid-cols-3
                         md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 
                         2xl:grid-cols-7 3xl:grid-cols-8 gap-x-5 md:gap-x-6 gap-y-6 lg:gap-x-7 xl:gap-x-8  lg:gap-y-7"
      >
        {skillList.map((eachSkill) => (
          <CSSTransition key={eachSkill.name} timeout={300} classNames="fade">
            <div>
              <SkillComponent skillName={eachSkill.name} url={eachSkill.icon} />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
