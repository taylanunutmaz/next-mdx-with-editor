import { Button, jsxPluginHooks } from "@mdxeditor/editor";

// a toolbar button that will insert a JSX element into the editor.
export default function InsertText() {
  const insertJsx = jsxPluginHooks.usePublisher("insertJsx");

  return (
    <Button
      onClick={() =>
        insertJsx({
          name: "Text",
          kind: "text",
          props: { val: "hello world" },
        })
      }
    >
      Text
    </Button>
  );
}
