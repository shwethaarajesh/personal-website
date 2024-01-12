"use client";
import Image from "next/image";
import Sidebar from "./ui/Sidebar/Sidebar";
import { useState } from "react";
import CustomHeader from "./ui/HeaderComponent/CustomHeader";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white  w-screen h-full">
      <CustomHeader setIsOpen={setIsOpen} isOpen={isOpen}></CustomHeader>
      <div className="flex justify-between">
        <div className="w-full m-8">
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
