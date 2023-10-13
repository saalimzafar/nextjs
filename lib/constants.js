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
  "code-block",
  "formula",
];

const modules = {
  toolbar: [
    [
      { header: ["1", "2", "3", "normal"] },
      { size: ["normal", "small", "large", "huge"] },
      { font: [] },
    ],
    ["code-block"],
    ["link"],
    ["image"],
    ["video"],
    ["formula"],
    [{ list: "ordered" }],
    [{ list: "bullet" }],
    [{ indent: "-1" }],
    [{ indent: "+1" }],
    ["bold"],
    ["italic"],
    ["underline"],
    ["strike"],
    ["blockquote"],
    [{ script: "sub" }],
    [{ script: "super" }],
    [{ color: [] }],
    [{ background: [] }],
    
  ],
};
const odules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ font: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },

      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ color: [] }],
    [{ background: [] }],
    [{ script: "sub" }, { script: "super" }],

    ["code-block", "link", "image", "video"],
  ],

  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const postData = async (content) => {
  let { slug, delta } = content;

  const contentType = "application/json";
  try {
    const res = await fetch("/api/write", {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(delta),
    });
    if (!res.ok) {
      throw new Error(res.status);
    }

    router.push(`/blog/${slug}`);
  } catch (error) {
    alert(error.message);
  }
};

module.exports = { modules, formats, postData };
