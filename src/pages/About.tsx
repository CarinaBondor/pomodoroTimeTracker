import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";

export default function About(): React.ReactElement {
    return (
        <Container maxWidth="md">
            <Typography
                variant="h2"
                color="tertiary"
                sx={{
                    paddingBottom: "2rem",
                }}
            >
                About this project
            </Typography>

            <Typography color="tertiary">
                This is a simple Pomodoro timer application built with React + TypeScript + Vite +
                Material UI in order to learn more about React.
            </Typography>

            <Typography color="tertiary">
                It uses Material UI for styling and provides a user-friendly interface for managing
                your Pomodoro sessions. The application allows you to start, pause, and reset the
                timer, helping you stay focused and productive.
            </Typography>

            <Typography color="tertiary">
                It has a custom hook to deal with all the necessary calculations needed for the
                pomodoro timer to run.
            </Typography>

            <Typography color="tertiary">
                Next steps for this app: to add break functionality and to add cycle counter
                functionality.
            </Typography>

            <Typography color="tertiary">
                Source code here: <Link>Github</Link>
            </Typography>

            <Typography color="tertiary">Made by Carina B.S.</Typography>
        </Container>
    );
}
