// import { getNotionDatabaseItems } from "@/utils/getNotionDatabaseItems";

export async function GET() {
  // const notionDatabaseItems = await getNotionDatabaseItems();
  return new Response(JSON.stringify("hellow words"), {
    status: 200,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });
}
