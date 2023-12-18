import Image from "next/image";
import FavoriteButton from "./FavoriteButton";
import {
  formatDistanceToNowStrict,
  format,
  isPast,
  addYears,
  setYear,
  isToday,
  endOfDay,
} from "date-fns";
import { Profile } from "@/types/Profile";
export default function ProfileCard({ profile }: { profile: Profile }) {
  const { name, picture, dob } = profile;
  let birthdayDate = setYear(new Date(dob.date), new Date().getFullYear());
  if (isPast(endOfDay(birthdayDate))) {
    birthdayDate = new Date(addYears(birthdayDate, 1));
  }
  const timeToBirthday = formatDistanceToNowStrict(birthdayDate, {
    unit: "day",
    addSuffix: true,
  });

  return (
    <div
      data-testid="ProfileCard"
      className="flex flex-col rounded-lg shadow-lg bg-white dark:bg-gray-900/60 py-10 px-8 w-[350px] items-center"
    >
      <Image
        src={picture.large}
        alt={`${name.first} ${name.last}`}
        width={250}
        height={250}
        className="rounded-full"
        placeholder="blur"
        blurDataURL={picture.thumbnail}
      />
      <h3 className="mt-6 font-semibold">{`${name.first} ${name.last}`}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        🎂{" "}
        {isToday(birthdayDate)
          ? "Today"
          : `${format(birthdayDate, "do MMMM")} • ${timeToBirthday} days`}
      </p>
      <ul className="mt-6">
        <li>
          <FavoriteButton
            profile={profile}
            aria-label={`Add ${name} to favorite`}
          />
        </li>
      </ul>
    </div>
  );
}
