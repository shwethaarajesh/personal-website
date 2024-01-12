"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

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
    <div className={`${props.isOpen ? "block" : "block"}`}>
      <div
        className={`h-screen  bg-gray-800 transition-transform transform ${
          props.isOpen ? "w-64" : "w-0"
        }`}
        style={{ transition: "width 300ms cubic-bezier(0.2,0,0,1) 0s" }}
      >
        <button className="text-white p-4" onClick={toggleSidebar}>
          Toggle Sidebar
        </button>
        {/* Your sidebar content goes here */}
      </div>
    </div>
  );
}
