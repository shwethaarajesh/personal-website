"use client";

import { SkillInterface, skillCategoryInterface } from "@/app/lib/SkillType";
import { useState } from "react";
import SkillComponent from "../SkillComponent/SkillComponent";

export default function SkillCategories(props: {
  categories: skillCategoryInterface[];
}) {
  const categoryList = props.categories;
  const [skillList, setSkillList] = useState<SkillInterface[]>(
    categoryList[0].list
  );
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 xs:grid:cols-2 sm:grid-cols-3 md:grid-cols-4 flex-col items-start gap-4  ">
        {categoryList.map((eachCategory: any) => (
          <button className="p-3 bg-pink-50  aspect-video flex justify-center items-center text-sm">
            {eachCategory.category}
          </button>
        ))}
      </div>

      <div
        className=" lg:px-12 border mt-4  pt-4 px-6 grid grid-cols-2 sm:grid-cols-3
                         md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 
                         2xl:grid-cols-7 3xl:grid-cols-8 gap-x-6 gap-y-6 lg:gap-x-7 xl:gap-x-8  lg:gap-y-7 "
      >
        {skillList.map((eachSkill) => (
          <div key={eachSkill.name}>
            <SkillComponent
              skillName={eachSkill.name}
              url={eachSkill.icon}
            ></SkillComponent>
          </div>
        ))}
      </div>
    </div>
  );
}
