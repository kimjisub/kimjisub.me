import {
	addYears,
	differenceInDays,
	endOfYear,
	format,
	setYear,
	startOfYear,
} from 'date-fns';
import { JSDOM } from 'jsdom';

export async function getYearlyGithubContributions(
	username: string,
	years: number,
) {
	const from = startOfYear(setYear(new Date(), years));
	const to = endOfYear(setYear(new Date(), years));

	const fromString = format(from, 'yyyy-MM-dd');
	const toString = format(to, 'yyyy-MM-dd');

	const response = await fetch(
		`https://github.com/users/${username}/contributions?from=${fromString}&to=${toString}`,
		{ next: { revalidate: 3600 } },
	);

	const html = await response.text();
	const data = extractDataFromTable(html);

	return { data, from, to };
}

export async function getGitHubContributions(
	username: string,
	{ from, to }: { from: Date; to: Date },
) {
	let contributions: number[] = [];
	let currentDate = startOfYear(from); // from 날짜가 속한 년도의 시작

	while (currentDate <= to) {
		const fromString = format(currentDate, 'yyyy-MM-dd');
		const toString = format(endOfYear(currentDate), 'yyyy-MM-dd'); // 해당 년도의 마지막 날
		const response = await fetch(
			`https://github.com/users/${username}/contributions?from=${fromString}&to=${toString}`,
			{ next: { revalidate: 3600 } },
		);

		const html = await response.text();
		const dataEntries = extractDataFromTable(html);

		contributions = contributions.concat(dataEntries);
		currentDate = addYears(currentDate, 1); // 다음 년도로 이동
	}

	const removeHeadCount = differenceInDays(from, startOfYear(from));
	const removeTailCount = differenceInDays(endOfYear(to), to);
	const data = contributions.slice(removeHeadCount).slice(0, -removeTailCount);

	return {
		from,
		to,
		data,
	};
}

function extractDataFromTable(html: string): number[] {
	const dom = new JSDOM(html);
	const doc = dom.window.document;
	const tds = Array.from(doc.querySelectorAll('td[data-date]'));

	// data-date로 정렬
	return tds
		.filter(a => a.getAttribute('data-date'))
		.sort((a, b) => {
			const dateA = a.getAttribute('data-date');
			const dateB = b.getAttribute('data-date');
			if (!dateA || !dateB) {
				return 0;
			}
			return dateA < dateB ? -1 : 1;
		})
		.map(td => parseInt(td.getAttribute('data-level') || '0', 10));
}
