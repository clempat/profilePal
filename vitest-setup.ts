import * as matchers from "vitest-axe/matchers";
import { expect, vi } from "vitest";

expect.extend(matchers);
vi.mock("zustand");
