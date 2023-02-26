import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
      duration: 0.5,
      times: [0.1, 1]
    }
  })

}


export default function TextEffect({text, isHovered, setIsHovered}) {

  useEffect(()=> {
    const timeId = setTimeout(() => {
      setIsHovered(false);
    }, 250*text.length)

    return () => clearTimeout(timeId)
  }, [isHovered])

  return (
    <div >

      {
        text.split("").map((char, idx) => {
          return (
            <motion.span
            key={idx}
            variants={textEffect}
            animate={isHovered? custom => ({...textEffect.animate(custom), custom}) : "initial"}
            custom={idx}
        >
          {char}
        </motion.span>
          )
        })
      }
    


    </div>
  );
}
