"use client";
import Heart from "@/icons/Heart";
import { ComponentProps, forwardRef, useImperativeHandle, useRef } from "react";
import { twJoin } from "tailwind-merge";

interface Props extends ComponentProps<"input"> {
  isFavorited: boolean;
}

const FavoriteButton = forwardRef(
  (
    { isFavorited: initialIsFavorited, onChange, ...props }: Props,
    refProp: React.ComponentPropsWithRef<"input">["ref"]
  ) => {
    const ref = useRef<HTMLInputElement>(null);

    useImperativeHandle(refProp, () => ref.current as HTMLInputElement);

    return (
      <label className="flex cursor-pointer">
        <input
          ref={ref}
          type="checkbox"
          defaultChecked={initialIsFavorited}
          className="cursor-pointer peer absolute h-0 w-0 opacity-0"
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
    );
  }
);

FavoriteButton.displayName = "FavoriteButton";

export default FavoriteButton;
