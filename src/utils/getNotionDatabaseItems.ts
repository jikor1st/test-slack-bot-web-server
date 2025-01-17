import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID!;

// 데이터베이스의 항목 가져오기 함수
export async function getNotionDatabaseItems(): Promise<void> {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    console.log("Database Items:", response.results);
  } catch (error) {
    console.error("Error fetching database items:", error);
  }
}
