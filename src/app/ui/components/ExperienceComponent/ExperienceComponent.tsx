"use client";
interface IExperience {
  designation: string;
  duration: string;
  description: string;
  icon: string;
}
export default function ExperienceComponent(props: IExperience) {
  return (
    <div className="px-4 py-[30px] rounded-[10px] border border-gray-600 bg-white cursor-pointer hover:bg-pink-200">
      <div className="flex flex-col gap-2 lg:gap-0 lg:flex-row justify-between mb-5 lg:mb-7">
        <div className="text-base font-medium leading-6 tracking-[-0.2px] lg:tracking-[-0.48px] lg:leading-7 lg:text-lg">
          {props.designation}
        </div>
        <div className="text-xs font-medium leading-5 tracking-[-0.32px] text-zinc-500">
          {props.duration}
        </div>
      </div>
      <div className="text-xs font-normal tracking-[0.32px] leading-5 text-zinc-500 lg:text-sm">
        Desc
      </div>
    </div>
  );
}
