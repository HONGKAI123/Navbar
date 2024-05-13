import React, { useState, useEffect } from "react";

function WindowSizeTracker() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("current size:", windowWidth);

  return (
    <div>
      <p>Current size: {windowWidth}px</p>
    </div>
  );
}

export default WindowSizeTracker;
