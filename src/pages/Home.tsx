import { motion } from "framer-motion";

type HomeProps = {
  setSection: (section: null | number) => void;
};

function Home(props: HomeProps) {
  const { setSection } = props;

  return (
    <div className="home">
      <motion.div
        className="home-text"
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.7,
          delay: 0.4,
        }}
      >
        <h1>FRONT</h1>
        <h1 className="end">END</h1>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
      >
        <span>Hi I'am</span>
        <br />
        Mateusz
        <br />
        Melaniuk<span>.</span>
      </motion.h2>
      <div className="home-about">
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
        >
          I'm a front-end developer based in Warsaw, Poland. If you're looking
          for a motivated and innovative web developer to join your team, I'd be
          thrilled to be part of the journey! Let's build something remarkable
          together.
        </motion.p>
        <motion.button
          onClick={() => {
            setSection(4);
          }}
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: 0.7,
          }}
        >
          <span>CONTACT ME</span>
        </motion.button>
      </div>
    </div>
  );
}
export default Home;
