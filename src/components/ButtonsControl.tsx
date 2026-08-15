import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ButtonsControlProps } from "../types";

function ButtonsControl({
    onStart,
    onStop,
    onReset,
    isRunning,
}: ButtonsControlProps): React.ReactElement {
    return (
        <>
            <ButtonGroup
                variant="contained"
                aria-label="Button group for controlling the Pomodoro timer"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button
                    variant="contained"
                    onClick={() => onStart()}
                    disabled={isRunning}
                >
                    Start
                </Button>
                <Button
                    variant="contained"
                    onClick={onStop}
                    disabled={!isRunning}
                >
                    Pause
                </Button>
                <Button
                    variant="contained"
                    onClick={onReset}
                >
                    Reset
                </Button>
            </ButtonGroup>

            <Grid
                container
                spacing={2}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button
                    variant="outlined"
                    onClick={() => onStart(600)}
                >
                    10 min
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => onStart(900)}
                >
                    15 min
                </Button>
                {/* <Button
                    variant="contained"
                    onClick={() => onStart(300)}
                >
                    5 min break
                </Button> */}
            </Grid>
        </>
    );
}

export default ButtonsControl;
