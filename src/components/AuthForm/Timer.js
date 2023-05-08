import { useEffect, useState } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (timeLeft === 0) {
      // Дія, яку необхідно виконати по закінченню таймера
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <span>{`${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`}</span>
  );
};

export default Timer;
