import LoggedInUser from "@/components/LoggedInUser";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white border-dark border-b">
      <div className="flex gap-6 items-center">
        <Link href="/" className="uppercase font-mono">
          Pack-List
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <LoggedInUser />
      </div>
    </div>
  );
}
