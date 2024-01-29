"use client";
import Image from "next/image";
import Sidebar from "./ui/Sidebar/Sidebar";
import { useState } from "react";
import CustomHeader from "./ui/HeaderComponent/CustomHeader";
import Skills from "./ui/Skills/Skills";
import Intro from "./ui/Intro/Intro";
import Experiences from "./ui/Experiences/Experiences";
import AboutMe from "./ui/AboutMe/AboutMe";
import MyProjects from "./ui/MyProjects/MyProjects";
import ContactUs from "./ui/ContactUs/ContactUs";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white  w-screen h-full">
      <CustomHeader setIsOpen={setIsOpen} isOpen={isOpen}></CustomHeader>
      <div className="flex justify-between pt-[100px] pb-12">
        <div className="w-full">
          <div className="lg:mx-8">
            <Intro></Intro>
          </div>
          <div className="lg:mx-8">
            <Skills></Skills>
          </div>
          <Experiences></Experiences>

          <div className="lg:mx-8">
            <AboutMe></AboutMe>
          </div>

          <MyProjects></MyProjects>

          <div className="lg:mx-8">
            <ContactUs></ContactUs>
          </div>
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
