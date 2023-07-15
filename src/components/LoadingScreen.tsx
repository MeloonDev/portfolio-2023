import { useProgress } from "@react-three/drei";
import { useEffect } from "react";

type LoadingScreenProps = {
  started: boolean;
  setStarted: (started: boolean) => void;
};

function LoadingScreen(props: LoadingScreenProps) {
  const { started, setStarted } = props;
  const { progress, total, loaded, item } = useProgress();

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setStarted(true);
      }, 1000);
    }
  }, [progress, total, loaded, item]);

  return (
    <div
      className="loading-screen"
      style={{
        opacity: started ? 0 : 1,
      }}
    >
      <div className="loading-screen-text-wrapper">
        <div
          className="loading-screen-text-fill"
          style={{
            width: `${progress}%`,
          }}
        >
          Mateusz Melaniuk
        </div>
        <div className="loading-screen-text">Mateusz Melaniuk</div>
      </div>
    </div>
  );
}
export default LoadingScreen;
