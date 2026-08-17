import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function About(): React.ReactElement {
    return (
        <Card sx={{ maxWidth: 800 }}>
            <CardContent>
                <Typography
                    variant="h2"
                    sx={{
                        paddingBottom: "2rem",
                    }}
                >
                    About this project
                </Typography>

                <Typography>
                    This is a simple Pomodoro timer application built with React + TypeScript + Vite
                    + Material UI in order to learn more about React.
                </Typography>

                <Typography>
                    It uses Material UI for styling and provides a user-friendly interface for
                    managing your Pomodoro sessions. The application allows you to start, pause, and
                    reset the timer, helping you stay focused and productive.
                </Typography>

                <Typography>
                    It has a custom hook to deal with all the necessary calculations needed for the
                    pomodoro timer to run.
                </Typography>

                <Typography>
                    Next steps for this app: to add break functionality and to add cycle counter
                    functionality.
                </Typography>

                <Typography>
                    Source code here: <Link>Github</Link>
                </Typography>

                <Typography>Made by Carina B.S.</Typography>
            </CardContent>
        </Card>
    );
}
