import { newElem } from "../dom.js";

export function Month(month) {
	const monthContainer = newElem("div");

	const header = newElem("h2");
	header.classList.add("text-md");
	header.textContent = month;

	const grid = newElem("div");
	grid.classList.add("grid", "grid-cols-1", "lg:grid-cols-2");

	monthContainer.appendChild(header);
	monthContainer.appendChild(grid);

	return { monthContainer, grid };
}

