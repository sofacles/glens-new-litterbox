import React, { useEffect, useState } from "react";
import { INSTRUMENT_PANEL_HEIGHT } from "../Constants";

function useScreenDimensions() {
  const [screenSize, setScreenSize] = useState({ height: 800, width: 1000 });

  useEffect(() => {
    function handleScreenSize() {
      console.log(
        `setting screen size to ${window.innerHeight}, ${window.innerWidth}`
      );
      setScreenSize({
        height: window.innerHeight - INSTRUMENT_PANEL_HEIGHT,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleScreenSize);
    handleScreenSize();
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return screenSize;
}

export { useScreenDimensions };