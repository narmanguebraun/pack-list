import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import ItemForm from "@/app/components/ItemForm";
import EditItem from "@/app/components/EditItem";
import { deleteItem } from "@/app/server-actions/deleteItem";

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
    <main className="min-h-screen p-4 font-mono">
      <div className="flex justify-between items-center p-4">
        <h1>Pack-List</h1>
        <div className="flex items-center gap-4">
          {user?.email}
          <form action="/auth/signout" method="post">
            <button
              type="submit"
              className="border border-white bg-black hover:bg-gray-500 text-white py-1 px-4 rounded"
            >
              Sign Out &rarr;
            </button>
          </form>
        </div>
      </div>

      <div className="p-4">
        <ItemForm />
      </div>
      <div className="p-4 flex flex-col gap-4">
        {items?.map((item) => (
          <div
            key={item.id}
            className="border border-gray rounded py-2 px-4 flex justify-between items-center"
          >
            <h2>
              {item.brand} - {item.model}
            </h2>
            <div className="flex flex-row items-center gap-2">
              <EditItem item={item} />
              <form action={deleteItem}>
                <input type="hidden" name="id" value={item.id} />
                <button
                  type="submit"
                  className="border border-cyan-500 bg-cyan-500 text-black hover:bg-black hover:text-cyan-500 uppercase rounded px-2"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
