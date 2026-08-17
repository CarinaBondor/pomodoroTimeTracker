import { ClockProps } from "../types";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

function Clock({ formattedTime }: ClockProps): React.ReactElement {
    return (
        <Grid
            container
            direction="row"
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}
            className="clock"
        >
            <Typography variant="h1">
                <b>{formattedTime}</b>
            </Typography>
        </Grid>
    );
}

export default Clock;
