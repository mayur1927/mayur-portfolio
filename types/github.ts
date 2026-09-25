export interface GithubProfile {
  login: string;
  htmlUrl: string;
  avatarUrl: string;
  publicRepos: number;
}

export interface ContributionDay {
  date: string; // ISO date, e.g. "2026-09-16"
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GithubActivityResponse {
  configured: boolean;
  profile: GithubProfile | null;
  totalContributions: number | null;
  days: ContributionDay[]; // flattened, most recent last
  calendarAvailable: boolean; // true only if a token let us fetch real contribution data
  error?: string;
}
