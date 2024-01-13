"use client";

import ImageComponent from "../ImageComponent/ImageComponent";

export default function SkillComponent(props: { skillName: string }) {
  return (
    <div className=" items-center aspect-square flex flex-col gap-8 p-6   border text-center border-pink-400">
      <ImageComponent
        title={"icon-git.png"}
        alt={props.skillName}
        width={56}
        height={56}
      ></ImageComponent>
      {props.skillName}
    </div>
  );
}
