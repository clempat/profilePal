"use server";
import userSchema from "@/types/users";
import { z } from "zod";

export async function fetchRandomUsers(amount: number) {
  const data = await fetch(
    `https://randomuser.me/api/?results=${amount}&inc=name,email,picture`
  ).then((res) => res.json());

  const resultSchema = z.array(userSchema);

  return resultSchema.parse(data.results);
}
