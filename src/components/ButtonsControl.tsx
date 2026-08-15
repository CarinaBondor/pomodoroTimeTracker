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
            <Grid
                container
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
                rowSpacing={3}
                spacing={2}
            >
                <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center" }}
                >
                    <ButtonGroup
                        variant="contained"
                        aria-label="Button group for controlling the Pomodoro timer"
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
                </Grid>

                <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "center", gap: 2 }}
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
            </Grid>
        </>
    );
}

export default ButtonsControl;
