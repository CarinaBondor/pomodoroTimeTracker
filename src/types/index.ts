export type UsePomodoroTypes = {
    timeLeft: number;
    formattedTimeLeft: string;
    isRunning: boolean;
    startTimer: (startTime?: number) => void;
    stopTimer: () => void;
    resetTimer: () => void;
};

export type ButtonsControlProps = {
    onStart: (startTime?: number) => void;
    onStop: () => void;
    onReset: () => void;
    isRunning: boolean;
};

export type ClockProps = {
    formattedTime: string;
};
