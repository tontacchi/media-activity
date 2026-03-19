// DOM Manipulation
const $ = (id) => { return document.getElementById(id); };
const newElem = (tag) => { return document.createElement(tag); };
const listen = (node, action, func) => { node.addEventListener(action, func); };

// hooks
const activityContainer = $("2026-box");

const now = new Date();
const cache = new Map();

// Main function
function main() {
	const month = Month("March");
	const activityBox = month.children[1];

	activityContainer.appendChild(month);
	unmarshalJSON("./data/2026-03.json", activityBox);

	console.log("[ DEBUG ] cache:", cache);
}


// Components
function Month(month) {
	const monthContainer = newElem("div");

	const header = newElem("h2");
	header.classList.add("text-md");
	header.textContent = month;

	const grid = newElem("div");
	grid.classList.add("grid");
	grid.classList.add("grid-cols-2");

	monthContainer.appendChild(header);
	monthContainer.appendChild(grid);

	return monthContainer;
}

function Card(title, timeMsg, activity) {
	console.log("[ DEBUG ]", title, timeMsg, activity)

	// create nested DOM nodes
	const card = newElem("div");
	card.classList.add("flex");
	card.classList.add("radius-5");
	card.classList.add("m-10px");

	// frosted glass cards
	card.setAttribute("style", "background: rgb(0 0 0 / 0.7);");

	const thumbnailHyperlink = newElem("a");
	thumbnailHyperlink.setAttribute("href", makePagePath(title));

	const thumbnail = newElem("div");
	thumbnail.classList.add("thumbnail");

	// special handling for image path
	const image = newElem("img");
	image.classList.add("w-full", "h-full", "object-cover");
	image.setAttribute("src", makeThumbnailPath(title));
	image.setAttribute("alt", title);

	const center = newElem("div");
	center.classList.add("flex-1");
	center.classList.add("flex");
	center.classList.add("items-center");

	const a = newElem("a");
	a.setAttribute("href", makePagePath(title));
	a.classList.add("dark:text-mint");
	a.textContent = title;

	const p = newElem("p");
	p.classList.add("m-10px", "wrap-anywhere");
	p.append(activity, " ", a);

	const timeBox = newElem("div");
	const time = newElem("p");
	time.classList.add("m-10px");
	time.textContent = timeMsg;


	// stitch together the Card component
	thumbnail.appendChild(thumbnailHyperlink);
	thumbnailHyperlink.appendChild(image);

	center.appendChild(p);
	timeBox.appendChild(time);

	card.appendChild(thumbnail);
	card.appendChild(center);
	card.appendChild(timeBox);

	return card;
}


// helper functions (titles & paths)
function makeThumbnailPath(title) {
	let path = "./assets/" + makeSnakecase(title) + ".jpg";
	return path;
}

function makePagePath(title) {
	let path = "./pages/" + makeSnakecase(title);
	return path;
}

function makeSnakecase(title) {
	// avoid redoing work
	if (cache.has(title)) {
		return cache.get(title);
	}

	const normalized = normalizeTitle(title)
		.split(" ")
		.map(
			(str) => { return str.replace(/\p{P}/gu, ""); }
		)
		.join("-");
	
	cache.set(title, normalized);
	return normalized;
}

function normalizeTitle(title) {
	title = title
		.toLowerCase()
		.replaceAll("-", " ")
	 	.replaceAll("/", " ");

	return title;
}


// helper functions (time)
function makeTimeString(timeStr) {
	console.log(now.toString());
	console.log(timeStr);
	return timeStr;
}


// helper functions (json wrangling)
function unmarshalJSON(path, container) {
	fetch(path)
	.then((result) => {
		const jsonResult = result.json();

		return jsonResult;
	})
	.then((entries) => {
		entries.forEach((entry) => {
			const timeMsg = makeTimeString(entry.datetime);
			const card = Card(entry.title, timeMsg, entry.activity);

			container.appendChild(card);
		});
	});
}


// Entry
listen(window, "load", () => { main(); });

