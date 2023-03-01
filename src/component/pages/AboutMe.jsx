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
      <AnimatePresence>
        {!isMouseDown && (
          <motion.div className="about-circle-choice"
            key="choice"
            variants={parentVariants} initial="initial" animate="animate" exit="exit"
          >
            <motion.div
              className="circle-text"
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

            <motion.div className="circle-text" variants={childVariants}
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
              About me
            </motion.div>

            <motion.div className="circle-text" variants={childVariants}
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
