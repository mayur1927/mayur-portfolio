import { NextResponse } from "next/server";
import { getGithubActivity } from "@/lib/github";

// Revalidate at most once an hour — GitHub activity doesn't need to be
// fetched fresh on every single page view.
export const revalidate = 3600;

export async function GET() {
  const data = await getGithubActivity();
  return NextResponse.json(data);
}
