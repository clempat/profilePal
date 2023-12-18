import GenerateInput from "@/components/GenerateInput";
import ProfileList from "@/components/ProfileList/ProfileList";
import { fetchRandomProfiles } from "@/services/randomUser";

export const dynamic = "force-dynamic";

export default async function Home({
  searchParams,
}: {
  searchParams: { generate: string };
}) {
  const amount = Number(searchParams.generate) || 20;
  const profiles = await fetchRandomProfiles(amount);
  return (
    <>
      <div className="w-[350px]">
        <GenerateInput method="GET" defaultValue={amount} />
      </div>
      <ProfileList profiles={profiles} />
    </>
  );
}
