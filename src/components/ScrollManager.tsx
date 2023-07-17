import { useScroll } from "@react-three/drei";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

type ScrollManagerProps = {
  section: null | number;
  setSection: (section: null | number) => void;
};

function ScrollManager(props: ScrollManagerProps) {
  const { section, setSection } = props;

  const data = useScroll();
  const isAnimating = useRef(false);

  useEffect(() => {
    if (section === null) return;
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
        setSection(null);
      },
    });
  }, [section]);

  return null;
}
export default ScrollManager;
