import { useState } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./components/LoadingScreen";
import Experience from "./components/Experience";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import ScrollManager from "./components/ScrollManager";

function App() {
  const [section, setSection] = useState<null | number>(null);
  const [started, setStarted] = useState(false);

  return (
    <>
      <LoadingScreen started={started} setStarted={setStarted} />

      <Canvas shadows flat>
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} setSection={setSection} />
          <Scroll>
            <Experience />
          </Scroll>
          <Scroll html>
            <Home setSection={setSection} />
            <Skills />
            <Contact setSection={setSection} />
            <div className="top"></div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
