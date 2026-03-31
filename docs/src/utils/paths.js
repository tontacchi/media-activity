const cache = new Map();

export function makeThumbnailPath(title) {
	return `./assets/${makeSnakecase(title)}.jpg`;
}

export function makePagePath(title) {
	return `./pages/${makeSnakecase(title)}`;
}

export function makeSnakecase(title) {
	if (cache.has(title)) {
		return cache.get(title);
	}

	const normalized = normalizeTitle(title)
		.split(" ")
		.map((str) => str.replace(/\p{P}/gu, ""))
		.join("-");

	cache.set(title, normalized);
	return normalized;
}

export function normalizeTitle(title) {
	return title
		.toLowerCase()
		.replaceAll("-", " ")
		.replaceAll("/", " ");
}

