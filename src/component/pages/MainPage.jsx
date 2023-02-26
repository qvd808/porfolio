import { animate, motion } from "framer-motion";

const glitch = {
  textEffect: {
    textShadow: [
      "0.05em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),-0.025em 0.05em 0 rgba(0, 0, 255, 0.75)",
      "0.05em 0 0 rgba(255, 0, 0, 0.75),-0.05em -0.025em 0 rgba(0, 255, 0, 0.75),-0.025em 0.05em 0 rgba(0, 0, 255, 0.75)",
      "-0.05em -0.025 0 rgba(255, 0, 0, 0.75),0.025em 0.025em 0 rgba(0, 255, 0, 0.75),-0.05em -0.05em 0 rgba(0, 0, 255, 0.75)",
      "-0.05em -0.025 0 rgba(255, 0, 0, 0.75),0.025em 0.025em 0 rgba(0, 255, 0, 0.75),-0.05em -0.05em 0 rgba(0, 0, 255, 0.75)",
      "0.025em 0.05 0 rgba(255, 0, 0, 0.75),0.05em 0 0 rgba(0, 255, 0, 0.75),0 -0.05em 0 rgba(0, 0, 255, 0.75)",
      "0.025em 0.05 0 rgba(255, 0, 0, 0.75),0.05em 0 0 rgba(0, 255, 0, 0.75),0 -0.05em 0 rgba(0, 0, 255, 0.75)",
      "-0.025em 0 0 rgba(255, 0, 0, 0.75),-0.025em -0.025em 0 rgba(0, 255, 0, 0.75),-0.025em -0.05em 0 rgba(0, 0, 255, 0.75)",
    ],
    opacity: [1, 1, 1, 1, 1, 1, 0],
  },

  textEffectTranslateDown: {
    textShadow: [
      "0.05em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),-0.025em 0.05em 0 rgba(0, 0, 255, 0.75)",
      "0.05em 0 0 rgba(255, 0, 0, 0.75),-0.05em -0.025em 0 rgba(0, 255, 0, 0.75),-0.025em 0.05em 0 rgba(0, 0, 255, 0.75)",
      "-0.05em -0.025 0 rgba(255, 0, 0, 0.75),0.025em 0.025em 0 rgba(0, 255, 0, 0.75),-0.05em -0.05em 0 rgba(0, 0, 255, 0.75)",
      "-0.05em -0.025 0 rgba(255, 0, 0, 0.75),0.025em 0.025em 0 rgba(0, 255, 0, 0.75),-0.05em -0.05em 0 rgba(0, 0, 255, 0.75)",
      "0.025em 0.05 0 rgba(255, 0, 0, 0.75),0.05em 0 0 rgba(0, 255, 0, 0.75),0 -0.05em 0 rgba(0, 0, 255, 0.75)",
      "0.025em 0.05 0 rgba(255, 0, 0, 0.75),0.05em 0 0 rgba(0, 255, 0, 0.75),0 -0.05em 0 rgba(0, 0, 255, 0.75)",
      "-0.025em 0 0 rgba(255, 0, 0, 0.75),-0.025em -0.025em 0 rgba(0, 255, 0, 0.75),-0.025em -0.05em 0 rgba(0, 0, 255, 0.75)",
    ],
    transform: [
      "translate(0.025em, 0.05em)",
      "translate(-0.025em, -0.0125em)",
      "translate(-0.025em, -0.0125em)",
      "translate(0.04em, 0.1em)",
      "translate(-0.025em, -0.0125em)",
      "translate(-0.025em, -0.0125em)",
      "translate(0.025em, 0.05em)",
    ],
    opacity: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0],
  },
  textEffectTranslateUp: {
    textShadow: [
      "0.05em 0 0 rgba(255, 0, 0, 0.75), -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),-0.025em 0.05em 0 rgba(0, 0, 255, 0.75)",
      "0.05em 0 0 rgba(255, 0, 0, 0.75),-0.05em -0.025em 0 rgba(0, 255, 0, 0.75),-0.025em 0.05em 0 rgba(0, 0, 255, 0.75)",
      "-0.05em -0.025 0 rgba(255, 0, 0, 0.75),0.025em 0.025em 0 rgba(0, 255, 0, 0.75),-0.05em -0.05em 0 rgba(0, 0, 255, 0.75)",
      "-0.05em -0.025 0 rgba(255, 0, 0, 0.75),0.025em 0.025em 0 rgba(0, 255, 0, 0.75),-0.05em -0.05em 0 rgba(0, 0, 255, 0.75)",
      "0.025em 0.05 0 rgba(255, 0, 0, 0.75),0.05em 0 0 rgba(0, 255, 0, 0.75),0 -0.05em 0 rgba(0, 0, 255, 0.75)",
      "0.025em 0.05 0 rgba(255, 0, 0, 0.75),0.05em 0 0 rgba(0, 255, 0, 0.75),0 -0.05em 0 rgba(0, 0, 255, 0.75)",
      "-0.025em 0 0 rgba(255, 0, 0, 0.75),-0.025em -0.025em 0 rgba(0, 255, 0, 0.75),-0.025em -0.05em 0 rgba(0, 0, 255, 0.75)",
    ],
    transform: [
      "translate(0.025em, 0.05em)",
      "translate(0.015em, 0.025em)",
      "translate(0.015em, 0.025em)",
      "translate(-0.04em, -0.1em)",
      "translate(0.015em, 0.025em)",
      "translate(0.015em, 0.025em)",
      "translate(0.025em, 0.05em)",
    ],
    opacity: [0.75, 0.75, 0.75, 0.75, 0.75, 0.75, 0],
  },
};

export default function MainPage() {

  const text=["Welcome"];
  const index = [0];

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
       <div>
        
       </div>
        

    </motion.div>
  );
}
