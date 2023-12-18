import { Profile } from "@/types/Profile";
import ProfileCard from "../ProfileCard";

interface Props {
  profiles: Profile[];
}
export default function ProfileList({ profiles }: Props) {
  return (
    <div className="mt-8 flex gap-5 flex-wrap max-w-full justify-center">
      {profiles.map((p) => (
        <ProfileCard profile={p} key={`${p.name.last}_${p.name.first}`} />
      ))}
    </div>
  );
}
