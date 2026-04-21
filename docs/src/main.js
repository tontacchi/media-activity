import { $, listen, removeClass } from "./dom.js";
import { loadEntriesFromIndex } from "./data/loadEntries.js";
import { renderEntries } from "./render/renderEntries.js";

const root = $("activity");
const app = $("app");

async function main() {
	const entries = await loadEntriesFromIndex("./data/index.json");
	renderEntries(entries, root);

	removeClass(app, "opacity-0");
}


listen(window, "load", main);

