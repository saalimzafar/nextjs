import TimerActionButton from "./TimerActionButton";
export default function Timer(props) {
  const renderElapsedString = (date) => date.toTimeString().slice(0, 8);
  const elapsedString = renderElapsedString(new Date(props.elapsed));
  const handleTrashClick = () => {
    props.onTrashClick(props.id);
  };

  const handleStartClick = () => {
    props.onStartClick(props.id);
  };

  const handleStopClick = () => {
    props.onStopClick(props.id);
  };

  return (
    <div className="ui centered card">
      <div className="content">
        <div className="header"> {props.title}</div>
        <div className="meta"> {props.project}</div>
        <div>
          <h2> {elapsedString} </h2>
        </div>
        <div className="extra content">
          <span className="right floated edit icon" onClick={props.onEditClick}>
            <i className="edit icon" />
          </span>
          <span className="right floated trash icon" onClick={handleTrashClick}>
            <i className="trash icon" />
          </span>
        </div>
      </div>

      <TimerActionButton
        timerIsRunning={!!props.runningSince}
        onStartClick={handleStartClick}
        onStopClick={handleStopClick}
      />
    </div>
  );
}
