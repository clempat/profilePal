"use client";
import * as Toast from "@radix-ui/react-toast";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <Toast.Provider swipeDirection="right">
      {children}
      <Toast.Viewport className="p-[25px] w-[390px] max-w-screen fixed top-0 right-0" />
    </Toast.Provider>
  );
}
