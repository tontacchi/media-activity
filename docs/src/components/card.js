import { newElem } from "../dom.js";

export function Card(
	{ title, activity, pagePath, thumbnailPath, timeAgoMsg, titleTimestamp }
) {
	const card = newElem("div");
	card.classList.add("flex", "rounded-5", "m-10px");
	card.classList.add("transform", "hover:-translate-y-1", "duration-200");
	card.classList.add("bg-dim");

	const thumbnail = newElem("div");
	thumbnail.classList.add("thumbnail");

	const thumbnailHyperlink = newElem("a");
	thumbnailHyperlink.href = pagePath;

	const image = newElem("img");
	image.classList.add("w-full", "h-full", "object-cover");
	image.src = thumbnailPath;
	image.alt = title;

	const center = newElem("div");
	center.classList.add("flex-25", "flex", "items-center");

	const a = newElem("a");
	a.href = pagePath;
	a.classList.add("dark:text-mint");
	a.textContent = title;

	const p = newElem("p");
	p.classList.add("m-10px", "wrap-anywhere", "text-md");
	p.append(activity, " ", a);

	const timeBox = newElem("div");
	timeBox.classList.add("flex-10", "whitespace-break-spaces", "text-right");

	const time = newElem("p");
	time.classList.add("block", "m-10px", "text-xs", "text-slate-400", "wrap-anywhere");
	time.textContent = timeAgoMsg;
	time.title = titleTimestamp;

	thumbnail.appendChild(thumbnailHyperlink);
	thumbnailHyperlink.appendChild(image);

	center.appendChild(p);
	timeBox.appendChild(time);

	card.appendChild(thumbnail);
	card.appendChild(center);
	card.appendChild(timeBox);

	return card;
}
