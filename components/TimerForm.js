import { useState } from "react";
export default function TimerForm(props) {
  const [title, setTitle] = useState(props.title || "");
  const [project, setProject] = useState(props.project || "");

  const handleSubmit = () => {
    let id = props.id;
    let timer = { id, title, project };
    props.onFormSubmit(timer);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleProjectChange = (e) => {
    setProject(e.target.value);
  };

  const submitText = props.id ? "Update" : "Create";
  return (
    <div className="ui centered card">
      <div className="content">
        <div className="ui form">
          <div className="field">
            <label>Title</label>
            <input type="text" value={title} onChange={handleTitleChange} />
          </div>
          <div className="field">
            <label>Project</label>
            <input type="text" value={project} onChange={handleProjectChange} />
          </div>
          <div className="ui two bottom attached buttons">
            <button className="ui basic blue button" onClick={handleSubmit}>
              {" "}
              {submitText}{" "}
            </button>
            <button className="ui basic red button" onClick={props.onFormClose}>
              {" "}
              Cancel{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
