"use client";
import clsx from "clsx";
import ImageComponent from "../ImageComponent/ImageComponent";

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
      <ImageComponent
        title={"download.png"}
        alt={"Download image"}
        height={20}
        width={20}
      ></ImageComponent>
    </a>
  );
}
