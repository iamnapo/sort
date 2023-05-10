import test from "node:test";
import { strict as assert } from "node:assert";

import {
	stringZToAInsensitive,
	stringAToZInsensitive,
	stringZToA,
	stringAToZ,
	dateNewToOld,
	dateOldToNew,
	numberLargeToSmall,
	numberSmallToLarge,
} from "../index.js";

await test("main", () => {
	assert.ok(numberSmallToLarge());
	assert.ok(numberLargeToSmall());
	assert.ok(dateOldToNew());
	assert.ok(dateNewToOld());
	assert.ok(stringAToZ());
	assert.ok(stringZToA());
	assert.ok(stringAToZInsensitive());
	assert.ok(stringZToAInsensitive());
	assert.deepEqual(
		[12, -42, Number.NEGATIVE_INFINITY, 123, Number.NaN].sort(numberSmallToLarge()),
		[Number.NaN, Number.NEGATIVE_INFINITY, -42, 12, 123],
	);
	assert.deepEqual(
		[12, -42, Number.NEGATIVE_INFINITY, 123, Number.NaN].sort(numberLargeToSmall()),
		[123, 12, -42, Number.NEGATIVE_INFINITY, Number.NaN],
	);
	assert.deepEqual(
		[new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(dateOldToNew()),
		[new Date("2019-06-10"), new Date("2019-06-22"), new Date("2019-06-28")],
	);
	assert.deepEqual(
		[new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(dateNewToOld()),
		[new Date("2019-06-28"), new Date("2019-06-22"), new Date("2019-06-10")],
	);
	assert.deepEqual(["b", "a", "c"].sort(stringAToZ()), ["a", "b", "c"]);
	assert.deepEqual(["b", "a", "c"].sort(stringZToA()), ["c", "b", "a"]);
	assert.deepEqual(["B", "a", "C"].sort(stringAToZInsensitive()), ["a", "B", "C"]);
	assert.deepEqual(["B", "a", "C"].sort(stringZToAInsensitive()), ["C", "B", "a"]);
	assert.deepEqual(
		[
			{ name: "Alice", age: 20 },
			{ name: "Bob", age: 30 },
			{ name: "Napoleon", age: 26 },
		].sort(numberSmallToLarge((p) => (p as { age: number }).age)),
		[
			{ name: "Alice", age: 20 },
			{ name: "Napoleon", age: 26 },
			{ name: "Bob", age: 30 },
		],
	);
});
