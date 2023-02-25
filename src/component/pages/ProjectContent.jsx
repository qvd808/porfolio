import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

export default function ProjectContent({ name }) {
  const ProjectName = name.split(".md")[0];
  const [projectData, setProjectData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://raw.githubusercontent.com/qvd808/Porfolio-site-content/main/${name}`
      );
      setProjectData(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className="project-card">
      <div className="project-title"
      >
        {ProjectName}
      </div>
      <div className="project-card-content">
        Desscription
        <ReactMarkdown>{projectData}</ReactMarkdown>
      </div>
    </div>
  );
}
