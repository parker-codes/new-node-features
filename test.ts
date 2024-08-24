import { describe, it } from "node:test";
import assert from "node:assert";
import { add } from "./utils.ts";

/*
 * Test Suite using node utils and assertion
 */
describe("add", () => {
  it("should add two numbers", () => {
    assert.strictEqual(add(2, 3), 5);
  });
});
