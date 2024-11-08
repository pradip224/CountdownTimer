import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => setTime(time - 1), 1000);
      return () => clearInterval(timerId); // cleanup on unmount
    }
  }, [time]);

  return (
    <div>
      <h1>Countdown: {time}s</h1>
    </div>
  );
};

export default CountdownTimer;
