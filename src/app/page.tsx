import dynamic from "next/dynamic";
import { Suspense } from "react";
import fsPromises from "fs/promises";
import path from "path";
import Link from "next/link";

export default async function Home() {
  const scanResult = await fsPromises.readdir(
    path.join(process.cwd(), "src/contents"),
    { withFileTypes: true }
  );

  const fileNames = scanResult
    .filter((item: any) => !item.isDirectory())
    .map((item: any) => item.name.replace(/\.mdx$/, ""));

  return (
    <div>
      {fileNames.map((fileName: string) => {
        return (
          <Link key={fileName} href={`/contents/${fileName}`}>
            {fileName}
          </Link>
        );
      })}
    </div>
  );
}
