import { usePomodoroTime } from "../customHooks/usePomodoroTime";
import Clock from "../components/Clock";
import ButtonsControl from "../components/ButtonsControl";
import Container from "@mui/material/Container";

function Home() {
    const { formattedTimeLeft, startTimer, stopTimer, resetTimer, isRunning } = usePomodoroTime();

    return (
        <>
            <Container maxWidth="xxl">
                <section id="center">
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
