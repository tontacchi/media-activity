import { Card } from "../components/card.js";
import { makeThumbnailPath, makePagePath } from "../utils/paths.js";
import { makeTimeString, makeTitleTimestamp } from "../utils/time.js";

export function renderEntryCard(entry) {
	return Card({
		title: entry.title,
		activity: entry.activity,
		pagePath: makePagePath(entry.title),
		thumbnailPath: makeThumbnailPath(entry.title),
		timeAgoMsg: makeTimeString(entry.datetime),
		titleTimestamp: makeTitleTimestamp(entry.datetime),
	});
}
