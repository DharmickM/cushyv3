import { CardDemo } from "@/components/ui/aceternity/animated-block-card";
import { Button } from "@/components/ui/button"
import { createClient } from "@/utils/supabase/server";

export default async function AccountVerification() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="flex h-screen bg-[url('/Background.svg')] bg-cover bg-no-repeat items-center justify-center">
      <div className="flex flex-col items-center">
        <CardDemo />
        <Button className="mt-5">Connect bank account</Button>
      </div>
    </div>
  )
}

