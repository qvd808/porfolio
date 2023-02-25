import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";


const container = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: i * 0 },
  }),
};

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
    <motion.div
      className="project-card"
      whileHover={{
        scale: 1.1,
        cursor: "pointer",
      }}
    >
      <div className="project-title">{ProjectName}</div>
      <motion.div className="project-card-content"
      variants={container}
        initial="hidden"
        animate="visible"
      >
        <ReactMarkdown>{projectData}</ReactMarkdown>
      </motion.div>
    </motion.div>
  );
}
