"use client";
import Sidebar from "./ui/Sidebar/Sidebar";
import { useRef, useState } from "react";
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
  const experiencesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const headers = [
    {
      name: "Skills",
      ref: skillsRef,
    },
    {
      name: "Experiences",
      ref: experiencesRef,
    },
    {
      name: "Projects",
      ref: projectsRef,
    },
    {
      name: "Contact me",
      ref: contactRef,
    },
  ];
  return (
    <div className="bg-white  w-screen h-full">
      <CustomHeader
        headers={headers}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      ></CustomHeader>
      <div className="flex justify-between pt-[100px]">
        <div className="w-full">
          <div className="lg:mx-8">
            <Intro></Intro>
          </div>
          <div className="lg:mx-8 scroll-mt-[100px]" ref={skillsRef}>
            <Skills></Skills>
          </div>
          <div className="scroll-mt-[100px]" ref={experiencesRef}>
            <Experiences></Experiences>
          </div>
          <div className="lg:mx-8 scroll-mt-[100px]">
            <AboutMe></AboutMe>
          </div>
          <div ref={projectsRef} className="scroll-mt-[100px]">
            <MyProjects></MyProjects>
          </div>
          <div className="lg:mx-8 scroll-mt-[100px]" ref={contactRef}>
            <ContactUs></ContactUs>
          </div>
          <Footer></Footer>
        </div>
        <div className="items-end justify-end">
          <Sidebar
            headers={headers}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          ></Sidebar>
        </div>
      </div>
    </div>
  );
}
