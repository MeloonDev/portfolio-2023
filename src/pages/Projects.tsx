import Project from "../components/Project";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Spotify Clone",
    tools: "React, Redux, TypeScript, Styled Components",
    image: "/img/proj1.png",
    url: "https://github.com/MeloonDev/spotify-clone",
  },
  {
    title: "Finance Dashboard",
    tools: "React, TypeScript, Sass",
    image: "/img/proj2.png",
    url: "https://github.com/MeloonDev/finance-dashboard",
  },
  {
    title: "Weather App",
    tools: "React, TypeScript, Tailwind CSS, OpenWeather API",
    image: "/img/proj3.png",
    url: "https://github.com/MeloonDev/weather-forecast",
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="wrapper">
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
        >
          See more on my{" "}
          <a href="https://github.com/MeloonDev" target="_blank">
            Github
          </a>
        </motion.h3>
      </div>
    </div>
  );
}
export default Projects;
