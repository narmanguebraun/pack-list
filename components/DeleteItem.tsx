import { deleteItem } from "@/actions/actions";
import { CloseIcon } from "@/components/ui/Icons";
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
        className="flex items-center gap-2 text-white hover:bg-white hover:text-black p-2 text-xs"
      >
        <CloseIcon aria-label="Delete" />
      </button>
    </form>
  );
}
