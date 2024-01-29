"use client";
import { MdOutlineMenu } from "react-icons/md";
import TabButton from "../components/TabButton/TabButton";
import DownloadButton from "../components/DownloadButton/DownloadButton";
import ImageComponent from "../components/ImageComponent/ImageComponent";
import { MutableRefObject, RefObject } from "react";

export default function CustomHeader(props: {
  isOpen: boolean;
  setIsOpen: Function;
  headers: {
    name: string;
    ref: RefObject<HTMLDivElement>;
  }[];
}) {
  return (
    <div
      className={` fixed w-full h-[100px] bg-pink-50 px-2 flex  lg:px-12 xl:px-16  2xl:px-20 py-6 `}
    >
      <div className={`md:px-8 flex justify-between items-center w-full `}>
        <div className="flex justify-center items-center space-x-1">
          <ImageComponent
            title="Logo-name.png"
            className=" rounded-full my-2"
            alt="Shwethaa Rajesh"
            width={190}
            height={190}
          />
          {/* <div className="text-sm italic ">Hello</div> */}
        </div>
        <div className=" hidden md:flex justify-center items-center space-x-8">
          {props.headers.map((eachHeader) => (
            <div
              key={eachHeader.name}
              className=""
              onClick={() => {
                eachHeader.ref.current?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              <TabButton headername={eachHeader.name}></TabButton>
            </div>
          ))}
        </div>

        <DownloadButton title="Resume"></DownloadButton>
        <button
          onClick={() => {
            props.setIsOpen(!props.isOpen);
            window.dispatchEvent(new Event("resize"));
          }}
          className={`block md:hidden`}
        >
          <MdOutlineMenu size={32} />
        </button>
      </div>
    </div>
  );
}
