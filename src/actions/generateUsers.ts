"use server";
import { fetchRandomUsers } from "@/services/randomUser";

export default async function generateUsers(formData: any) {
  console.log("formData", formData);
  const amount = formData.get("amount");

  const users = fetchRandomUsers(parseInt(amount, 10));

  return users;
}
