import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Complete from "./Complete.json"

const movingCircle = {
  initial: {
    opacity: 1,
    scale: 1,
    x: "-16em",
    y: "5em"
  },

  circle2: {
    width: "4em",
    height: "4em",
    scale: 1,
    x: "-21em",
    y: "3.75em"
  },

  smallCircleGoIn: {
    borderRadius: 0,
    // scale: 4,
    width: "20em",
    height: "20em",
    x: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
      type: "spring"
    }

  },

  animate: {
    scale: 2,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeIn",
      type: "spring"
    }
  },

  exit: {
    opacity: 0
  }

}

export default function AboutMe() {

  const [isHovered, setIsHovered] = useState(false);
  const [circle2Hover, setCircle2Hover] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [circle2Data, setCircle2Data] = useState("Skill");
  const skills = ["Python", "JavaScript", "React", "React Native"]

  useEffect(() => {

    if (circle2Hover === true) {
      setCircle2Data("Python, Rust, Javascript")
    } else {
      setCircle2Data("Skill")

    }

  }, [circle2Hover])

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

        <div className="container-display-about">
          {
            skills.map((skill) => (
              <div className="skill-display"
                style={{
                  height: "5em"
                }}
              >
                <div className="skill-display-text">
                  {skill}
                </div>
                <motion.div
                  className="skill-display-animation"
                  initial={{
                    width: 0,
                    height: "1.5em",
                    backgroundColor: "#60f542"
                  }}
                  animate={{
                    width: "20em",
                    transition: {
                      duration: 1,
                      delay: 2,
                    }
                  }}

                  onAnimationComplete={() => setAnimationComplete(true)}
                />
                {
                  animationComplete && (
                    <Lottie
                      style={{
                        width: "100px",
                        height: "100px"
                      }}
                      animationData={Complete}
                      autoplay
                      loop={false}
                    />
                  )
                }

              </div>
            ))
          }
        </div>



    </motion.div>
  );
}
