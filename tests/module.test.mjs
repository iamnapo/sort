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
	t.is(sortCjs.numberSmallToLarge, numberSmallToLarge);
	t.is(sortCjs.numberLargeToSmall, numberLargeToSmall);
	t.is(sortCjs.dateOldToNew, dateOldToNew);
	t.is(sortCjs.dateNewToOld, dateNewToOld);
	t.is(sortCjs.stringAToZ, stringAToZ);
	t.is(sortCjs.stringZToA, stringZToA);
	t.is(sortCjs.stringAToZInsensitive, stringAToZInsensitive);
	t.is(sortCjs.stringZToAInsensitive, stringZToAInsensitive);
});
