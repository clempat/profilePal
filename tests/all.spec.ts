import { test, expect } from "@playwright/test";

test("has logo", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle(/ProfilePal/);
});

test("Generate new profiles clicking on button", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.click("text=Generate");
});

test("Generate the amount according to the input", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.fill("input[name=generate]", "10");
  await page.click("text=Generate");
  const profiles = await page.$$("div[data-testid=ProfileCard]");
  expect(profiles.length).toBe(10);
});
test("Allow to add favorite profiles", async ({ page }) => {});
test("Display the favorite profiles", async ({ page }) => {});
test("Show error message if failing to generate profiles", async ({
  page,
}) => {});
