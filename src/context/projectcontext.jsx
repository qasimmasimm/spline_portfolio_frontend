import { createContext, useEffect, useState } from "react";

export const ProjectContext = createContext({
  projects: [],
  setProject: () => {},
});

export default function ProjectProvider({ children }) {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch("https://spline-portfolio-backend.vercel.app/projects");
        const data = await response.json();

        setProject(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProject();
  }, []);

  return (
    <ProjectContext.Provider value={{ projects, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
}
