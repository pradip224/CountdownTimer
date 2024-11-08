import React, { useState, useEffect } from "react";
import './App.css'; // import the CSS

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
        const hrs = Math.floor((timeLeft - 1) / 3600);
        const mins = Math.floor(((timeLeft - 1) % 3600) / 60);
        const secs = (timeLeft - 1) % 60;
        setHours(hrs);
        setMinutes(mins);
        setSeconds(secs);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      setIsActive(false);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isActive]);

  const handleStart = () => {
    const totalTime =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    setTimeLeft(totalTime);
    setIsActive(true);
  };

  const handleReset = () => {
    setIsActive(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTimeLeft(0);
  };

  return (
    <div className="countdown-container">
      <div>
        <input
          type="number"
          className="time-input"
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value) || 0)}
          placeholder="HH"
          disabled={isActive}
        />
        <span className="time-separator">:</span>
        <input
          type="number"
          className="time-input"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value) || 0)}
          placeholder="MM"
          disabled={isActive}
        />
        <span className="time-separator">:</span>
        <input
          type="number"
          className="time-input"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value) || 0)}
          placeholder="SS"
          disabled={isActive}
        />
      </div>
      <div >
        <button onClick={handleStart} disabled={isActive}>
          Start
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
