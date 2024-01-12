"use client";
import Image from "next/image";
import Header from "./ui/Header/header";
import Sidebar from "./ui/Sidebar/Sidebar";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white flex w-screen h-full">
      <Header setIsOpen={setIsOpen} isOpen={isOpen}></Header>

      <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}></Sidebar>
    </div>
  );
}
