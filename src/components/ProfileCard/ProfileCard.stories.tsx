import type { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

import ProfileCard from "./ProfileCard";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof ProfileCard> = {
  title: "🧩 Components/Profile Card",
  component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    profile: {
      picture: {
        thumbnail: faker.image.avatar(),
        large: faker.image.avatar(),
        medium: faker.image.avatar(),
      },
      name: {
        first: faker.person.firstName(),
        last: faker.person.lastName(),
      },
      dob: {
        date: faker.date.past().toISOString(),
        age: faker.number.int({ min: 18, max: 80 }),
      },
    },
  },
};
