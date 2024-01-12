"use client";
import Image from "next/image";
import clsx from "clsx";

export default function DownloadButton(props: {
  title: string;
  variation?: "mobile" | "desktop";
}) {
  return (
    <a
      href="/personal-website/Resume.pdf"
      download={props.title}
      className={clsx("rounded bg-black text-white space-x-2 justify-center", {
        "w-full flex py-2 px-3": props.variation == "mobile",
        "hidden md:flex py-4 px-5":
          !props.variation || props.variation == "desktop",
      })}
      onClick={() => {
        console.log("Downloaded");
      }}
    >
      <div className={`text-sm leading-6 font-semibold`}>{props.title}</div>
      <Image
        src={"/personal-website/download.png"}
        alt={"Download image"}
        height={20}
        unoptimized
        width={20}
      ></Image>
    </a>
  );
}
