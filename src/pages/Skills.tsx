function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="wrapper">
        <div className="skills-list">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Sass</li>
            <li>Three JS</li>
            <li>c++</li>
            <li>Blender</li>
            <li>c++</li>
            <li>npm</li>
            <li>Git</li>
          </ul>
          <h3> I’m currently learning:</h3>
          <ul>
            <li>Next JS</li>
            <li>c#</li>
            <li>Unity</li>
            <li>Figma</li>
          </ul>
        </div>
        <div className="circle">
          <div className="logo"></div>
          <div className="text">
            <p>
              {"Mateusz Melaniuk - Front-End Developer - "
                .split("")
                .map((char, i) => (
                  <span
                    key={i}
                    style={{
                      transform: `rotate(${i * 8.9}deg)`,
                    }}
                  >
                    {char}
                  </span>
                ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
