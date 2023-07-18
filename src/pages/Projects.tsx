import Project from "../components/Project";

const projects = [
  {
    title: "Spotify Clone",
    tools: "React, Redux, TypeScript, Styled Components",
    image: "/img/proj1.png",
  },
  {
    title: "Finance Dashboard",
    tools: "React, TypeScript, Sass",
    image: "/img/proj2.png",
  },
  {
    title: "Weather App",
    tools: "React, TypeScript, Tailwind CSS, OpenWeather API",
    image: "/img/proj3.jpg",
  },
];

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      {projects.map((project, i) => (
        <Project key={i} project={project} />
      ))}
      <h3>
        See more on my{" "}
        <a href="https://github.com/MeloonDev" target="_blank">
          Github
        </a>
      </h3>
    </div>
  );
}
export default Projects;
