import "./globals.css";
import localFont from "@next/font/local";

export const dnd = localFont({
  src: "../../public/fonts/DragonHunter-9Ynxj.otf",
  variable: "--font-dnd",
});

export const metadata = {
  title: "Item-Magic",
  description: "Discover your journey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className="">{children}</body>
    </html>
  );
}
