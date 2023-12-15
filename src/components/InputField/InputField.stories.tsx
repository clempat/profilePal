import { Meta, StoryObj } from "@storybook/react";

import InputField from "./InputField";

const meta: Meta = {
  component: InputField,
  title: "🧩 Components/Input Field",
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Label",
    type: "text",
  },
};
