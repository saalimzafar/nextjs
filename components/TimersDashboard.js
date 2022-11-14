import { nanoid } from "nanoid";
import { useState } from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";

export default function TimersDashboard() {
  const [state, setState] = useState({
    timers: [
      {
        title: "Practice Squat",
        project: "Gym Chores",
        id: nanoid(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: "Bake squash",
        project: "Kitchen Chores",
        id: nanoid(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  });

  const handleCreateFormSubmit = (timer) => {
    createTimer(timer);
  };

  const createTimer = (timer) => {
    let newTimer = (timer) => {
      let id = nanoid();
      let title = timer.title;
      let project = timer.project;
      let elapsed = 0;
      let runningSince = null;
      let timerObject = { title, project, id, elapsed, runningSince };

      return timerObject;
    };
    const t = newTimer(timer);
    setState({ timers: state.timers.concat(t) });
  };

  const handleEditFormSubmit = (attrs) => {
    updateTimers(attrs);
  };

  const updateTimers = (attrs) => {
    setState({
      timers: state.timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  const handleTrashClick = (timerId) => {
    deleteTimer(timerId);
  };

  const deleteTimer = (timerId) => {
    setState({
      timers: state.timers.filter((t) => t.id !== timerId),
    });
  };

  const startTimer = (timerId) => {
    const now = Date.now();
    setState({
      timers: state.timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, { runningSince: now });
        } else {
          return timer;
        }
      }),
    });
  };
  const stopTimer = (timerId) => {
    const now = Date.now();
    setState({
      timers: state.timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  const handleStartClick = (timerId) => {
    startTimer(timerId);
  };

  const handleStopClick = (timerId) => {
    stopTimer(timerId);
  };

  return (
    <div className="ui one column centered grid">
      <div className="column">
        <EditableTimerList
          timers={state.timers}
          onFormSubmit={handleEditFormSubmit}
          onTrashClick={handleTrashClick}
          onStartClick={handleStartClick}
          onStopClick={handleStopClick}
        />
        <ToggleableTimerForm
          onFormSubmit={handleCreateFormSubmit}
          isOpen={false}
        />
      </div>
    </div>
  );
}
