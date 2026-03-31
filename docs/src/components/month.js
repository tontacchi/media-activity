import { newElem } from "../dom.js";

export function Month(monthName) {
	const monthContainer = newElem("section");
	monthContainer.classList.add("month");

	const header = newElem("h2");
	header.classList.add("text-md");
	header.textContent = monthName;

	const grid = newElem("div");
	grid.classList.add("grid", "grid-cols-1", "lg:grid-cols-2");

	monthContainer.appendChild(header);
	monthContainer.appendChild(grid);

	return { monthContainer, grid };
}
