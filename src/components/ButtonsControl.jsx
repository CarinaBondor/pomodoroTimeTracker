import Button from "@mui/material/Button";

function ButtonsControl({ onStart, onStop, onReset, isRunning }) {
    return (
        <div>
            <Button
                variant="contained"
                onClick={() => onStart()}
                disabled={isRunning}
            >
                Start
            </Button>
            <button
                onClick={onStop}
                disabled={!isRunning}
            >
                Pause
            </button>
            <button onClick={onReset}>Reset</button>
            <button onClick={() => onStart(600)}>10 min</button>
            <button onClick={() => onStart(900)}>15 min</button>
            {/* <button onClick={() => onStart(300)}>5 min break</button> */}
        </div>
    );
}

export default ButtonsControl;
