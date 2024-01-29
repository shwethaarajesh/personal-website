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
import Footer from "./ui/Footer/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white  w-screen h-full">
      <CustomHeader setIsOpen={setIsOpen} isOpen={isOpen}></CustomHeader>
      <div className="flex justify-between pt-[100px]">
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
          <Footer></Footer>
        </div>
        <div className="items-end justify-end">
          <Sidebar setIsOpen={setIsOpen} isOpen={isOpen}></Sidebar>
        </div>
      </div>
    </div>
  );
}
