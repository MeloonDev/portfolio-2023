import { useState } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import Experience from "./components/Experience";
import Home from "./components/Home";
import { Canvas } from "@react-three/fiber";
import AnimatedCursor from "react-animated-cursor";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />
      <Canvas shadows>
        <ScrollControls pages={3} damping={0.1}>
          <Scroll>
            <Experience />
          </Scroll>
          <Scroll html>
            <Home />
            <a href="#">asdasd</a>
            <button>click me</button>
          </Scroll>
        </ScrollControls>
      </Canvas>
      <AnimatedCursor
        innerSize={4}
        outerSize={45}
        innerScale={1}
        outerScale={1.3}
        outerAlpha={0}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "1px solid #fff",
        }}
      />
    </>
  );
}

export default App;
