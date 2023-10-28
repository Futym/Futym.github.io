import { Project } from "./Project";

const projects = [
  {
    title: "ToDo List",
    description: "This is todo list project",
    technologies: "React.js",
    isProjectReady: false,
  },
  {
    title: "Snake",
    description: "This is snake like game",
    technologies: "Python",
    isProjectReady: true,
  },
  {
    title: "Tic-Tac-Toe",
    description: "Simple locally played Tic-Tac-Toe",
    technologies: "Python",
    isProjectReady: true,
  },
];

export const Projects = () => {
  return (
    <div>
      {projects.map((project, key) => {
        return (
          project.isProjectReady && (
            <Project
              key={key}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          )
        );
      })}
    </div>
  );
};
