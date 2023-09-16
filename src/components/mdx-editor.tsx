"use client";

import { jsxComponentDescriptors } from "@/utils/jsxComponentDescriptors";
import {
  BlockTypeSelect,
  MDXEditor,
  MDXEditorMethods,
  UndoRedo,
  headingsPlugin,
  jsxPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
} from "@mdxeditor/editor";
import { FC, useRef } from "react";
import InsertText from "./insert-text";
import path from "path";
import saveMarkdown from "@/app/actions/save-markdown";

interface EditorProps {
  markdown: string;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown }) => {
  const ref = useRef<MDXEditorMethods>(null);

  const dataFilePath = path.join(process.cwd(), "src/app/hello.mdx");

  return (
    <>
      <button onClick={() => saveMarkdown(ref.current?.getMarkdown())}>
        Save markdown
      </button>
      <MDXEditor
        contentEditableClassName="prose"
        ref={ref}
        markdown={markdown}
        onChange={console.log}
        plugins={[
          jsxPlugin({ jsxComponentDescriptors }),
          headingsPlugin(),
          listsPlugin(),
          quotePlugin(),
          thematicBreakPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                {" "}
                <InsertText />
                <UndoRedo />
                <BlockTypeSelect />
              </>
            ),
          }),
        ]}
      />
    </>
  );
};

export default Editor;
