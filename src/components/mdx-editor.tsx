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

interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown }) => {
  const ref = useRef<MDXEditorMethods>(null);
  return (
    <>
      <button onClick={() => ref.current?.setMarkdown("new markdown")}>
        Set new markdown
      </button>
      <button onClick={() => console.log(ref.current?.getMarkdown())}>
        Get markdown
      </button>
      <MDXEditor
        contentEditableClassName="prose"
        ref={ref}
        markdown="hello world"
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
