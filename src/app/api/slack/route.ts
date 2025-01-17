// import { Client } from "@notionhq/client";
// const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function GET() {
  return new Response("Hello, Slack!", {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
