  import { createContext, useEffect, useState } from "react";

  export const ProjectContext = createContext({
    projects: [],
    setProject: () => {},
  });

  export default function ProjectProvider({ children }) {
    const API_URL = import.meta.env.VITE_API_URL|| "http://localhost:8080";
    console.log("My API URL is:", API_URL);
    console.log("All Env Variables:", import.meta.env);
    const [projects, setProject] = useState([]);

    useEffect(() => {
      const fetchProject = async () => {
        try {
          const response = await fetch(`http://localhost:8080/projects`);
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
