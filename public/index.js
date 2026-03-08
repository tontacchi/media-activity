// DOM Manipulation
const $ = (id) => { return document.getElementById(id); };
const newElem = (tag) => { return document.createElement(tag); };


// hooks
const activityContainer = $("activity");


// Main function
function main() {
	activityContainer.appendChild(Card("Super Mario Odyssey", "6 hours ago", "Played"));
}


// Components
function Card(title, timeMsg, activity) {
	const card = newElem("div");
	card.classList.add("flex");
	card.classList.add("border-red");
	card.classList.add("radius-5");
	card.classList.add("m-10px");

	const thumbnail = newElem("div");
	thumbnail.classList.add("thumbnail");
	thumbnail.classList.add("border-white");

	const center = newElem("div");
	center.classList.add("flex-1");
	center.classList.add("flex");
	center.classList.add("items-center");

	const p = newElem("p");
	p.classList.add("m-10px");
	p.textContent = activity + " " + title;

	const time = newElem("div");
	time.classList.add("m-10px");
	time.textContent = timeMsg;

	center.appendChild(p);

	card.appendChild(thumbnail);
	card.appendChild(center);
	card.appendChild(time);

	return card
}

// fetch("../data/2026-03.json")
//   .then(res => res.json())
//   .then(entries => {
//     const container = $("activity");
//
//     entries.forEach(entry => {
//       const card = document.createElement("div");
//       card.className = "activity-card";
//
//       card.innerHTML = `
//         <div class="activity-message">
//           <span class="activity-text">${entry.activity}</span>
//           <span class="activity-title">${entry.title}</span>
//         </div>
//         <div class="activity-time">
//           ${new Date(entry.datetime).toLocaleString()}
//         </div>
//       `;
//
//       container.appendChild(card);
//     });
//   });


// Entry
main();

