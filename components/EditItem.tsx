"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import EditItemForm from "./EditItemForm";
import { EditIcon } from "./ui/Icons";
import { Item } from "@/types";

interface EditItemProps {
  item: Item;
}

export default function EditItem({ item }: EditItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 text-white hover:bg-white hover:text-black p-2 text-xs"
      >
        <EditIcon aria-label="Edit" />
      </button>
      <Modal open={open} onClose={() => setOpen(false)} title="Edit Item">
        <EditItemForm item={item} onSubmit={() => setOpen(false)} />
      </Modal>
    </>
  );
}
