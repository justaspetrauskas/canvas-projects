import React from "react";

import "./App.css";
import Canvas from "./components/canvas";
import Description from "./components/description";

function App() {
  return (
    <div className="mx-auto max-w-[calc(100vw*0.85)] h-screen ">
      <main className="flex flex-row items-center h-full w-full">
        <Description />
        <Canvas />
      </main>
    </div>
  );
}

export default App;
