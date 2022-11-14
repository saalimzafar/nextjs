import { useState } from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";
export default function EditableTimer(props) {
  const [state, setState] = useState({ editFormOpen: false });

  const handleEditClick = () => {
    openForm();
  };
  const handleFormClose = () => {
    closeForm();
  };

  const handleSubmit = (timer) => {
    props.onFormSubmit(timer);
    closeForm();
  };

  const closeForm = () => {
    setState({ editFormOpen: false });
  };

  const openForm = () => {
    setState({ editFormOpen: true });
  };

  if (state.editFormOpen) {
    return (
      <TimerForm
        id={props.id}
        title={props.title}
        project={props.project}
        onFormSubmit={handleSubmit}
        onFormClose={handleFormClose}
      />
    );
  } else {
    return (
      <Timer
        id={props.id}
        title={props.title}
        project={props.project}
        elapsed={props.elapsed}
        runningSince={props.runningSince}
        onEditClick={handleEditClick}
        onTrashClick={props.onTrashClick}
        onStartClick={props.onStartClick}
        onStopClick={props.onStopClick}
      />
    );
  }
}
