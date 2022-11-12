import React from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  {
    ssr: false,
  }
);

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ color: [] }],
    [{ background: [] }],

    [{ script: "sub" }, { script: "super" }],

    ["link", "image", "video"],

    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color",
  "background",
  "script",
  "code",
];

export default function QuillWrapper() {

  const [value, setValue] = React.useState("");
  const quillRef = React.useRef(false);
  const ref = React.useRef(false);

  const handleClick = () => {
    const editor = quillRef.current.getEditor();
    const unprivilegedEditor = quillRef.current.makeUnprivilegedEditor(editor);
    const delta = unprivilegedEditor.getContents();
    const markup = unprivilegedEditor.getHTML()
    setValue(delta);
   


  };

  return (
    <>
 <h2>Rich Text Editor </h2>
      <ReactQuill
        forwardedRef={quillRef}
        placeholder="Hello World"
        readOnly={false}
        modules={modules}
        formats={formats}
      />
      <button onClick={handleClick}>Post</button>

      <ReactQuill
        forwardedRef={ref}
        theme={null}
        readOnly={true}
        value={value}
      />
      
      
    </>
  );
}
