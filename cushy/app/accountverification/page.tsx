import {CardDemo } from "@/components/ui/aceternity/animated-block-card";
import { ShieldCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/server";
export default async function AccountVerification() {
    const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return <div className="flex flex-col items-center justify-center h-screen">
    <CardDemo />
    <Button className="mt-5">Hey! {user?.email}</Button>
    <Button className="mt-5">Connect bank account</Button>
        </div>;
}
