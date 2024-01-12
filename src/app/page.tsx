"use client";
import Image from "next/image";
import Sidebar from "./ui/Sidebar/Sidebar";
import { useState } from "react";
import CustomHeader from "./ui/HeaderComponent/CustomHeader";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="bg-white flex w-screen h-full">
        <CustomHeader setIsOpen={setIsOpen} isOpen={isOpen}></CustomHeader>
      </div>
      <div className="flex justify-end items-end">
        <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}></Sidebar>
      </div>
    </div>
  );
}
