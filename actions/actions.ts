"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

/* CREATE ITEM */

export async function createItem(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    return { error: "User is not authenticated" };
  }

  const brand = formData.get("brand") as string;
  const model = formData.get("model") as string;
  const reference = formData.get("reference") as string;
  const image = formData.get("image") as File;

  if (!brand || !model || !reference || !image) {
    return { error: "Missing required fields" };
  }

  try {
    // Generate a unique filename
    const fileExt = image.name.split(".").pop();
    const fileName = `${user.id}/${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 15)}.${fileExt}`;

    // Upload image
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("images")
      .upload(fileName, image);

    if (uploadError) {
      throw new Error(`Error uploading image: ${uploadError.message}`);
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from("images")
      .getPublicUrl(fileName);

    if (!publicUrlData.publicUrl) {
      throw new Error("Failed to get public URL for uploaded image");
    }

    // Insert item data
    const { data, error: insertError } = await supabase
      .from("items")
      .insert({
        brand,
        model,
        reference,
        image_url: publicUrlData.publicUrl,
        user_id: user.id,
      })
      .select();

    if (insertError) {
      throw new Error(`Error inserting data: ${insertError.message}`);
    }

    // Revalidate the pack-list page
    revalidatePath("/pack-list");

    return { message: "Item created successfully", data };
  } catch (error) {
    console.error("Error in createItem:", error);
    return {
      error:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
}

/* UPDATE ITEM */

export const updateItem = async (formData: FormData) => {
  const id = formData.get("id");
  const brand = formData.get("brand");
  const model = formData.get("model");
  const reference = formData.get("reference");
  const image = formData.get("image");

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
      image,
    })
    .match({ id, user_id: user.id });

  if (error) {
    console.error("Error updating data", error);
    return;
  }

  revalidatePath("/pack-list");

  return { message: "Success" };
};

/* DELETE ITEM */

export const deleteItem = async (formData: FormData) => {
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
  const itemId = formData.get("id");

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
