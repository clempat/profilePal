import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
export default function ProfileCard({
  name,
  image,
  email,
  isFavorited,
  onFavorited,
}: {
  name: string;
  image: string;
  email: string;
  isFavorited?: boolean;
  onFavorited?: (isFavorited: boolean) => void;
}) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg bg-white dark:bg-gray-900/60 py-10 px-8 w-[350px] items-center">
      <div className="">
        <Image
          src={image}
          alt={name}
          width={250}
          height={250}
          className="rounded-full"
        />
      </div>
      <h3 className="mt-6 font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{email}</p>
      <ul className="mt-6">
        <li>
          <FavoriteButton
            isFavorited={Boolean(isFavorited)}
            aria-label={`Add ${name} to favorite`}
          />
        </li>
      </ul>
    </div>
  );
}
