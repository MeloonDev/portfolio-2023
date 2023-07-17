import { useScroll } from "@react-three/drei";
import { useEffect, useState } from "react";

function Home() {
  // const [scrollPosition, setScrollPosition] = useState(0);
  // const scroll = useScroll();

  // console.log(scroll);

  // useEffect(() => {
  //   // scroll.offset = scrollPosition;
  //   scroll.scroll.current = scrollPosition;
  // }, [scrollPosition]);

  return (
    <div className="home">
      <div className="home-text">
        <h3>(creative)</h3>
        <h1>FRONT</h1>
        <h1 className="end">END</h1>
      </div>
      <h2>
        <span>Hi I'am</span>
        <br />
        Mateusz
        <br />
        Melaniuk<span>.</span>
      </h2>
      <div className="home-about">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum
          impedit, obcaecati id eaque ullam voluptate odit. Quisquam maxime, sed
          odio non sequi quis quasi blanditiis repudiandae commodi, tenetur
          maiores?
        </p>
        <button
          onClick={() => {
            // setScrollPosition(1);
          }}
        >
          <span>CONTACT ME</span>
        </button>
      </div>
    </div>
  );
}
export default Home;
