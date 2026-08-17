import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function About(): React.ReactElement {
    return (
        <Card sx={{ minWidth: 500 }}>
            <CardContent>
                <Typography variant="h5">About this project</Typography>
                <Typography variant="body2">.</Typography>
            </CardContent>
        </Card>
    );
}
