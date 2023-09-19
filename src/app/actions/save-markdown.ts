"use server";

import path from "path";
import fsPromises from "fs/promises";

export default async function saveMarkdown(markdown: string, fileName: string) {
  if (!markdown) return;

  if (fileName.includes("/")) {
    return;
  }

  const dataFilePath = path.join(process.cwd(), `src/contents/${fileName}.mdx`);

  await fsPromises.writeFile(dataFilePath, markdown);
}
