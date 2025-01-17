import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return new Response("Hello, Slack!", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}