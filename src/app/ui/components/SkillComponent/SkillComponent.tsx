"use client";

import ImageComponent from "../ImageComponent/ImageComponent";

export default function SkillComponent(props: {
  skillName: string;
  url: string;
}) {
  return (
    <div className=" items-center shadow-md w-full aspect-square flex hover:shadow-2xl hover:bg-pink-100 flex-col justify-between p-6  bg-pink-50  border-[2px] text-center border-pink-200">
      <ImageComponent
        title={props.url}
        alt={props.skillName}
        width={56}
        height={56}
      ></ImageComponent>
      {props.skillName}
    </div>
  );
}
