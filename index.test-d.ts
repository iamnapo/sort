import {
	numberSmallToLarge,
	numberLargeToSmall,
	dateOldToNew,
	dateNewToOld,
	stringAToZ,
	stringZToA,
	stringAToZInsensitive,
	stringZToAInsensitive,
} from "./index.js";

[12, -42, -Infinity, 123, Number.NaN].sort(numberSmallToLarge());
[12, -42, -Infinity, 123, Number.NaN].sort(numberLargeToSmall());
[new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(dateOldToNew());
[new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(dateNewToOld());
["b", "a", "c"].sort(stringAToZ());
["b", "a", "c"].sort(stringZToA());
["B", "a", "C"].sort(stringAToZInsensitive());
["B", "a", "C"].sort(stringZToAInsensitive());
