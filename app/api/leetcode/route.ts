import { NextResponse } from "next/server";
import { getLeetcodeActivity } from "@/lib/leetcode";

export const revalidate = 3600;

export async function GET() {
  const data = await getLeetcodeActivity();
  return NextResponse.json(data);
}
