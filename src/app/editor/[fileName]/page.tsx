import dynamic from "next/dynamic";
import { Suspense } from "react";
import fsPromises from "fs/promises";
import path from "path";

const EditorComp = dynamic(() => import("@/components/mdx-editor"), {
  ssr: false,
});

export default async function Editor({
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
    <div>
      Editor:
      <Suspense fallback={null}>
        <EditorComp markdown={markdown} />
      </Suspense>
    </div>
  );
}
