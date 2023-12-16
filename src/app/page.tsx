import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { fetchRandomUsers } from "@/services/randomUser";

export default async function Home() {
  const profiles = await fetchRandomUsers(20);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full max-w-7xl items-center justify-center">
        {/* <GenerateInput/> */}
        <div className="mt-8 flex gap-4 flex-wrap max-w-full justify-center">
          {profiles.map((p) => (
            <ProfileCard
              key={p.name.first + p.name.last}
              email={p.email}
              name={`${p.name.first} ${p.name.last}`}
              image={p.picture.large}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
