import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const TextFadeInOut = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [texts, setTexts] = useState(["Hello", "World", "Framer"]);

  const animationControls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      await animationControls.start({ opacity: 1 });
      await animationControls.start({ opacity: 0 });

      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    };

    animate();
  }, [currentTextIndex, texts, animationControls]);

  return (
    <AnimatePresence mode="wait">
      <motion.h1
        key={currentTextIndex}
        initial={{ opacity: 0 }}
        animate={animationControls}
        exit={{ opacity: 0 }}
      >
        {texts[currentTextIndex]}
      </motion.h1>
    </AnimatePresence>
  );
};

export default TextFadeInOut;
