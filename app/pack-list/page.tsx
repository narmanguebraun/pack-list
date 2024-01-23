import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ItemForm from "@/components/ItemForm";
import EditItem from "@/components/EditItem";

export type Item = {
  id: number;
  brand: string;
  model: string;
  reference: string;
};

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

  console.log(items);

  return (
    <main className="min-h-screen p-4">
      <div className="flex justify-between p-4">
        <h1>Pack-List</h1>
        <form action="/auth/signout" method="post">
          <button
            type="submit"
            className="bg-black hover:bg-gray-500 text-white py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </form>
      </div>

      <div className="p-4">
        <ItemForm />
      </div>

      {items.map((item) => (
        <div key={item.id}>
          <h2>
            {item.brand} - {item.model}
          </h2>
          <div>
            <form action={"deleteItem"}>
              <input type="hidden" name="id" value={item.id} />
              <button type="submit">Delete Item</button>
            </form>
            <EditItem item={item} />
          </div>
        </div>
      ))}
    </main>
  );
}
