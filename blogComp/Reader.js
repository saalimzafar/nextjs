import { formats, modules } from "../lib/constants";
import ReactQuill from "./ReactQuill";
export default function Reader({title, ref,delta }) {
  
  return (
    <>
     <h2>{title}</h2>
      <ReactQuill
        forwardedRef={ref}
        readOnly={true}
        theme={null}
        value={delta}
        className="render"
      />
    </>
  );
}
