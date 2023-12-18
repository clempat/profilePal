import { z } from "zod";

const profileSchema = z.object({
  name: z.object({
    first: z.string(),
    last: z.string(),
  }),
  picture: z.object({
    large: z.string(),
    medium: z.string(),
    thumbnail: z.string(),
  }),
  dob: z.object({
    age: z.number(),
    date: z.string(),
  }),
});

export type Profile = z.infer<typeof profileSchema>;

export default profileSchema;
