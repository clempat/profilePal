import type { AxeMatchers } from "vitest-axe/matchers";

declare module "vitest" {
  export interface Assertion<T> extends AxeMatchers<T> {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}
