"use client";

export default function Footer() {
  const figmaLink =
    "https://www.figma.com/file/2aR8JnxVnbsuDWVdWXrK4g/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop-(Community)?type=design&node-id=0-1&mode=design&t=2tZeTTLBVopT19pd-0";
  return (
    <footer className="px-4 py-5 lg:px-20 lg:py-6 bg-black text-white flex justify-between items-center ">
      <div className="text-white text-lg font-semibold lg:font-bold lg:text-[32px] leading-6 lg:leading-10 capitalize tracking-[-0.4px] lg:tracking-[-0.64px]">
        Shwethaa Rajesh
      </div>
      <div className="text-sm font-normal tracking-[0.32px] leading-5 text-zinc-500 lg:text-sm">
        <div>Developed using Next.js</div>
        <div>
          Design inspired from{" "}
          <a
            className="text-zinc-300 hover:text-white hover:font-bold "
            href={figmaLink}
            target="_blank"
          >
            Figma
          </a>
        </div>
      </div>
    </footer>
  );
}
