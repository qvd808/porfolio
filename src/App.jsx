import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import GlitchText from "./component/GlitchText";
import Home from "./component/Home";

function App() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="App">
      <AnimatePresence>
        {isPlaying ? (
          <motion.div
            key="frame1"
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <GlitchText key="loading" setIsPlaying={setIsPlaying} />
          </motion.div>
        ) : (
          <motion.div
            key="frame2"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              clipPath: "circle(100%)"
            }}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
          >
            <Home key="home"/>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
