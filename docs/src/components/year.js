import { newElem } from "../dom.js";

export function Year(year) {
	const yearContainer = newElem("section");
	yearContainer.classList.add("year");

	const header = newElem("h1");
	header.classList.add("text-lg");
	header.textContent = year;

	const monthList = newElem("div");
	monthList.classList.add("year-months");

	yearContainer.appendChild(header);
	yearContainer.appendChild(monthList);

	return { yearContainer, monthList };
}
