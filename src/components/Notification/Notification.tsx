import * as Toast from "@radix-ui/react-toast";
import { ComponentProps, useCallback, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { cva } from "class-variance-authority";

interface ToastProps
  extends Omit<ComponentProps<typeof Toast.Root>, "open" | "type" | "title"> {
  message: string;
  type: "success" | "error" | "warning";
  open: boolean;
  onOpenChange?: (open: boolean) => void;
}

const icon = cva(
  ["inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"],
  {
    variants: {
      type: {
        warning: [
          "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200",
        ],
        success: [
          "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
        ],
        error: [
          "text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200",
        ],
      },
    },
    defaultVariants: {
      type: "success",
    },
  }
);

export default function Notification({
  message,
  type,
  open: initialOpen,
  onOpenChange,
  ...props
}: ToastProps) {
  const [open, setOpen] = useState(initialOpen);

  const handleOpenChange = useCallback(
    function handleOpenChange(open: boolean) {
      setOpen(open);
      onOpenChange?.(open);
    },
    [onOpenChange]
  );

  useEffect(() => {
    setOpen(initialOpen);
  }, [initialOpen]);

  return (
    <Toast.Root
      className={twMerge(
        "flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800",
        "data-[state=open]:animate-slideIn", // Slide in
        "data-[swipe=move]transform data-[swipe=move]:translate-x-[--radix-toast-swipe-move-x]", // Move
        "data-[swipe=cancel]:transform data-[swipe=cancel]:animate-toastCancel data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-transform data-[swipe=cancel]:duration-200 data-[swipe=cancel]:ease-out", // Cancel
        "data-[swipe=end]:animate-toastEnd"
      )}
      role="alert"
      open={open}
      onOpenChange={handleOpenChange}
      {...props}
    >
      <div className={icon({ type })}>
        {renderIcon(type)}
        <span className="sr-only">{type} icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">Set yourself free.</div>
      <Toast.Action asChild altText="Close">
        <button
          type="button"
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-default"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </Toast.Action>
    </Toast.Root>
  );
}

function renderIcon(type: "success" | "error" | "warning") {
  switch (type) {
    case "success":
      return (
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
      );
    case "error":
      return (
        <svg
          className="w-3 h-3"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      );
    case "warning":
      return (
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
        </svg>
      );
  }
}
