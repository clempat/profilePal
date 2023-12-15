export default function getFavorites() {
  "use client";
  const favorites = localStorage.getItem("favorites");
  try {
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    localStorage.removeItem("favorites");
    console.log(error);
    return [];
  }
}
