import assert from "node:assert/strict";
import test from "node:test";
import { isLowStock } from "../../src/inventory/stock.ts";

test("uses the default reorder level of 5", () => {
  assert.equal(isLowStock(5), true);
  assert.equal(isLowStock(4), true);
  assert.equal(isLowStock(6), false);
});

test("uses a product's custom reorder level", () => {
  assert.equal(isLowStock(8, 8), true);
  assert.equal(isLowStock(9, 8), false);
});