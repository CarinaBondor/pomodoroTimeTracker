import { usePomodoroTime } from "./customHooks/usePomodoroTime";
import Clock from "./components/Clock";
import ButtonsControl from "./components/ButtonsControl";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
    const { formattedTimeLeft, startTimer, stopTimer, resetTimer, isRunning } = usePomodoroTime();

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/about"
                    element={<About />}
                />
            </Routes>
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
