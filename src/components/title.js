import { dnd } from "../app/layout";

export function Title({ children }) {
  return (
    <h1 className={`text-8xl text-black font-outline-2 ${dnd.className}`}>
      {children}
    </h1>
  );
}
