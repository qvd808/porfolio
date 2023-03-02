import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Complete from "./animation/Complete.json"
import { useState } from "react";

export default function SkillLoadingEffect({onMouseDown}) {

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
            className="container-display-about" 
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
              <div className="skill-display"
                key={`info-display${idx}`}
                style={{
                  height: "5em"
                }}
              >
                <div className="skill-display-text" 
                  key={`title${idx}`}

                >
                  {skill}
                </div>
                <motion.div
                  className="skill-display-animation"
                  key={`framer${idx}`}

                  initial={{
                    width: 0,
                    height: "1.5em",
                    backgroundColor: "#60f542"
                  }}
                  animate={{
                    width: "40em",
                    transition: {
                      duration: 1,
                      delay: 1.2,
                    }
                  }}

                  onAnimationComplete={() => setAnimationComplete(true)}
                />
                {
                  animationComplete && (
                    <Lottie
                        key={`Lottie${idx}`}
                      style={{
                        width: "100px",
                        height: "100px"
                      }}
                      className="animation-complete"
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