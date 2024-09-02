import { ReactNode, useState } from "react";
import { CloseIcon } from "./ui/Icons";

interface ModalProps {
  children: ReactNode;
  title: string;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ open, children, title, onClose }: ModalProps) {
  return (
    <div
      className={`min-h-screen w-screen top-0 left-0 z-10 fixed inset-0 flex items-center justify-center transition-colors ${
        open ? "visible bg-black text-white" : "invisible"
      }`}
    >
      <div className="m-4 min-h-[300px] w-[600px] rounded-lg border border-dark p-6">
        <div className="relative flex h-full flex-col justify-between">
          <h1 className="uppercase mb-8">{title}</h1>
          {children}
          <div className="absolute right-0 top-0">
            <button onClick={onClose}>
              <CloseIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
