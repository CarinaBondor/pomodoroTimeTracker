import { useOnlineStatus } from "./customHooks/useOnlineStatus.js";

function Clock() {
  return (
    <div>
      <h1>00:00</h1>
      {useOnlineStatus}
    </div>
  );
}
export default Clock;
