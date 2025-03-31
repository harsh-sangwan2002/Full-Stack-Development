import { test, expect } from "vitest"
import { incrementByTwo } from "./utils/math"

test("incrementByTwo", () => {
    const result = incrementByTwo(3);
    console.log(result);
    // Check if the result is correct
    expect(result).toBe(5);
}
);
