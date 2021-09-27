import { expectType } from "tsd";

import {
	numberSmallToLarge,
	numberLargeToSmall,
	dateOldToNew,
	dateNewToOld,
	stringAToZ,
	stringZToA,
	stringAToZInsensitive,
	stringZToAInsensitive,
} from "../index.js";

expectType<number[]>([12, -42, Number.NEGATIVE_INFINITY, 123, Number.NaN].sort(numberSmallToLarge()));
expectType<number[]>([12, -42, Number.NEGATIVE_INFINITY, 123, Number.NaN].sort(numberLargeToSmall()));
expectType<Date[]>([new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(dateOldToNew()));
expectType<Date[]>([new Date("2019-06-28"), new Date("2019-06-10"), new Date("2019-06-22")].sort(dateNewToOld()));
expectType<string[]>(["b", "a", "c"].sort(stringAToZ()));
expectType<string[]>(["b", "a", "c"].sort(stringZToA()));
expectType<string[]>(["B", "a", "C"].sort(stringAToZInsensitive()));
expectType<string[]>(["B", "a", "C"].sort(stringZToAInsensitive()));
