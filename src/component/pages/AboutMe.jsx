import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import SkillLoadingEffect from "../SkillLoadingEffect";
import Introduction from "../Introduction";
import Contact from "../Contact";


export default function AboutMe() {

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isSkillDisplayed, setIsSkillDisplayed] = useState(false);
  const [isIntroductionDisplayed, setIsIntroductionDisplayed] = useState(false);
  const [isContactDisplayed, setIsContactDisplayed] = useState(false);

  const parentVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.3, delayChildren: 0.8 }, },
    exit: { transition: { staggerChildren: 0.1 }, }
  };

  const childVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1, y: 0, transition: {
        type: "spring",
      }
    },
    exit: {
      opacity: 0, y: 50
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white"
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

      <div className="text-4xl mx-auto p-4">
        <h1>Hello, There!!!</h1>
      </div>
      <AnimatePresence>
        {!isMouseDown && (
          <motion.div className="flex mx-auto py-4 space-x-10"
            key="choice"
            variants={parentVariants} initial="initial" animate="animate" exit="exit"
          >
            <motion.div
              className="w-24 h-24 rounded-full flex justify-center items-center bg-red-500 text-white text-xl md:w-40 md:h-40"
              key="circle1"
              variants={childVariants}
              onMouseDown={() => {
                setIsMouseDown(true)
                setIsSkillDisplayed(true)
              }}
              whileHover={{
                cursor: "pointer",
                boxShadow: "0 0 2em 0 rgba(245, 235, 132, 0.75)",
              }}
            >
              Skills
            </motion.div>

            <motion.div
              className="w-{24} h-{24} rounded-full flex justify-center items-center bg-red-500 text-white text-xl md:w-40 md:h-40" variants={childVariants}
              key="circle2"
              onMouseDown={() => {
                setIsMouseDown(true)
                setIsIntroductionDisplayed(true)
              }}
              whileHover={{
                cursor: "pointer",
                boxShadow: "0 0 2em 0 rgba(245, 235, 132, 0.75)",
              }}
            >
              About Me

            </motion.div>

            <motion.div
              className="w-{24} h-{24} rounded-full flex justify-center items-center bg-red-500 text-white text-xl md:w-40 md:h-40" variants={childVariants}
              key="circle3"
              onMouseDown={() => {
                setIsMouseDown(true)
                setIsContactDisplayed(true)
              }}
              whileHover={{
                cursor: "pointer",
                boxShadow: "0 0 2em 0 rgba(245, 235, 132, 0.75)",
              }}
            >
              Contact
            </motion.div>

          </motion.div>
        )
        }

        {isSkillDisplayed && (
          <SkillLoadingEffect key="display1" onMouseDown={() => {
            setIsMouseDown(false)
            setIsSkillDisplayed(false)
          }} />
        )}

        {isIntroductionDisplayed && (
          <Introduction key="display2" onMouseDown={() => {
            setIsMouseDown(false)
            setIsIntroductionDisplayed(false)
          }} />
        )}

        {isContactDisplayed && (
          <Contact key="display3" onMouseDown={() => {
            setIsMouseDown(false)
            setIsContactDisplayed(false)
          }} />
        )}

      </AnimatePresence>


    </motion.div>
  );
}
