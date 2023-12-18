import { Profile } from "@/types/Profile";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesStore {
  favorites: Profile[];
  addToFavorites: (profile: Profile) => void;
  removeFromFavorites: (profile: Profile) => void;
  isFavorite: (profile: Profile) => boolean;
}

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [] as Profile[],
      addToFavorites: (profile) =>
        set((state) => ({
          favorites: [...state.favorites, profile],
        })),
      removeFromFavorites: (profile) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (favorite) => !isSameProfile(favorite, profile)
          ),
        })),
      isFavorite: (profile) => {
        const favorites = get().favorites;
        return favorites.some((favorite) => isSameProfile(favorite, profile));
      },
    }),
    {
      name: "favoritesStore",
    }
  )
);

function isSameProfile(a: Profile, b: Profile) {
  return a.name.last === b.name.last && a.name.first === b.name.first;
}
