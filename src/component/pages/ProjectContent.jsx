import { useEffect, useState } from "react";
import axios from "axios"

export default function ProjectContent ({name}) {

const [projectData, setProjectData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://raw.githubusercontent.com/qvd808/Porfolio-site-content/main/DogCatRecognition.md"
      );
      setProjectData(result.data);
    }
    fetchData();
  }, []);


    return (
        <div className="project-card">
            {name}
            <div>Desscription
                <div>
                    {projectData}
                </div>
            </div>
        </div>
    )
} 