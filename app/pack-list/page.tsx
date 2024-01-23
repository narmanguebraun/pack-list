import ItemForm from "@/components/ItemForm";
import EditItem from "@/components/EditItem";

export type Item = {
  id: number;
  brand: string;
  model: string;
  reference: string;
};

export default function PackList() {
  const items: Item[] = [];

  return (
    <main className="min-h-screen p-4">
      <div className="flex justify-between p-4">
        <h1>Pack-List</h1>
        <form action="/auth/signout" method="post">
          <button
            type="submit"
            className="bg-black hover:bg-gray-500 text-white py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </form>
      </div>

      <div className="p-4">
        <ItemForm />
      </div>

      {items.map((item) => (
        <div key={item.id}>
          <h2>
            {item.brand} - {item.model}
          </h2>
          <div>
            <form action={"deleteItem"}>
              <input type="hidden" name="id" value={item.id} />
              <button type="submit">Delete Item</button>
            </form>
            <EditItem item={item} />
          </div>
        </div>
      ))}
    </main>
  );
}
