"use client";

import { createItem } from "@/actions/actions";
import { useRef, useState } from "react";
import Button from "./ui/Button";

interface CreateItemFormProps {
  onSubmit?: () => void;
}

export default function CreateItemForm({ onSubmit }: CreateItemFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (formData: FormData) => {
    if (file) {
      formData.set("image", file);
    }
    await createItem(formData);
    ref.current?.reset();
    setFile(null);
    onSubmit?.();
  };

  return (
    <form ref={ref} action={handleSubmit}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="brand" className="text-xs mb-2">
            Brand
          </label>
          <input
            className="bg-dark p-2 font-mono"
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
            className="bg-dark p-2 font-mono"
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
            className="bg-dark p-2 font-mono"
            type="text"
            id="reference"
            name="reference"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image" className="text-xs mb-2">
            Upload image
          </label>
          <input
            className="bg-dark p-2 font-mono"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
            required
          />
        </div>
        <Button type="submit">Add item</Button>
      </div>
    </form>
  );
}
