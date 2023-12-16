import { fetchRandomUsers } from "@/services/randomUser";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const amount = searchParams.get("amount");
  if (!amount) return new Response("Please provide an amount", { status: 400 });
  const profiles = await fetchRandomUsers(parseInt(amount, 10));
  return Response.json(profiles);
}
