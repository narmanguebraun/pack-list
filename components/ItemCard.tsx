import Image from "next/image";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import { Item } from "@/types";

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="bg-dark p-4 rounded flex flex-col sm:flex-row gap-4">
      <div className="w-full sm:w-24 h-24 flex justify-center items-center overflow-hidden">
        {item.image_url ? (
          <Image
            src={item.image_url}
            alt={`${item.model} ${item.brand} ${item.reference}`}
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center">
            No Image
          </div>
        )}
      </div>
      <div className="flex-grow">
        <h1 className="text-lg">{item.model}</h1>
        <h2 className="text-md">{item.brand}</h2>
        <p className="text-sm">{item.reference}</p>
      </div>
      <div className="flex flex-row items-center justify-end gap-2 mt-2 sm:mt-0">
        <EditItem item={item} />
        <DeleteItem id={item.id} />
      </div>
    </div>
  );
}
