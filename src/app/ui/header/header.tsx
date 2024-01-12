import Image from "next/image";

export default function Header() {
  return (
    <div className="px-20 py-6">
      <div className="bg-gray-200 px-8 flex justify-between">
        <div>
          <Image
            src="/logo-1.png"
            className=" rounded-full my-2"
            alt="Vercel Logo"
            width={24}
            height={24}
          />
        </div>

        <div>Hi</div>

        <div>
          <button>Resume</button>
        </div>
      </div>
    </div>
  );
}
