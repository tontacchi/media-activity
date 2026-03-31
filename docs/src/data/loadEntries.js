export async function loadEntries(path) {
	const response = await fetch(path);

	if (!response.ok) {
		throw new Error(`failed to load ${path}: ${response.status}`);
	}

	return response.json();
}

export async function loadEntriesFromIndex(indexPath) {
	const paths = await loadEntries(indexPath);

	const results = await Promise.all(
		paths.map((path) => loadEntries(path))
	);

	return results.flat();
}
