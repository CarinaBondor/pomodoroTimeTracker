import { ClockProps } from "../types";
import { Grid } from "@mui/material";

function Clock({ formattedTime }: ClockProps): React.ReactElement {
    return (
        <Grid
            container
            direction="row"
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1>{formattedTime}</h1>
        </Grid>
    );
}

export default Clock;
