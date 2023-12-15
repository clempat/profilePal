import ProfileCard from "./ProfileCard";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { axe } from "vitest-axe";
import { faker } from "@faker-js/faker";

const defaultProps = {
  image: faker.image.avatar(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
};

describe("ProfileCard", () => {
  it("renders without crashing", () => {
    render(<ProfileCard {...defaultProps} />);
  });

  it("has no accessibility violations", async () => {
    const { container } = render(<ProfileCard {...defaultProps} />);
    // Some issue with the lib?
    // @ts-ignore
    expect(await axe(container)).toHaveNoViolations();
  });
});
