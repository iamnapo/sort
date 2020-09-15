const test = require("ava");

const sort = require("..");

test("main", (t) => {
	t.truthy(sort.numberSmallToLarge());
	t.truthy(sort.numberLargeToSmall());
	t.truthy(sort.dateOldToNew());
	t.truthy(sort.dateNewToOld());
	t.truthy(sort.stringAToZ());
	t.truthy(sort.stringZToA());
	t.truthy(sort.stringAToZInsensitive());
	t.truthy(sort.stringZToAInsensitive());
	t.deepEqual([12, -42, -Infinity, 123, Number.NaN].sort(sort.numberSmallToLarge()), [Number.NaN, -Infinity, -42, 12, 123]);
	t.deepEqual([12, -42, -Infinity, 123, Number.NaN].sort(sort.numberLargeToSmall()), [123, 12, -42, -Infinity, Number.NaN]);
	t.deepEqual([
		new Date("2019-06-28"),
		new Date("2019-06-10"),
		new Date("2019-06-22"),
	].sort(sort.dateOldToNew()), [new Date("2019-06-10"), new Date("2019-06-22"), new Date("2019-06-28")]);
	t.deepEqual([
		new Date("2019-06-28"),
		new Date("2019-06-10"),
		new Date("2019-06-22"),
	].sort(sort.dateNewToOld()), [new Date("2019-06-28"), new Date("2019-06-22"), new Date("2019-06-10")]);
	t.deepEqual(["b", "a", "c"].sort(sort.stringAToZ()), ["a", "b", "c"]);
	t.deepEqual(["b", "a", "c"].sort(sort.stringZToA()), ["c", "b", "a"]);
	t.deepEqual(["B", "a", "C"].sort(sort.stringAToZInsensitive()), ["a", "B", "C"]);
	t.deepEqual(["B", "a", "C"].sort(sort.stringZToAInsensitive()), ["C", "B", "a"]);
	t.deepEqual([
		{ name: "Alice", age: 20 },
		{ name: "Bob", age: 30 },
		{ name: "Napoleon", age: 26 },
	].sort(sort.numberSmallToLarge((p) => p.age)), [{ name: "Alice", age: 20 }, { name: "Napoleon", age: 26 }, { name: "Bob", age: 30 }]);
});
