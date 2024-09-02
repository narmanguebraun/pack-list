import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import CreateItemModal from "@/components/CreateItemModal";
import Header from "@/components/Header";
import ItemCard from "@/components/ItemCard";

export default async function PackList() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  const { data: items, error } = await supabase
    .from("items")
    .select("*")
    .eq("user_id", user?.id)
    .order("brand", { ascending: true });

  if (error) {
    console.error("Error fetching items");
  }

  return (
    <main className="min-h-screen max-w-[1440px] m-auto bg-matte">
      <Header />

      <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items?.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}
