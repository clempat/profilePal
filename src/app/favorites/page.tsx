"use client";
import ProfileList from "@/components/ProfileList";
import { useFavoritesStore } from "@/stores/favorites";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function FavoritesPage() {
  const favorites = useFavoritesStore((s) => s.favorites);
  return (
    <>
      <h1 className="text-xl">Your favorites</h1>
      {favorites.length === 0 ? (
        <>
          No favorites! Start looking for new one in <Link href="/">There</Link>
        </>
      ) : (
        <ProfileList profiles={favorites} />
      )}
    </>
  );
}
