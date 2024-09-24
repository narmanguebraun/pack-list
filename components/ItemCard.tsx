import Image from "next/image";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import { Item } from "@/types";

interface ItemCardProps {
  item: Item;
}

export default async function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-dark p-4 rounded">
      <h1>{item.model}</h1>
      <h2>{item.brand}</h2>
      <p>{item.reference}</p>

      <div className="mt-4 flex flex-row items-center justify-end gap-2">
        <EditItem item={item} />
        <DeleteItem id={item.id} />
      </div>
    </div>
  );
}
