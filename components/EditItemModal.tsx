"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/ui/Button";
import EditItemForm, { Item } from "./EditItemForm";
import { EditIcon } from "./ui/Icons";

interface EditItemModalProps {
  item: Item;
}

export default function EditItemModal({ item }: EditItemModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-black text-white  hover:bg-white hover:text-black rounded py-1 px-2 text-xs"
      >
        <EditIcon />
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Edit Item">
        <EditItemForm item={item} onSubmit={() => setOpen(false)} />
      </Modal>
    </>
  );
}
