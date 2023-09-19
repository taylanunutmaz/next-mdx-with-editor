import Link from "next/link";
import path from "path";
import fsPromises from "fs/promises";
import { MDXRemote } from "next-mdx-remote/rsc";
import Text from "@/components/text";

export default async function Content({
  params: { fileName },
}: {
  params: { fileName: string };
}) {
  if (fileName.includes("/")) {
    return;
  }

  const dataFilePath = path.join(process.cwd(), `src/contents/${fileName}.mdx`);

  const markdown = await fsPromises.readFile(dataFilePath, "utf-8");

  return (
    <>
      <Link href={`/editor/${fileName}`}> Go to the Editor </Link>
      <MDXRemote
        source={markdown}
        components={{
          Text: Text,
        }}
      />
      {/* <HelloWorld /> */}
    </>
  );
}
