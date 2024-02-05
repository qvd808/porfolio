import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

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

function GlitchText({setIsPlaying}) {
  const [text, setText] = useState(["Welcome", "to my", "website"]);
  const [index, setIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setTimeout(() => {
      if (!isFinished) {
        setIndex(index + 1);
      }
      if (text.length - 1 == index) {
        setIsFinished(true);
        setIsPlaying(false);
      }
    }, 900);

    return () => clearTimeout(interval);
  }, [index]);

  return (
    <AnimatePresence>
      <motion.div className="h-screen bg-[#222] grid place-items-center justify-center items-center">
        <motion.div
          className="text-6xl uppercase text-white absolute notPhone:text-8xl"
          variants={glitch}
          animate="textEffect"
          transition={{
            duration: 0.5,
            times: [0, 0.14, 0.15, 0.49, 0.5, 0.99, 1],
            repeatType: "loop",
            repeat: Infinity
          }}
          key={`${text[index]}1`}
        >
          {text[index]}
        </motion.div>
        <motion.div
          className="text-6xl uppercase text-white absolute notPhone:text-8xl"
          style={{
            position: "absolute",
            clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
            transform: "translate(-0.025em, -0.0125em)",
            opacity: 0.8,
          }}
          variants={glitch}
          animate="textEffectTranslateUp"
          transition={{
            duration: 0.65,
            times: [0, 0.14, 0.15, 0.49, 0.5, 0.99, 1],
          }}
          key={`${text[index]}2`}
        >
          {text[index]}
        </motion.div>
        <motion.div
          className="text-6xl uppercase text-white absolute notPhone:text-8xl"
          style={{
            position: "absolute",
            clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)",
            transform: "translate(0.015em, 0.025em)",
            opacity: 0.8,
          }}
          variants={glitch}
          animate="textEffectTranslateDown"
          transition={{
            duration: 0.375,
            times: [0, 0.14, 0.15, 0.49, 0.5, 0.99, 1],
          }}
          key={`${text[index]}3`}
        >
          {text[index]}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default GlitchText;
