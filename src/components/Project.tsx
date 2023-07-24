import { motion } from "framer-motion";

type ProjectProps = {
  project: {
    title: string;
    tools: string;
    image: string;
    url: string;
  };
};

function Project(props: ProjectProps) {
  const { project } = props;

  return (
    <motion.div
      className="project"
      initial={{ x: 100, scale: 0.8, opacity: 0, filter: "blur(10px)" }}
      whileInView={{ x: 0, scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.3,
        delay: 0.2,
      }}
    >
      <img src={project.image} alt={project.title} />
      <div className="shadow"></div>
      <div className="project-desc">
        <h2>{project.title}</h2>
        <p>{project.tools}</p>
      </div>
      <a href={project.url} target="_blank" className="project-repo">
        {"</>"}
      </a>
    </motion.div>
  );
}
export default Project;
