"use server";

import path from "path";
import fsPromises from "fs/promises";

export default async function saveMarkdown(markdown: string | undefined) {
  if (!markdown) return;

  const dataFilePath = path.join(process.cwd(), "src/app/hello.mdx");

  await fsPromises.writeFile(dataFilePath, markdown);
}
