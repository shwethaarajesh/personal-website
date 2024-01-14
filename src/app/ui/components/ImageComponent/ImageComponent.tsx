"use client";
import Image from "next/image";

export default function ImageComponent(props: {
  title: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  const isPrefixUrl = false;
  const prefix =
    process.env.NODE_ENV == "production" ? "personal-website/" : "";

  return (
    <Image
      src={`/${prefix}${props.title}`}
      alt={props.alt}
      className={props.className || ""}
      height={props.height || 0}
      width={props.width || 0}
      sizes={!props.width ? "100vw" : undefined}
      unoptimized
    ></Image>
  );
}
