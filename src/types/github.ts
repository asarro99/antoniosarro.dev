export type Contribution = {
	count: number;
	month: string;
	day: number;
	level: number;
};

export type GithubStats = {
	contributions: Contribution[][];
	stats: {
		totalContributions: number;
		totalDays: number;
		bestDay: string;
		bestDayTotalContribution: number;
		averagePerDay: string;
	};
};
