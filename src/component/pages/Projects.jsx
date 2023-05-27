import axios from "axios";
import { useEffect, useState } from "react";
import ProjectContent from "./ProjectContent";
import { motion } from "framer-motion";

const baseUrl =
  "https://api.github.com/repos/qvd808/Porfolio-site-content/contents/";

const httpClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await httpClient.get("/");
      const data = result.data.filter(file => file.name.endsWith('.md'))
      setProjects(data);
    }
    fetchData();
  }, []);

  return (
    <motion.div
      className="flex flex-col min-h-screen bg-gray-900 text-white"
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
      }}

      exit={{
        x: "100vw"
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="text-4xl mx-auto p-4">
        <h1>Projects</h1>
      </div>
      <div className="grid grid-cols-3">
        {projects.map((res, idx) => (
          <ProjectContent key={idx} name={res.name} />
        ))}
                {projects.map((res, idx) => (
          <ProjectContent key={idx} name={res.name} />
        ))}
                {projects.map((res, idx) => (
          <ProjectContent key={idx} name={res.name} />
        ))}
      </div>
    </motion.div>
  );
}
