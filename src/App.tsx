import { useState } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./components/LoadingScreen";
import Experience from "./components/Experience";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AnimatedCursor from "react-animated-cursor";
import Skills from "./pages/Skills";

function App() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />

      <Canvas shadows flat>
        <ScrollControls pages={4} damping={0.1}>
          <Scroll>
            <Experience />
          </Scroll>
          <Scroll html>
            <Home />
            <Skills />
            <Contact />
            <div className="top"></div>
          </Scroll>
        </ScrollControls>
      </Canvas>

      {/* <AnimatedCursor
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
      /> */}
    </>
  );
}

export default App;
