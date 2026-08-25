import { useState, useEffect } from "react";

export default function Cleanup() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Screen resize hone par event listener attach kiya
    window.addEventListener("resize", handleResize);

    // Cleanup function: Component unmount hone par listener remove kar dega
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // [] khali rakha taake listener sirf ek baar mount hone par lage

  return (
    <div style={{ padding: "20px" }}>
      <h2>Challenge 2: Window Resize Tracker</h2>
      <p>Current Window Width: <strong>{windowWidth}px</strong></p>
    </div>
  );
}