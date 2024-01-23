"use client";

import { useState } from "react";
import { updateItem } from "@/app/server-actions/updateItem";
import { EditIcon } from "./ui/Icons";

export default function EditItem({ item }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    brand: item.brand,
    model: item.model,
    reference: item.reference,
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div>
      <button
        className="border border-cyan-500 bg-cyan-500 text-black hover:bg-black hover:text-cyan-500 uppercase rounded px-2"
        onClick={() => setShowModal(true)}
      >
        Modify
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center px-4">
          <div className="modal-content bg-black p-4 rounded-lg w-full max-w-md">
            <span
              className="close text-xl leading-none hover:text-gray-300 cursor-pointer float-right"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <form action={updateItem} onSubmit={() => setShowModal(false)}>
              <div className="flex flex-col gap-2">
                <input type="hidden" name="id" value={item.id} />
                <div className="flex flex-col">
                  <label htmlFor="brand">Brand</label>
                  <input
                    className="border border-gray bg-black rounded p-2"
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="model">Model</label>
                  <input
                    className="border border-gray bg-black rounded p-2"
                    type="text"
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="reference">Reference</label>
                  <input
                    className="border border-gray bg-black rounded p-2"
                    type="text"
                    id="reference"
                    name="reference"
                    value={formData.reference}
                    onChange={handleChange}
                  />
                </div>
                <button
                  className="mt-4 border border-cyan-500 bg-cyan-500 text-black hover:bg-black hover:text-cyan-500 uppercase rounded py-1 px-4"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
