"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

export default function Sidebar(props: {
  isOpen: boolean;
  setIsOpen: Function;
}) {
  const toggleSidebar = () => {
    props.setIsOpen(!props.isOpen);
  };
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setAnimation(true);
  }, [props.isOpen]);
  const headers = ["About", "Skills", "Projects", "Contact me"];
  return (
    <div className={` ${props.isOpen ? "block" : "block"}`}>
      <div
        className={`h-screen border border-l-1 border-gray-200 bg-pink-50 transition-transform transform ${
          props.isOpen ? "w-64" : "w-0"
        }`}
        style={{ transition: "width 300ms cubic-bezier(0.2,0,0,1) 0s" }}
      >
        <button
          className="text-white w-full items-end pt-3 pb-1 px-4 flex justify-end "
          onClick={toggleSidebar}
        >
          <MdClose className="text-black"></MdClose>
        </button>
        <div className="flex flex-col gap-2">
          {headers.map((eachHeader) => {
            return (
              <div
                key={eachHeader}
                className="border hover:bg-pink-100 border-x-0 border-t-0 cursor-pointer p-3 hover:shadow-[0_14px_12px_-12px_rgba(0,0,0,0.4)] text-lg leading-6 capitalize font-medium  tracking-[-.4px]"
                onClick={() => {
                  console.log("Clicked desc");
                }}
              >
                {eachHeader}
              </div>
            );
          })}
        </div>
        <div className=" w-full fixed bottom-0  mb-2 px-3">
          <button
            className=" w-full flex rounded bg-black text-white py-2 px-3 space-x-2 justify-center"
            onClick={() => {
              console.log("Resume downloaded");
            }}
          >
            <div className={`text-sm leading-6 font-semibold `}>Resume</div>
            <Image
              src={"/download.png"}
              alt={"Download image"}
              height={20}
              width={20}
              unoptimized
            ></Image>
          </button>
        </div>
        {/* Your sidebar content goes here */}
      </div>
    </div>
  );
}
