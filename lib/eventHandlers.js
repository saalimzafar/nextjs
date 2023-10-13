export const postData = async (content, router) => {
  const { slug, delta } = content;
  const contentType = "application/json";
  try {
    const res = await fetch("/api/write", {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(content),
    });
    if (!res.ok) {
      throw new Error(res.status);
    }
    router.push(`/blog/${slug}`);
  } catch (error) {
    alert(error.message);
  }
};

export const handleClick = (quillRef, setValue, faker, postData, router) => {
  const editor = quillRef.current.getEditor();
  const unprivilegedEditor = quillRef.current.makeUnprivilegedEditor(editor);
  const delta = unprivilegedEditor.getContents();
  let slug = faker.lorem.slug()
  let content = { slug, delta };
  postData(content, router);
};

export const imageHandler = (quillRef) => {
  const editor = quillRef.current.getEditor();
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", "image/*"); /**/
  input.click();

  input.onchange = async () => {
    const file = input.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const imageUrl = await response.json();
        let selection = editor.getSelection();
        let image = imageUrl.image.newFilename;
        let link = `http://localhost:3000/images/${image}`;
        editor.insertEmbed(selection, "image", link, "user");
      } else {
        console.error(
          "Image upload failed:",
          response.status,
          response.statusText
        );
      }
    } catch (err) {
      console.log("upload err:", err);
    }
  };
};

export const handlePreview = (quillRef, setValue) => {
  const editor = quillRef.current.getEditor();
  const unprivilegedEditor = quillRef.current.makeUnprivilegedEditor(editor);
  const delta = unprivilegedEditor.getContents();
  setValue(delta);
};
