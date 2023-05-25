import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Complete from "./animation/Complete.json"
import { useState } from "react";

export default function SkillLoadingEffect({ onMouseDown }) {

  const [animationComplete, setAnimationComplete] = useState(false);

  const skills = ["Python", "JavaScript", "React", "React Native"]

  const animationEffect = {
    initial: { opacity: 0, y: "30em" },
    animate: {
      opacity: 1, y: 0, transition: {
        type: "spring",
        duration: 1,
      }
    },
    exit: {
      opacity: 0, y: 50
    }
  }

  return (
    <motion.div
      className="w-4/5 h-80 bg-indigo-800 flex flex-col justify-evenly"
      key="info"
      variants={animationEffect}
      initial="initial"
      animate="animate"
      exit="exit"
      onMouseDown={onMouseDown}
      whileHover={{
        cursor: "pointer",
        boxShadow: "0 0 2em 0 rgba(245, 235, 132, 0.75)",
      }}
    >
      {
        skills.map((skill, idx) => (
          <div className="grid grid-cols-[1fr_5fr_1fr] items-center"
            key={`info-display${idx}`}
            style={{
              height: "5em"
            }}
          >

            <div className="text-center sharetech text-lg text-lightBlue"
              key={`title${idx}`}
              style={{
                // color: "red"
                // color: "rgb(69, 10, 10, 1)"
              }}
            >
              {skill}
            </div>

            <motion.div
              className="bg-emerald-600"
              key={`framer${idx}`}

              initial={{
                width: 0,
                height: "1.5em",
              }}
              animate={{
                width: "100%",
                transition: {
                  duration: 1,
                  delay: 1.2 + idx/10,
                }
              }}

              onAnimationComplete={() => setAnimationComplete(true)}
            />

            {
              animationComplete && (
                <Lottie
                  key={`Lottie${idx}`}
                  className="w-16 h-auto mx-auto"
                  animationData={Complete}
                  autoplay
                  loop={false}
                />
              )
            }

          </div>
        ))
      }
    </motion.div>
  )

}