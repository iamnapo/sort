const assertGet = (get) => {
	if (typeof get !== "function") {
		throw new TypeError("Expected a function");
	}
};
const assertNumber = (number) => {
	if (typeof number !== "number") {
		throw new TypeError("Expected a number");
	}
};
const assertDate = (date) => {
	if (!(date instanceof Date)) {
		throw new TypeError("Expected a date");
	}
};
const assertString = (string) => {
	if (typeof string !== "string" && !(string instanceof String)) {
		throw new TypeError("Expected a string");
	}
};

const numberSmallToLarge = (get = ((v) => v)) => assertGet(get) || ((l, r) => {
	const left = get(l);
	const right = get(r);

	assertNumber(left);
	assertNumber(right);

	if (Number.isNaN(left)) return -1;
	if (Number.isNaN(right)) return 1;

	return left - right;
});
const numberLargeToSmall = (get = ((v) => v)) => assertGet(get) || ((l, r) => {
	const left = get(l);
	const right = get(r);

	assertNumber(left);
	assertNumber(right);

	if (Number.isNaN(left)) return 1;
	if (Number.isNaN(right)) return -1;

	return right - left;
});

const dateOldToNew = (get = ((v) => v)) => assertGet(get) || ((l, r) => {
	const left = get(l);
	const right = get(r);

	assertDate(left);
	assertDate(right);

	if (left.toString() === "Invalid Date") return -1;
	if (right.toString() === "Invalid Date") return 1;

	return left - right;
});
const dateNewToOld = (get = ((v) => v)) => assertGet(get) || ((l, r) => {
	const left = get(l);
	const right = get(r);

	assertDate(left);
	assertDate(right);

	if (left.toString() === "Invalid Date") return 1;
	if (right.toString() === "Invalid Date") return -1;

	return right - left;
});

const { compare } = new Intl.Collator();
const insensitiveCompare = (l, r) => compare(l.toLowerCase(), r.toLowerCase()) || compare(l, r);
const stringAToZ = (get = ((v) => v)) => assertGet(get) || ((l, r) => {
	const left = get(l);
	const right = get(r);

	assertString(left);
	assertString(right);

	return compare(left, right);
});
const stringZToA = (get = ((v) => v)) => assertGet(get) || ((l, r) => {
	const left = get(l);
	const right = get(r);

	assertString(left);
	assertString(right);

	return compare(right, left);
});
const stringAToZInsensitive = (get = ((v) => v)) => assertGet(get) || ((l, r) => {
	const left = get(l);
	const right = get(r);

	assertString(left);
	assertString(right);

	return insensitiveCompare(left, right);
});
const stringZToAInsensitive = (get = ((v) => v)) => assertGet(get) || ((l, r) => {
	const left = get(l);
	const right = get(r);

	assertString(left);
	assertString(right);

	return insensitiveCompare(right, left);
});

module.exports = {
	numberSmallToLarge,
	numberLargeToSmall,
	dateOldToNew,
	dateNewToOld,
	stringAToZ,
	stringZToA,
	stringAToZInsensitive,
	stringZToAInsensitive,
};
