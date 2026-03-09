// DOM Manipulation
const $ = (id) => { return document.getElementById(id); };
const newElem = (tag) => { return document.createElement(tag); };


// hooks
const activityContainer = $("activity");


// Main function
function main() {
	let month = Month("January");
	activityContainer.appendChild(month);

	const activityBox = month.children[1];
	activityBox.appendChild(Card("Super Mario Odyssey", "6 hours ago", "Played"));
	activityBox.appendChild(Card("Frieren S2", "8 hours ago", "Watched ep2 of"))
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
	// create nested DOM nodes
	const card = newElem("div");
	card.classList.add("flex");
	card.classList.add("border-red");
	card.classList.add("radius-5");
	card.classList.add("m-10px");

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

	const p = newElem("p");
	p.classList.add("m-10px");
	p.textContent = activity + " " + title;

	const timeBox = newElem("div");
	const time = newElem("p");
	time.classList.add("my-10px");
	// time.classList.add("activity-time");
	time.textContent = timeMsg;


	// stitch together the Card component
	thumbnail.appendChild(image);
	center.appendChild(p);
	timeBox.appendChild(time);

	card.appendChild(thumbnail);
	card.appendChild(center);
	card.appendChild(timeBox);

	return card;
}


// helper functions
function makeThumbnailPath(title) {
	let path = "./assets/";

	titleParts = title.toLowerCase().split(" ");
	path += titleParts.join("-")

	path += ".jpg";
	return path;
}


// Entry
main();

