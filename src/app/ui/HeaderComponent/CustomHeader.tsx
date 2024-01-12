"use client";
import Image from "next/image";
import { sora } from "../fonts";
import { MdOutlineMenu } from "react-icons/md";

export default function CustomHeader(props: {
  isOpen: boolean;
  setIsOpen: Function;
}) {
  const headers = ["About", "Skills", "Projects", "Contact me"];
  return (
    <div
      className={` w-full h-[100px] bg-pink-50 px-2 flex  lg:px-12 xl:px-16  2xl:px-20 py-6 `}
    >
      <div className={`md:px-8 flex justify-between items-center w-full `}>
        <div className="flex justify-center items-center space-x-1">
          <Image
            src="/personal-website/Logo-name.png"
            className=" rounded-full my-2"
            alt="Shwethaa Rajesh"
            width={190}
            height={140}
            unoptimized
          />
          {/* <div className="text-sm italic ">Hello</div> */}
        </div>
        <div className=" hidden md:flex justify-center items-center space-x-8">
          {headers.map((eachHeader) => (
            <button
              key={eachHeader}
              className=" py-4 px-3 hover:shadow-[0_14px_12px_-12px_rgba(0,0,0,0.4)] text-sm leading-6 capitalize font-semibold tracking-[-.4px]"
            >
              {eachHeader}
            </button>
          ))}
        </div>

        <button
          className="hidden md:flex rounded bg-black text-white py-4 px-5 space-x-2 justify-center"
          onClick={() => {
            console.log("Resume downloaded");
          }}
        >
          <div className={`text-sm leading-6 font-semibold ${sora.className}`}>
            Resume
          </div>
          <Image
            src={"/personal-website/download.png"}
            alt={"Download image"}
            height={20}
            unoptimized
            width={20}
          ></Image>
        </button>
        <button
          onClick={() => {
            props.setIsOpen(!props.isOpen);
            window.dispatchEvent(new Event("resize"));
          }}
          className="block md:hidden"
        >
          <MdOutlineMenu size={32} />
        </button>
      </div>
    </div>
  );
}
