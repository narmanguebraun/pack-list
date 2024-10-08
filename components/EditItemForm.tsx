"use client";

import { useState, useRef } from "react";
import { updateItem } from "@/actions/actions";
import Button from "./ui/Button";
import { Item } from "@/types";

interface EditItemFormProps {
  item: Item;
  onSubmit?: () => void;
}

export default function EditItemForm({ item, onSubmit }: EditItemFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    brand: item.brand,
    model: item.model,
    reference: item.reference,
    image: item.image_url,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <form
      ref={ref}
      action={async (formData) => {
        ref.current?.reset();
        await updateItem(formData, item.id);
      }}
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-4">
        <input type="hidden" name="id" value={item.id} />
        <div className="flex flex-col">
          <label htmlFor="brand" className="text-xs mb-2">
            Brand
          </label>
          <input
            className="bg-dark p-2 font-mono"
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
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
            value={formData.model}
            onChange={handleChange}
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
            value={formData.reference}
            onChange={handleChange}
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
        <Button type="submit">Update</Button>
      </div>
    </form>
  );
}
