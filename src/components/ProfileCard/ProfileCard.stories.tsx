import type { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import ProfileCard from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "🧩 Components/Profile Card",
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    image: faker.image.avatar(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
  },
};
