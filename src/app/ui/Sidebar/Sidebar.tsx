"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import "./Sidebar.scss";
import DownloadButton from "../components/DownloadButton/DownloadButton";
export default function Sidebar(props: {
  isOpen: boolean;
  setIsOpen: Function;
}) {
  const toggleSidebar = () => {
    setIsOpenSidebar(!props.isOpen);
    setTimeout(() => {
      props.setIsOpen(!props.isOpen);
    }, 100);
    // props.setIsOpen(!props.isOpen);
  };
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  useEffect(() => {
    // setTimeout(() => {}, 0);
    setIsOpenSidebar(props.isOpen);
  }, [props.isOpen]);

  const headers = ["About", "Skills", "Projects", "Contact me"];
  return (
    <div
      className={` md:hidden ${
        props.isOpen ? "fixed top-[100px] right-0" : "hidden"
      }`}
    >
      <div
        className={` sidebar-height  border border-l-1 border-gray-200 bg-pink-50 transition-transform transform ${
          isOpenSidebar ? " sm:w-60 w-48" : "w-0"
        }`}
        style={{ transition: "width 300ms cubic-bezier(0.2,0,0,1) 0s" }}
      >
        <button
          className="text-white w-full items-end py-3 px-4 flex justify-end "
          onClick={toggleSidebar}
        >
          <MdClose className="text-black"></MdClose>
        </button>
        <div className="flex flex-col gap-2">
          {headers.map((eachHeader) => {
            return (
              <div
                key={eachHeader}
                className="border hover:bg-pink-100 border-x-0 
                border-t-0 cursor-pointer p-3 
                hover:shadow-[0_14px_12px_-12px_rgba(0,0,0,0.4)] text-lg leading-6 capitalize font-medium  tracking-[-.4px]"
                onClick={() => {
                  console.log("Clicked desc");
                }}
              >
                {eachHeader}
              </div>
            );
          })}
        </div>
        <div className=" w-full fixed bottom-0  mb-3 px-3">
          <DownloadButton title="Resume" variation="mobile"></DownloadButton>
        </div>
      </div>
    </div>
  );
}
