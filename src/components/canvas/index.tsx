import React, { useRef } from "react";
import "./canvas.style.css";

const Canvas = () => {
  const canvasWrapper = useRef<HTMLDivElement>(null);
  return (
    <div className="canvas-wrapper" ref={canvasWrapper}>
      Canvas
    </div>
  );
};

export default Canvas;
