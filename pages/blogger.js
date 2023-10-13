import { useState, useRef } from "react";
import { formats, modules } from "../lib/constants";
import { useRouter } from "next/router";
import { faker } from "@faker-js/faker";
import ReactQuill from "../blogComp/ReactQuill";
import {
  handleClick,
  postData,
  imageHandler,
  handlePreview,
} from "../lib/eventHandlers";

export default function QuillWrapper() {
  const [value, setValue] = useState("");
  const quillRef = useRef(null);
  const ref = useRef(false);
  const router = useRouter();

  const handlePostClick = () => {
    handleClick(quillRef, setValue, faker, postData, router);
  };
  const handleImageClick = () => {
    imageHandler(quillRef);
  };
  const handlePreviewClick = () => {
    handlePreview(quillRef, setValue);
  };
  return (
    <>
      <h2>Rich Text Editor </h2>

      <ReactQuill
        forwardedRef={quillRef}
        placeholder="Write something!"
        readOnly={false}
        modules={modules}
        formats={formats}
        className="coder"
      />
      <button onClick={handlePostClick}>Post</button>
      <button onClick={handleImageClick}>Image</button>
      <button onClick={handlePreviewClick}>Preview</button>
      <ReactQuill
        forwardedRef={ref}
        theme={null}
        readOnly={true}
        value={value}
        className="render"
      />
    </>
  );
}
