import { useState, useEffect } from "react";

function usePomodoroTime() {
  const [setTime] = useState({
    hours,
    minutes,
    seconds,
  });
  const hours = "potato";
  const minutes = "jehfeh";
  const seconds = "rjeiir3rn";

  console.log(setTime);
  console.log(hours + minutes + seconds);

  useEffect(() => {
    return "potato";
  }, []);
}
export default usePomodoroTime;
