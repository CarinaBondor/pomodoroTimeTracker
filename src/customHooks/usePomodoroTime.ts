import { useState, useEffect, useRef, useMemo } from "react";
import { UsePomodoroTypes } from "../types";

export function usePomodoroTime(): UsePomodoroTypes {
    const [timeLeft, setTimeLeft] = useState<number>(1500);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const intervalRef = useRef<number | null>(null);

    // use useMemo to format only one time the timeLeft value and not every time the component re-renders
    const formattedTimeLeft = useMemo(() => {
        const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
        const seconds = String(timeLeft % 60).padStart(2, "0");
        return `${minutes} : ${seconds}`;
    }, [timeLeft]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    //actually start the timer with the set time
    const startTimer = (startTime: number | null = null) => {
        // If caller provides a numeric startTime, stop any existing timer
        // and set the requested start time (prevents duplicate intervals).
        if (typeof startTime === "number") {
            stopTimer();
            setTimeLeft(startTime);
        }

        // If a timer is already running, don't create another interval.
        if (intervalRef.current) return;

        setIsRunning(true);

        intervalRef.current = setInterval(() => {
            setTimeLeft((prevTimeLeft) => {
                if (prevTimeLeft <= 0) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    setIsRunning(false);
                    return 0;
                }
                return prevTimeLeft - 1;
            });
        }, 1000);
    };

    //stop the timer, clear the interval
    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsRunning(false);
    };

    //stop the timer and reset it with the default time of 25 mins (1500 seconds)
    const resetTimer = () => {
        stopTimer();
        setTimeLeft(1500);
    };

    // TODO: Implement break functionality
    // const startBreakTime = () => {
    // };

    return {
        timeLeft,
        formattedTimeLeft,
        isRunning,
        startTimer,
        stopTimer,
        resetTimer,
    };
}
