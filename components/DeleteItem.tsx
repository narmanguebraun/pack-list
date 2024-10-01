import { deleteItem } from "@/actions/actions";
import { DeleteIcon } from "@/components/ui/Icons";
import { Item } from "@/types";

interface DeleteItemProps {
  id: Item["id"];
}
export default async function DeleteItem({ id }: DeleteItemProps) {
  return (
    /* @ts-ignore */
    <form action={deleteItem}>
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="flex items-center gap-2 bg-dark text-white  hover:bg-white hover:text-black rounded py-1 px-2 text-xs"
      >
        <DeleteIcon />
      </button>
    </form>
  );
}
