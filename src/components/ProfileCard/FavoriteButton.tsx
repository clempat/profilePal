"use client";
import Heart from "@/icons/Heart";
import {
  ComponentProps,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { twJoin } from "tailwind-merge";
import Notification from "../Notification/Notification";
import { useFavoritesStore } from "@/stores/favorites";
import { Profile } from "@/types/Profile";

interface Props extends ComponentProps<"input"> {
  profile: Profile;
}

const FavoriteButton = forwardRef(
  (
    { profile, ...props }: Props,
    refProp: React.ComponentPropsWithRef<"input">["ref"]
  ) => {
    const [error, setError] = useState<string | null>(null);
    const ref = useRef<HTMLInputElement>(null);
    const { addToFavorites, removeFromFavorites, isFavorite } =
      useFavoritesStore();

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      try {
        if (event.target.checked) {
          addToFavorites(profile);
        } else {
          removeFromFavorites(profile);
        }
        props.onChange?.(event);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong");
        }
        if (ref.current) {
          ref.current.checked = !event.target.checked;
        }
      }
    }

    useImperativeHandle(refProp, () => ref.current as HTMLInputElement);

    return (
      <>
        {error && <Notification type="error" message={error} open={true} />}
        <label className="flex cursor-pointer">
          <input
            ref={ref}
            type="checkbox"
            defaultChecked={isFavorite(profile)}
            className="cursor-pointer peer absolute h-0 w-0 opacity-0"
            onChange={handleChange}
            {...props}
          />
          <Heart
            className={twJoin(
              "hover:animate-tada",
              "[&_.not-active]:visible [&_.not-active]:opacity-100 [&_.active]:invisible [&_.active]:opacity-0",
              "peer-checked:fill-red-500",
              "peer-checked:[&_.active]:visible peer-checked:[&_.active]:opacity-100",
              "peer-checked:[&_.not-active]:invisible peer-checked:[&_.not-active]:opacity-0"
            )}
          />
        </label>
      </>
    );
  }
);

FavoriteButton.displayName = "FavoriteButton";

export default FavoriteButton;
