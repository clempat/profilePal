import ProfileCard from "./ProfileCard";
import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import { faker } from "@faker-js/faker";
import { beforeEach } from "node:test";
import { ComponentProps } from "react";

const profileImage = faker.image.avatar();

const defaultProps = {
  profile: {
    picture: {
      thumbnail: profileImage,
      large: profileImage,
      medium: profileImage,
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
} as ComponentProps<typeof ProfileCard>;

describe("ProfileCard", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("renders without crashing", () => {
    render(<ProfileCard {...defaultProps} />);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<ProfileCard {...defaultProps} />);
    // Some issue with the lib?
    // @ts-ignore
    expect(await axe(container)).toHaveNoViolations();
  });

  it("show today if the birthday is today", async () => {
    const today = new Date();
    const props = { ...defaultProps };
    props.profile.dob.date = today.toISOString();
    const { getByText } = render(<ProfileCard {...props} />);
    expect(getByText(/Today/)).toBeTruthy();
  });
});
