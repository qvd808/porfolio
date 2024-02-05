import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Complete from "./animation/Complete.json"
import { useState } from "react";

export default function SkillLoadingEffect({ onMouseDown }) {

  const [animationComplete, setAnimationComplete] = useState(false);

  const skills = [
    "Python🐍", "JavaScript", "React", "C++", "Java", "Rust🦀", "TailwindCss"
  ]

  const animationEffect = {
    initial: { opacity: 0, y: "30em" },
    animate: {
      opacity: 1, y: 0, transition: {
        type: "spring",
        duration: 1.5,
      }
    },
    exit: {
      opacity: 0, y: 50
    }
  }

  return (
    <motion.div
      className="w-5/6 h-4/5 bg-indigo-800 flex flex-col justify-evenly my-4 rounded-xl"
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
          <div className="grid grid-cols-[30%_50%_15%] py-5 md:grid-cols-[20%_70%_10%]"
            key={`info-display${idx}`}
            style={{
              height: "5em"
            }}
          >

            <div className="text-center sharetech text-base text-lightBlue md:text-xl"
              key={`title${idx}`}
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
                  delay: 0.8 + idx/10,
                }
              }}

              onAnimationComplete={() => setAnimationComplete(true)}
            />

            {
              animationComplete && (
                <Lottie
                  key={`Lottie${idx}`}
                  className="w-16 relative bottom-4 left-2"
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