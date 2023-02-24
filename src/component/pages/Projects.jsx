import axios from "axios";
import { useEffect, useState } from "react";
import ProjectContent from "./ProjectContent";

const baseUrl = "https://api.github.com/repos/qvd808/Porfolio-site-content/contents/";

const httpClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
        async function fetchData() {
          const result = await httpClient.get("/");
          setProjects(result.data);
        }
        fetchData();
  },[])

  return (
    <div className="about">
      <div className="about-title">
        <h1>Projects</h1>
      </div>
      <div className="project-content">
        {
            projects.map((res, idx) => (
                <ProjectContent key = {idx} name={res.name}/>
            ))
        }
      </div>
    </div>
  );
}
