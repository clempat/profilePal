"use server";
import userSchema from "@/types/Profile";
import { z } from "zod";

export async function fetchRandomProfiles(amount: number) {
  const data = await fetch(
    `https://randomuser.me/api/?results=${amount}&inc=name,email,picture,dob`
  ).then((res) => res.json());

  const resultSchema = z.array(userSchema);

  return resultSchema.parse(data.results);
}
