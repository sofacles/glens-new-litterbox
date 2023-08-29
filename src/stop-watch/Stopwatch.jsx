import React, { useState, useEffect } from "react";
// I'm writing this to see if I can repro the stale closure that Jack talks about in
// https://www.youtube.com/watch?v=P95DuIBwnqw

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = window.setInterval(() => {
        //Sure enough.  The seconds in this expression only increment by 0.1
        // it gets called over and over again, but it seems like the value that gets stored for seconds is whatever it was when this function gets declared.
        // The function is effectively declared every time isRunning changes from false to true.
        //setSeconds(seconds + 0.1);
        //this works:
        setSeconds((seconds) => seconds + 0.1);
      }, 100);
      return () => {
        window.clearInterval(timer);
      };
    }
  }, [isRunning]);

  return (
    <>
      <h1>Time: {seconds}</h1>
      <div>
        <button
          onClick={() => {
            setIsRunning(!isRunning);
          }}
        >
          {isRunning ? "stop" : "start"}
        </button>
      </div>
    </>
  );
};

export default Stopwatch;
