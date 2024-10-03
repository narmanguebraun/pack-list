import Image from "next/image";
import DeleteItem from "./DeleteItem";
import EditItem from "./EditItem";
import { Item } from "@/types";

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="relative flex flex-row gap-5 bg-matte md:flex-col md:border-0">
      <div className="absolute right-0 top-0 bg-matte">
        <DeleteItem id={item.id} />
        <EditItem item={item} />
      </div>

      <div className="flex justify-center items-center overflow-hidden h-32 w-32 md:w-full md:h-full">
        {item.image_url ? (
          <Image
            src={item.image_url}
            alt={`${item.model} ${item.brand} ${item.reference}`}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="w-full h-full bg-black flex items-center justify-center">
            No Image
          </div>
        )}
      </div>
      <div className="pt-4 md:pb-5 md:pt-0 md:pl-5 font-mono">
        <h1>{item.model}</h1>
        <h2>{item.brand}</h2>
        <p>{item.reference}</p>
      </div>
    </div>
  );
}
