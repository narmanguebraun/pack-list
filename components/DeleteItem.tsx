import { deleteItem } from "@/actions/actions";
import { DeleteIcon } from "@/components/ui/Icons";

interface DeleteItemProps {
  id: Item["id"];
}

export type Item = {
  id: number;
  brand: string;
  model: string;
  reference: string;
};

export default async function DeleteItem({ id }: DeleteItemProps) {
  return (
    <form action={deleteItem}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="flex items-center gap-2 bg-black text-white  hover:bg-white hover:text-black rounded py-1 px-2 text-xs"
      >
        <DeleteIcon />
      </button>
    </form>
  );
}
