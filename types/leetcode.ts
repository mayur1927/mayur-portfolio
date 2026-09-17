export interface LeetcodeSubmissionDay {
  date: string; // ISO date
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface LeetcodeActivityResponse {
  configured: boolean;
  available: boolean; // false if the upstream source failed/was unreachable
  totalSolved: number | null;
  easySolved: number | null;
  mediumSolved: number | null;
  hardSolved: number | null;
  ranking: number | null;
  days: LeetcodeSubmissionDay[];
  profileUrl: string | null;
  error?: string;
}
