import { usePomodoroTime } from "../customHooks/usePomodoroTime";
import Clock from "../components/Clock";
import ButtonsControl from "../components/ButtonsControl";
import Container from "@mui/material/Container";

function Home(): React.ReactElement {
    const { formattedTimeLeft, startTimer, stopTimer, resetTimer, isRunning } = usePomodoroTime();

    return (
        <>
            <Container
                maxWidth="md"
                sx={{
                    padding: { xs: 2, sm: 4, md: 6 },
                }}
            >
                <section
                    id="center"
                    className="homepage-card"
                >
                    <Clock formattedTime={formattedTimeLeft} />
                    <ButtonsControl
                        onStart={startTimer}
                        onStop={stopTimer}
                        onReset={resetTimer}
                        isRunning={isRunning}
                    />
                </section>
            </Container>
        </>
    );
}

export default Home;
