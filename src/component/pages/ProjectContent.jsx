import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import TextEffect from "../TypingEffect";


const container = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 1.5+ i * 0 },
  }),
};

export default function ProjectContent({ name }) {
  const ProjectName = name.split(".md")[0];
  const gifLink = `https://raw.githubusercontent.com/qvd808/Porfolio-site-content/main/${ProjectName}.gif`
  const [projectData, setProjectData] = useState("");
  const [isHovered, setIsHovered] = useState(false);


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
        boxShadow: "0 0 2em 0 rgba(255, 255, 255, 1)",
      }}
      onMouseEnter={()=>setIsHovered(true)}
    >
      <div className="project-title">
        <TextEffect text={ProjectName} isHovered={isHovered} setIsHovered={setIsHovered}/>
      </div>
      <motion.div className="project-card-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <img style={{
          width: "90%",
          height: "100%",
          objectFit: "cover"
        }}
        src={gifLink} alt="Hello"/>       
        {projectData}

      </motion.div>

    </motion.div>
  );
}
