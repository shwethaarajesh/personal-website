"use client";

import { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");

  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    emailjs.init("twidWX-mn7fzgmK1S");
  }, []);
  const onClickGetInTouch = () => {
    if (!name || !email || !description) {
      alert("Name, Email and Description are required");
      return;
    }
    setLoading(true);
    emailjs
      .sendForm(
        "service_5kftdvq",
        "template_jtueuyn",
        form.current || "",
        "twidWX-mn7fzgmK1S"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          alert("Email sent successfully");
          setName("");
          setDescription("");
          setEmail("");
          setWebsite("");
        },
        (error) => {
          setLoading(false);
          console.log(error.text);
        }
      );
  };
  const form = useRef<HTMLFormElement>(null);
  return (
    <div className="mx-4 py-10 lg:py-[60px]  lg:px-8">
      <div className="flex gap-2 py-3 lg:py-5 justify-center items-center lg:justify-start lg:items-start">
        <div className=" text-2xl lg:text-3xl font-normal leading-[56px] tracking-[-0.96px] ">
          Contact
        </div>
        <div className=" text-2xl lg:text-3xl font-semibold leading-[56px] tracking-[-0.96px] ">
          Me
        </div>
      </div>
      <div className=" flex flex-col lg:grid lg:grid-cols-2 lg:gap-24 start items-start lg:items-center">
        <div className="w-full flex flex-col py-5 justify-center items-start self-stretch gap-5 ">
          <form ref={form}>
            <textarea
              placeholder="Your name"
              name="name"
              value={name}
              onChange={handleNameChange}
              className=" text-base font-normal leading-5 tracking-[-0.32px] text-zinc-500 py-4 px-6 border border-black w-full rounded-[4px] resize-none"
            ></textarea>
            <textarea
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className=" text-base font-normal leading-5 tracking-[-0.32px] text-zinc-500 py-4 px-6 border border-black w-full rounded-[4px] resize-none"
            ></textarea>
            <textarea
              value={website}
              name="website"
              onChange={handleWebsiteChange}
              placeholder="Your website (if exists)"
              className=" text-base font-normal leading-5 tracking-[-0.32px] text-zinc-500 py-4 px-6 border border-black w-full rounded-[4px] resize-none"
            ></textarea>
            <textarea
              value={description}
              name="description"
              onChange={handleDescriptionChange}
              placeholder="How can I help?"
              className=" min-h-[140px] text-base font-normal leading-5 tracking-[-0.32px] text-zinc-500 py-4 px-6 border border-black w-full rounded-[4px] resize-none"
            ></textarea>
          </form>
          <div className="flex gap-6">
            <button
              onClick={onClickGetInTouch}
              className={`px-4 py-3 items-center active:border active:border-solid active:border-black active:bg-white active:text-black  justify-center rounded-[4px] ${
                false
                  ? "bg-white text-black border active:border-solid border-black"
                  : "bg-black text-white border-none"
              }  text-base font-semibold leading-5 tracking-[0.32px]`}
            >
              {loading ? "Sending" : "Get In Touch"}
            </button>
            <a
              href="https://www.linkedin.com/in/shwethaa-rajesh/"
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
              <div className="flex items-start gap-2">
                <div className="text-3xl font-extrabold leading-[56px] tracking-[-0.96px]">
                  Let's
                </div>
                <div className="text-3xl font-extrabold leading-[56px] tracking-[-0.96px]">
                  Talk
                </div>
              </div>
              <div className="text-base font-normal leading-6 tracking-[0.32px] text-zinc-500">
                I seek to push the limits of creativity to create high-engaging,
                user-friendly, and memorable interactive experiences.
              </div>
            </div>
            <div className="gap-4 flex flex-col">
              <a href="mailto:shwethaarajesh14@gmail.com" className=" text-xl font-bold leading-6 tracking-[-0.4px] lg:text-[28px] lg:font-semibold hover:underline lg:leading-8 lg:tracking-[-0.56px]">
                shwethaarajesh14@gmail.com
              </a>
              {/* <div className=" text-xl font-bold leading-6 tracking-[-0.4px] lg:text-[28px] lg:font-semibold lg:leading-8 lg:tracking-[-0.56px]">
              +919003962244
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
