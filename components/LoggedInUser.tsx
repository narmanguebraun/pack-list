import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import Button from "./ui/Button";
import { LogOutIcon } from "./ui/Icons";

export default async function LoggedInUser() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  return (
    <>
      {user?.email}
      <form action="/auth/signout" method="post">
        <Button type="submit">
          <LogOutIcon /> Log Out
        </Button>
      </form>
    </>
  );
}
