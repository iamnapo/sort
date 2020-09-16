/* eslint-disable import/no-named-as-default-member */
import test from "ava";

import sort, {
	numberSmallToLarge,
	numberLargeToSmall,
	dateOldToNew,
	dateNewToOld,
	stringAToZ,
	stringZToA,
	stringAToZInsensitive,
	stringZToAInsensitive,
} from "../index.mjs"; // eslint-disable-line import/extensions
import sortCjs from "../index.js";

test("module", (t) => {
	t.is(sort, sortCjs);
	t.is(sort.numberSmallToLarge, numberSmallToLarge);
	t.is(sort.numberLargeToSmall, numberLargeToSmall);
	t.is(sort.dateOldToNew, dateOldToNew);
	t.is(sort.dateNewToOld, dateNewToOld);
	t.is(sort.stringAToZ, stringAToZ);
	t.is(sort.stringZToA, stringZToA);
	t.is(sort.stringAToZInsensitive, stringAToZInsensitive);
	t.is(sort.stringZToAInsensitive, stringZToAInsensitive);
});
