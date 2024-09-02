"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/ui/Button";
import CreateItemForm from "@/components/CreateItemForm";
import { PlusIcon } from "./ui/Icons";

export default function CreateItemModal() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <Button onClick={() => setOpen(true)}>
        <PlusIcon />
        Add New Item
      </Button>
      <Modal open={open} onClose={() => setOpen(false)} title="Add New Item">
        <CreateItemForm onSubmit={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
