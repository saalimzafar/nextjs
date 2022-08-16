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

export default function QuillWrapper() {

  const [value, setValue] = React.useState("");
  const quillRef = React.useRef(false);
  const ref = React.useRef(false);

  const handleClick = () => {
    const editor = quillRef.current.getEditor();
    const unprivilegedEditor = quillRef.current.makeUnprivilegedEditor(editor);
    const delta = unprivilegedEditor.getContents();
    const markup = unprivilegedEditor.getText()
    setValue(delta);


  };

  return (
    <>
      <ReactQuill
        forwardedRef={quillRef}
        placeholder="Hello World"
        readOnly={false}
      />
      <button onClick={handleClick}>Click</button>

      <ReactQuill
        forwardedRef={ref}
        theme={null}
        readOnly={true}
        value={value}
      />

    </>
  );
}
