"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const createItem = async (formData: FormData) => {
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
    console.error("User is not authenticated within addItem server action");
    return;
  }

  const { data, error } = await supabase.from("items").insert([
    {
      brand,
      model,
      reference,
      user_id: user.id,
    },
  ]);

  if (error) {
    console.error("Error inserting data", error);
    return;
  }

  revalidatePath("/pack-list");

  return { message: "Success" };
};

export const updateItem = async (formData: FormData) => {
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
};

export const deleteItem = async (formData: FormData) => {
  const itemId = formData.get("id");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error("User is not authenticated within deleteItem server action");
    return;
  }

  const { error } = await supabase
    .from("items")
    .delete()
    .match({ id: itemId, user_id: user.id });

  if (error) {
    console.error("Error deleting data", error);
    return;
  }

  revalidatePath("/pack-list");

  return { message: "Success" };
};
