import Link from "next/link";
import path from "path";
import fsPromises from "fs/promises";
import { MDXRemote } from "next-mdx-remote/rsc";
import Text from "@/components/text";

export default async function Page() {
  const dataFilePath = path.join(process.cwd(), "src/app/hello.mdx");

  const markdown = await fsPromises.readFile(dataFilePath, "utf-8");

  return (
    <>
      <Link href="/editor"> Go to the Editor </Link>
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
