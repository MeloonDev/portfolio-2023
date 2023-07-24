import { motion } from "framer-motion";

type ContactProps = {
  setSection: (section: null | number) => void;
};

function Contact(props: ContactProps) {
  const { setSection } = props;

  return (
    <div className="contact" id="contact">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        Get in touch
      </motion.h1>
      <motion.div
        className="mail"
        initial={{ opacity: 0, rotate: -5 }}
        whileInView={{ opacity: 1, rotate: 5 }}
        transition={{
          opacity: { duration: 1.5 },
        }}
      >
        <a href="mailto: mateusz.melaniuk98@gmail.com">
          mateusz.melaniuk98@gmail.com -
        </a>
        <a href="mailto: mateusz.melaniuk98@gmail.com">
          mateusz.melaniuk98@gmail.com -
        </a>
        <a href="mailto: mateusz.melaniuk98@gmail.com">
          mateusz.melaniuk98@gmail.com -
        </a>
        <a href="mailto: mateusz.melaniuk98@gmail.com">
          mateusz.melaniuk98@gmail.com -
        </a>
        <a href="mailto: mateusz.melaniuk98@gmail.com">
          mateusz.melaniuk98@gmail.com -
        </a>
        <a href="mailto: mateusz.melaniuk98@gmail.com">
          mateusz.melaniuk98@gmail.com -
        </a>
      </motion.div>
      <motion.div
        className="wrapper"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <div className="socials">
          <h3>Socials</h3>
          <ul>
            <li>
              <a href="https://github.com/MeloonDev" target="_blank">
                GH
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mateusz-melaniuk-8440b1248/"
                target="_blank"
              >
                LI
              </a>
            </li>
            <li>
              <a href="https://twitter.com/MeloonDev" target="_blank">
                TW
              </a>
            </li>
            <li>
              <a href="https://pl.pinterest.com/MeloonDev/" target="_blank">
                PT
              </a>
            </li>
          </ul>
        </div>
        <button
          className="scroll-to-top"
          onClick={() => {
            setSection(0);
          }}
        >
          🡡
        </button>
      </motion.div>
    </div>
  );
}
export default Contact;
