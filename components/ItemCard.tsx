import EditItem from "@/components/EditItemForm";
import DeleteItem from "./DeleteItem";
import EditItemModal from "./EditItemModal";

interface ItemCardProps {
  item: Item;
}

export type Item = {
  id: number;
  brand: string;
  model: string;
  reference: string;
};

export default async function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-dark p-4 rounded">
      <div className="relative flex h-full flex-col justify-between">
        <h1>{item.model}</h1>
        <h2>{item.brand}</h2>
        <p>{item.reference}</p>

        <div className="mt-4 flex flex-row items-center justify-end gap-2">
          <EditItemModal item={item} />
          <DeleteItem id={item.id} />
        </div>
      </div>
    </div>
  );
}
