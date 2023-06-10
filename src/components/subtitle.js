import localFont from "@next/font/local";

export const dnd = localFont({
  src: "../../public/fonts/DragonHunter-9Ynxj.otf",
  variable: "--font-dnd",
});

export function SubTitle({ children, className }) {
  return (
    <h1 className={`text-2xl font-outline-px ${dnd.className} ${className}`}>
      {children}
    </h1>
  );
}
