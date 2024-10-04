import Link from "next/link";
import { GitHubIcon, TwitterIcon } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <div className="flex justify-between items-center p-4 bg-black text-white border-dark border-b">
      <div className="flex gap-6 items-center">
        <Link href="/" className="uppercase font-mono">
          Pack-List
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="https://github.com/narmanguebraun">
          <GitHubIcon />
        </Link>
        <Link href="https://x.com/narmanguebraun">
          <TwitterIcon />
        </Link>
      </div>
    </div>
  );
}
