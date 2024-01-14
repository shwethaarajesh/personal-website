"use client";
import Image from "next/image";
import Sidebar from "./ui/Sidebar/Sidebar";
import { useState } from "react";
import CustomHeader from "./ui/HeaderComponent/CustomHeader";
import Skills from "./ui/Skills/Skills";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white  w-screen h-full">
      <CustomHeader setIsOpen={setIsOpen} isOpen={isOpen}></CustomHeader>
      <div className="flex justify-between pt-[100px] pb-12">
        <div className="w-full mx-8">
          <Skills></Skills>
          <div className=" h-60 border border-black items-center flex justify-center">
            Content Coming soon
          </div>
        </div>
        <div className="items-end justify-end">
          <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}></Sidebar>
        </div>
      </div>
    </div>
  );
}
