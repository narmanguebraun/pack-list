import LoggedInUser from "@/components/LoggedInUser";
import Link from "next/link";
import CreateItemModal from "./CreateItemModal";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white">
      <div className="flex gap-6 items-center">
        <Link href="/" className="uppercase">
          Pack-List
        </Link>
        <CreateItemModal />
      </div>
      <div className="flex items-center gap-4">
        <LoggedInUser />
      </div>
    </div>
  );
}
