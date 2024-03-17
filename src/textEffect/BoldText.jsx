import { motion } from "framer-motion";
import { useEffect } from "react";

const textEffect = {
    initial: {
      opacity: 1,
    },
  
    animate: (delay) => ({
      opacity: [0,1],
      x: [50, 0],
      pointer: "cursor",
      transition: {
        delay: delay * 0.1,
        duration: 0.3,
        times: [0.1, 1]
      }
    })
  
  }
  

const BoldText = ({ text }) => {
  const list_of_Boldtext = [
    "python",
    "react",
    "nodejs",
    "express",
    "aws",
    "java",
    "rust",
    "native",
    "c",
    "pytorch",
    "nextjs",
    "typescript",
    "firebase",
  ];

  return (
    <div>
      {text.split(" ").map((char, idx) => {
        const isBold = list_of_Boldtext.includes(
          char.toLowerCase().replace(/[^a-zA-Z\s]/g, "")
        );
        return (
          <motion.span
            variants={textEffect}
            animate={custom => ({...textEffect.animate(custom), custom})}
            custom={idx}
            key={idx}
            style={{ fontWeight: isBold ? "bold" : "normal" }}
          >
            {char}{" "}
          </motion.span>
        );
      })}
    </div>
  );
};

export default BoldText;
