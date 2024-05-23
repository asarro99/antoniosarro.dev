import type { Contribution, GithubStats } from '$types/github';
import type { PageServerLoad } from '../$types';
import { parseHTML } from 'linkedom';

const GITHUB_USERNAME = 'antoniosarro';

export const load: PageServerLoad = async () => {
	return {
		github: parseContributions()
	};
};

let cacheGithubResponse: { text: string; timestamp: number } = {
	text: '',
	timestamp: 0
};

async function getGithubContributions({ user, year }: { user: string; year: number }) {
	if (Date.now() - cacheGithubResponse.timestamp < 1000 * 60 * 60 * 24) {
		return cacheGithubResponse.text;
	}

	const url = `https://github.com/users/${user}/contributions?from=${year}-01-01&to=${year}-12-31`;
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error('getGithubContributions: failed to fetch github contributions');
	}

	const text = await response.text();
	cacheGithubResponse = {
		text,
		timestamp: Date.now()
	};
	return text;
}

let cacheGithubStats: { stats: GithubStats; timestamp: number } = {
	stats: {
		contributions: [],
		stats: {
			totalContributions: 0,
			totalDays: 0,
			bestDay: '',
			bestDayTotalContribution: 0,
			averagePerDay: ''
		}
	},
	timestamp: 0
};

async function parseContributions() {
	if (Date.now() - cacheGithubStats.timestamp < 1000 * 60 * 60 * 24) {
		return cacheGithubStats.stats;
	}

	const text = await getGithubContributions({
		user: GITHUB_USERNAME,
		year: new Date().getFullYear()
	});

	const { document } = parseHTML(text);
	const days = document.querySelectorAll<HTMLElement>('tool-tip');

	const contributions: Contribution[][] = Array(7)
		.fill([])
		.map(() => []);
	let totalContributions = 0;
	let totalDays = 0;
	let bestDayTotalContribution = 0;
	let bestDay = '';

	for (const day of days) {
		const forDayRaw = day.getAttribute('for');
		if (!forDayRaw) continue;

		const data = day.innerHTML.split(' ');
		if (data.length > 1) {
			const td = document.getElementById(forDayRaw);
			if (!td) continue;

			const forDay = forDayRaw.replace('contribution-day-component-', '');
			const [weekday, week] = forDay.split('-').map(Number);
			const level = td.dataset.level || '0';

			const contribution = {
				count: data[0] === 'No' ? 0 : +data[0],
				month: data[3],
				day: +data[4].replace(/(st|nd|rd|th)/, ''),
				level: +level
			};

			contributions[weekday][week] = contribution;
			if (contribution.count) {
				totalContributions += contribution.count;
				totalDays++;
				if (contribution.count > bestDayTotalContribution) {
					bestDayTotalContribution = contribution.count;
					bestDay = contribution.month.slice(0, 3) + ' ' + contribution.day;
				}
			}
		}
	}

	const averagePerDay = (totalContributions / totalDays).toFixed(2);

	cacheGithubStats = {
		stats: {
			contributions,
			stats: {
				totalContributions,
				totalDays,
				bestDay,
				bestDayTotalContribution,
				averagePerDay
			}
		},
		timestamp: Date.now()
	};

	return {
		contributions,
		stats: {
			totalContributions,
			totalDays,
			bestDay,
			bestDayTotalContribution,
			averagePerDay
		}
	};
}
