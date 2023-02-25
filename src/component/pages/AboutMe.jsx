import { motion } from "framer-motion";
import TypingAnimation from "../TypingEffect";

export default function AboutMe() {
  return (
    <motion.div
      className="about"
      initial={{
        x: "-100vw",
      }}
      animate={{
        x: 0,
      }}
      exit={{
        x: "100vw",
      }}
      transition={{
        duration: 1,
      }}
    >
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-content">
        <ul>
          <li>
            <p>I love exploring new ideas and pushing boundaries.</p>
          </li>
          <li>
            <p>Dedicated to creating unique and innovative solutions</p>
          </li>
          <li>
            <p>
              Innovation is the key to success, and I thrive on finding new ways
              to approach challenges
            </p>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
