import { useState } from "react";
import TimerForm from "./TimerForm.js";
export default function ToggleableTimerForm(props) {
  const [state, setState] = useState({ isOpen: false });
  const handleFormOpen = () => {
    setState({ isOpen: true });
  };
  const handleFormClose = () => {
    setState({ isOpen: false });
  };

  const handleFormSubmit = (timer) => {
    props.onFormSubmit(timer);
    setState({ isOpen: false });
  };
  if (state.isOpen) {
    return (
      <TimerForm
        onFormSubmit={handleFormSubmit}
        onFormClose={handleFormClose}
      />
    );
  } else {
    return (
      <div className="ui basic content center aligned segment">
        <button className="ui basic button icon" onClick={handleFormOpen}>
          <i className="plus icon" />
        </button>
      </div>
    );
  }
}
