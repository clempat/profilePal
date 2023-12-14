import HeartFilled from "@/icons/HeartFilled";
import HeartPlus from "@/icons/HeartPlus";
import Image from "next/image";
export default function ProfileCard({
  name,
  image,
  email,
  isFavorite,
}: {
  name: string;
  image: string;
  email: string;
  isFavorite?: boolean;
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
          <button aria-label={`Add ${name} to favorite`}>
            {isFavorite ? (
              <HeartFilled className="text-red-700" />
            ) : (
              <HeartPlus />
            )}
          </button>
        </li>
      </ul>
    </div>
  );
}
