"use client";

import ImageComponent from "../ImageComponent/ImageComponent";

export default function SkillComponent(props: {
  skillName: string;
  url: string;
}) {
  return (
    <div>
    <div className=" items-center justify-content: stretch shadow-md w-full aspect-square flex hover:shadow-2xl hover:bg-primary-mid flex-col justify-between p-6  bg-slate-50  border-[2px] text-center border-primary-dark">
      <ImageComponent
        title={props.url}
        alt={props.skillName}
        width={56}
        height={56}
      ></ImageComponent>
      {props.skillName}
    </div>
  
    </div>
    
  );
}
