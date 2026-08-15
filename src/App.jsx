import { usePomodoroTime } from "./customHooks/usePomodoroTime";
import Clock from "./components/Clock";
import ButtonsControl from "./components/ButtonsControl";
import "./App.css";

function App() {
    const { formattedTimeLeft, startTimer, stopTimer, resetTimer, isRunning } = usePomodoroTime();

    return (
        <>
            <section id="center">
                <Clock formattedTime={formattedTimeLeft} />
                <ButtonsControl
                    onStart={startTimer}
                    onStop={stopTimer}
                    onReset={resetTimer}
                    isRunning={isRunning}
                />
            </section>
        </>
    );
}

export default App;
