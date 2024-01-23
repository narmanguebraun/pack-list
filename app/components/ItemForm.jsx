import { addItem } from "@/app/server-actions/addItem";

export default function ItemForm() {
  return (
    <form action={addItem}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label htmlFor="brand">Brand</label>
          <input
            className="border border-gray bg-black rounded py-1 px-4"
            type="text"
            id="brand"
            name="brand"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="model">Model</label>
          <input
            className="border border-gray bg-black rounded py-1 px-4"
            type="text"
            id="model"
            name="model"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="reference">Reference</label>
          <input
            className="border border-gray bg-black rounded py-1 px-4"
            type="text"
            id="reference"
            name="reference"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-6 border border-cyan-500 bg-cyan-500 text-black hover:bg-black hover:text-cyan-500 uppercase rounded py-1 px-4"
        >
          Add item
        </button>
      </div>
    </form>
  );
}
