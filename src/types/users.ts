import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  name: z.object({
    first: z.string(),
    last: z.string(),
  }),
  picture: z.object({
    large: z.string(),
    medium: z.string(),
    thumbnail: z.string(),
  }),
});

export type User = z.infer<typeof userSchema>;

export default userSchema;
