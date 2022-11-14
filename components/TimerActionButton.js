export default function TimerActionButton(props) {
  if (props.timerIsRunning) {
    return (
      <div
        className="ui bottom attached red basic button"
        onClick={props.onStopClick}
      >
        Stop
      </div>
    );
  } else {
    return (
      <div
        className=" ui bottom attached green basic button"
        onClick={props.onStartClick}
      >
        Start
      </div>
    );
  }
}
