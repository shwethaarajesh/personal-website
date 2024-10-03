"use client";

export default function TabButton(props: { headername: string }) {
  return (
    <button
      key={props.headername}
      className=" py-4 px-3 hover:bg-primary-mid hover:text-black hover:shadow-[0_14px_12px_-12px_rgba(0,0,0,0.4)] text-sm leading-6 capitalize font-semibold tracking-[-.4px]"
    >
      {props.headername}
    </button>
  );
}
