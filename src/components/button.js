"use client";

import localFont from "@next/font/local";

export const dnd = localFont({
  src: "../../public/fonts/DragonHunter-9Ynxj.otf",
  variable: "--font-dnd",
});

import { useRouter } from "next/navigation";

export function Button({ children, pathName, number }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(pathName);
      }}
      className={`
				w-64
				h-16
				bg-black
				rounded-full
				border-4
				border-double
				border-red-600
				hover:bg-gray-800
				${dnd.className}
				text-red-600
				text-xl
			`}
      type="button"
    >
      {children}
    </button>
  );
}
