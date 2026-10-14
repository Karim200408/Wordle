import { readFileSync } from "node:fs";
import { join } from "node:path";
import { connection } from "next/server";

export async function GET() {
  await connection();
  const html = readFileSync(join(process.cwd(), "src", "index.html"));

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
