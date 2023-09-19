import { GenericJsxEditor, JsxComponentDescriptor } from "@mdxeditor/editor";

export const jsxComponentDescriptors: JsxComponentDescriptor[] = [
  {
    name: "Text",
    kind: "flow", // 'text' for inline, 'flow' for block
    // the source field is used to construct the import statement at the top of the markdown document.
    // it won't be actually sourced.
    source: "@/components/text",
    // Used to construc the property popover of the generic editor
    props: [{ name: "val", type: "string" }],
    // wether the component has children or not
    hasChildren: false,
    Editor: GenericJsxEditor,
    defaultExport: true,
  },
];
