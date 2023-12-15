import { Meta, StoryObj } from "@storybook/react";

import Notification from "./Notification";
import * as Toast from "@radix-ui/react-toast";
import { useEffect, useRef, useState } from "react";

const meta: Meta = {
  component: Notification,
  title: "🧩 Components/Notification",
  decorators: [
    (Story) => {
      return (
        <Toast.Provider swipeDirection="right">
          <Story />
          <Toast.Viewport className="p-[25px] w-[390px] max-w-screen fixed top-0 right-0" />
        </Toast.Provider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    type: "success",
    message: "Set yourself free.",
    open: true,
  },
};
