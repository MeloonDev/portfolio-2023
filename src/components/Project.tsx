type ProjectProps = {
  project: {
    title: string;
    tools: string;
    image: string;
  };
};

function Project(props: ProjectProps) {
  const { project } = props;

  return (
    <div className="project">
      <div className="project-desc">
        <h2>{project.title}</h2>
        <p>{project.tools}</p>
        <div className="code"></div>
        <div className="live"></div>
      </div>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
    </div>
  );
}
export default Project;