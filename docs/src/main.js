import { $, listen } from "./dom.js";
import { loadEntriesFromIndex } from "./data/loadEntries.js";
import { renderEntries } from "./render/renderEntries.js";

const root = $("activity");

async function main() {
	const entries = await loadEntriesFromIndex("./data/index.json");
	renderEntries(entries, root);
}


listen(window, "load", main);

