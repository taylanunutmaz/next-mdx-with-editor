import dynamic from "next/dynamic";
import { Suspense } from "react";
import fsPromises from "fs/promises";
import path from "path";

const EditorComp = dynamic(() => import("@/components/mdx-editor"), {
  ssr: false,
});

export default async function Home() {
  const dataFilePath = path.join(process.cwd(), "src/app/hello.mdx");

  const markdown = await fsPromises.readFile(dataFilePath, "utf-8");

  return (
    <div>
      Editor:
      <Suspense fallback={null}>
        <EditorComp markdown={markdown} />
      </Suspense>
    </div>
  );
}
