import { getToken } from "@/lib/basiq/basiq";

export default async function DevPage() {
  const token = await getToken();
  return <div>{token.access_token}</div>;
}
