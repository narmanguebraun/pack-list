"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function updateItem(formData) {
  const id = formData.get("id");
  const brand = formData.get("brand");
  const model = formData.get("model");
  const reference = formData.get("reference");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error("User is not authenticated within updateItem server action");
    return;
  }

  const { data, error } = await supabase
    .from("items")
    .update({
      brand,
      model,
      reference,
    })
    .match({ id, user_id: user.id });

  if (error) {
    console.error("Error updating data", error);
    return;
  }

  revalidatePath("/pack-list");

  return { message: "Success" };
}
