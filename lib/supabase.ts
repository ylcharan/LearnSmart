import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

export const createSupabaseClient = async () => {
  const { getToken } = await auth();
  const token = await getToken({ template: "supabase" });
  // 👆 must match the JWT template name you set in Clerk dashboard

  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      },
    }
  );
};
