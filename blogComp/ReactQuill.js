import { forwadedRef } from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return ({ forwardedRef, ...props }) => <RQ ref={forwardedRef} {...props} />;
  },
  { ssr: false }
);

export default ReactQuill;
