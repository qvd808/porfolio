import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const TypingAnimation = () => {
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1 });
      await controls.start({ width: "100%" });
      await controls.start({ opacity: 0 });
      await controls.start({ width: "0%" });
      await sequence();
    };
    sequence();
  }, [controls]);

  return (
    <motion.div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        width: "300px",
        overflow: "hidden",
        backgroundColor: "#fff",
        border: "2px solid #333",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <motion.div
        animate={controls}
        style={{
          height: "100%",
          width: "0%",
          backgroundColor: "#333",
        }}
      ></motion.div>
      <motion.p
        style={{
          margin: "0",
          padding: "0",
          fontSize: "24px",
          color: "#333",
        }}
      >
        Hello, world!
      </motion.p>
    </motion.div>
  );
};

export default TypingAnimation;
