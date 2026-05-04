import Button from "@mui/material/Button";

function ButtonsControl({
  onStart,
  onStop,
  onReset,
  isRunning,
  setOtherOptionTimes,
}) {
  return (
    <div>
      <Button variant="contained" onClick={onStart} disabled={isRunning}>
        Start
      </Button>
      <button onClick={onStop} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={onReset}>Reset</button>
      <button onClick={() => setOtherOptionTimes(600)}>10 min</button>
      <button onClick={() => setOtherOptionTimes(900)}>15 min</button>
    </div>
  );
}

export default ButtonsControl;
