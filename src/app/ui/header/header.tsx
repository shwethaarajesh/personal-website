"use client";
import Image from "next/image";
import { sora } from "../fonts";

export default function Header() {
  const headers = ["About", "Skills", "Projects", "Contact me"];
  return (
    <div className="bg-pink-50 px-2   lg:px-12 xl:px-16  2xl:px-20 py-6 ">
      <div className=" md:px-8 flex justify-between items-center">
        <div className="flex justify-center items-center space-x-1">
          <Image
            src="/logo-1.png"
            className=" rounded-full my-2"
            alt="Vercel Logo"
            width={24}
            height={24}
          />
          <div className="text-sm italic ">Hello</div>
        </div>
        <div className="flex justify-center items-center space-x-8">
          {headers.map((eachHeader) => (
            <button className=" py-4 px-3 hover:shadow-[0_14px_12px_-12px_rgba(0,0,0,0.4)] text-sm leading-6 capitalize font-semibold tracking-[-.4px]">
              {eachHeader}
            </button>
          ))}
        </div>

        <button
          className="rounded bg-black text-white py-4 px-5 flex space-x-2 justify-center"
          onClick={() => {
            console.log("Resume downloaded");
          }}
        >
          <div className={`text-sm leading-6 font-semibold ${sora.className}`}>
            Resume
          </div>
          <Image
            src={"/download.png"}
            alt={"Download image"}
            height={20}
            width={20}
          ></Image>
        </button>
      </div>
    </div>
  );
}
