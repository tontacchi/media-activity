export function makeTimeString(timeStr) {
	return timeAgo(timeStr);
}

export function timeAgo(timestamp) {
	const iso = timestamp.replace(
		/^(\d{4}-\d{2}-\d{2})-(\d{2})-(\d{2})-(\d{2})$/,
		"$1T$2:$3:$4"
	);

	const past = new Date(iso);
	const now = new Date();

	const diffMs = now - past;
	if (isNaN(diffMs) || diffMs < 0) return "invalid date";

	const seconds = Math.floor(diffMs / 1000);
	if (seconds < 60) return "just now";

	const minutes = Math.floor(seconds / 60);
	if (minutes < 60) {
		return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
	}

	const hours = Math.floor(minutes / 60);
	if (hours < 24) {
		return `${hours} hour${hours === 1 ? "" : "s"} ago`;
	}

	const days = Math.floor(hours / 24);
	if (days < 30) {
		return `${days} day${days === 1 ? "" : "s"} ago`;
	}

	const months = Math.floor(days / 30);
	if (months < 12) {
		return `${months} month${months === 1 ? "" : "s"} ago`;
	}

	const years = Math.floor(months / 12);
	return `${years} year${years === 1 ? "" : "s"} ago`;
}

export function makeTitleTimestamp(timestamp) {
	const [yyyy, Mm, dd, hh, mm, ss] = timestamp.split("-");
	return `${yyyy}-${Mm}-${dd} ${hh}:${mm}:${ss}`;
}

