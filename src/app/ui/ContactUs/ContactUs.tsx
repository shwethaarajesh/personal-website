"use client";

import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleWebsiteChange = (e: any) => {
    setWebsite(e.target.value);
  };
  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value);
  };
  return (
    <div className="mx-4 py-10 lg:py-[60px] flex flex-col lg:grid lg:grid-cols-2 lg:gap-24 lg:px-8 start items-start lg:items-center">
      <div className="w-full flex flex-col py-5 justify-center items-start self-stretch gap-5 ">
        <textarea
          placeholder="Your name"
          value={name}
          onChange={handleNameChange}
          className=" text-base font-normal leading-5 tracking-[-0.32px] text-zinc-500 py-4 px-6 border border-black w-full rounded-[4px] resize-none"
        ></textarea>
        <textarea
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className=" text-base font-normal leading-5 tracking-[-0.32px] text-zinc-500 py-4 px-6 border border-black w-full rounded-[4px] resize-none"
        ></textarea>
        <textarea
          value={website}
          onChange={handleWebsiteChange}
          placeholder="Your website (if exists)"
          className=" text-base font-normal leading-5 tracking-[-0.32px] text-zinc-500 py-4 px-6 border border-black w-full rounded-[4px] resize-none"
        ></textarea>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          placeholder="How can I help?"
          className=" min-h-[140px] text-base font-normal leading-5 tracking-[-0.32px] text-zinc-500 py-4 px-6 border border-black w-full rounded-[4px] resize-none"
        ></textarea>

        <div className="flex gap-6">
          <button className="px-4 py-3 items-center text-white justify-center rounded-[4px] bg-black text-base font-semibold leading-5 tracking-[0.32px]">
            Get In Touch
          </button>
          <a
            href="http://www.linkedin.com/in/shwethaa-r-a391131b4"
            target="_blank"
            className=" cursor-pointer rounded-[4px] p-2 flex justify-center items-center border border-black hover:text-white hover:bg-black hover:border-none"
          >
            <FaLinkedin width={20} height={20} size={20} />
          </a>
        </div>
      </div>
      <div className="py-5 flex flex-col justify-center  items-start gap-6">
        <div className="flex flex-col justify-center items-start gap-10 ">
          <div className="flex flex-col items-start gap-5 ">
            <div className="flex items-start gap-4">
              <div className="text-5xl font-extrabold leading-[56px] tracking-[-0.96px]">
                Let's
              </div>
              <div className="text-5xl font-extrabold leading-[56px] tracking-[-0.96px]">
                Talk
              </div>
            </div>
            <div className="text-base font-normal leading-6 tracking-[0.32px] text-zinc-500">
              I seek to push the limits of creativity to create high-engaging,
              user-friendly, and memorable interactive experiences.
            </div>
          </div>
          <div className="gap-4 flex flex-col">
            <div className=" text-xl font-bold leading-6 tracking-[-0.4px] lg:text-[28px] lg:font-semibold lg:leading-8 lg:tracking-[-0.56px]">
              shwethaarajesh14@gmail.com
            </div>
            <div className=" text-xl font-bold leading-6 tracking-[-0.4px] lg:text-[28px] lg:font-semibold lg:leading-8 lg:tracking-[-0.56px]">
              +919003962244
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
