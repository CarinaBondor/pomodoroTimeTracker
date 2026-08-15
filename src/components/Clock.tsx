import { ClockProps } from "../types";

function Clock({ formattedTime }: ClockProps): React.ReactElement {
    return (
        <div>
            <h1>{formattedTime}</h1>
        </div>
    );
}

export default Clock;
