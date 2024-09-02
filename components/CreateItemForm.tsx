"use client";

import { createItem } from "@/actions/actions";
import { useRef } from "react";
import Button from "./ui/Button";

interface CreateItemFormProps {
  onSubmit?: () => void;
}

export default function CreateItemForm({ onSubmit }: CreateItemFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        await createItem(formData);
      }}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="brand" className="text-xs mb-2">
            Brand
          </label>
          <input
            className="border-b border-b-dark bg-black p-2 font-mono"
            type="text"
            id="brand"
            name="brand"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="model" className="text-xs mb-2">
            Model
          </label>
          <input
            className="border-b border-b-dark bg-black p-2 font-mono"
            type="text"
            id="model"
            name="model"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="reference" className="text-xs mb-2">
            Reference
          </label>
          <input
            className="border-b border-b-dark bg-black p-2 font-mono"
            type="text"
            id="reference"
            name="reference"
            required
          />
        </div>
        <Button type="submit">Add item</Button>
      </div>
    </form>
  );
}
