import { useEffect, useRef, useState } from "react";
import classes from "./Countdown.module.css";

export default function CountDown() {
  const [timerDays, setTimerDays] = useState<number>();
  const [timerHours, setTimerHours] = useState<number>();
  const [timerMinutes, setTimerMinutes] = useState<number>();
  const [timerSeconds, setTimerSeconds] = useState<number>();
  let interval = useRef() as any;

  const startTimer = () => {
    const countdownDate = new Date("feb 15 , 2024  00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(interval.current);
    };
  }, []);
  return (
    <>
      <div className={classes.styleCounter}>
        <div>
          <i className="fa-regular fa-clock" style={{ marginRight: "5px" }}></i>
          offer ends in {timerDays}d: {timerHours}h: {timerMinutes}m:{" "}
          {timerSeconds}s
        </div>
      </div>
    </>
  );
}
