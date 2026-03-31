import { $ } from "../dom.js";
import { Year } from "../components/year.js";
import { Month } from "../components/month.js";
import { renderEntryCard } from "./renderEntryCard.js";

export function renderEntries(entries, root) {
	for (const entry of entries) {
		const { year, monthNumber, monthName } = getEntryDateParts(entry);

		const yearBox = getOrCreateYearBox(root, year);
		const monthGrid = getOrCreateMonthGrid(yearBox, year, monthNumber, monthName);

		monthGrid.appendChild(renderEntryCard(entry));
	}
}


function getOrCreateYearBox(root, year) {
	const yearBoxId = `${year}-box`;
	let yearBox = $(yearBoxId);

	if (yearBox) {
		return yearBox;
	}

	const { yearContainer, monthList } = Year(year);
	yearContainer.id = yearBoxId;

	root.appendChild(yearContainer);

	return yearContainer;
}

function getOrCreateMonthGrid(yearBox, year, monthNumber, monthName) {
	const monthGridId = `${year}-${pad2(monthNumber)}-box`;
	let monthGrid = $(monthGridId);

	if (monthGrid) {
		return monthGrid;
	}

	const { monthContainer, grid } = Month(monthName);
	grid.id = monthGridId;

	yearBox.appendChild(monthContainer);

	return grid;
}

function getEntryDateParts(entry) {
	const [yyyy, mm] = entry.datetime.split("-");

	const year = Number(yyyy);
	const monthNumber = Number(mm);

	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	return {
		year,
		monthNumber,
		monthName: monthNames[monthNumber - 1],
	};
}

function pad2(value) {
	return String(value).padStart(2, "0");
}

