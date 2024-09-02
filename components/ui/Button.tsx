import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  type?: string;
  onClick?: () => void;
};

export default function Button({ onClick, type, children }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 hover:bg-dark hover:text-white bg-white text-black rounded py-1 px-2 text-xs"
    >
      {children}
    </button>
  );
}
