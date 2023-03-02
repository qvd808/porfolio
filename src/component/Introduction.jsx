import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Complete from "./animation/Complete.json"
import { useState } from "react";
import HeadShot from "./HeadShot.jpeg"

export default function Introduction({onMouseDown}) {

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
            <div className="intro-display">
                <ul>
                    <li>
                        I enjoy solving problem around me
                    </li>
                    <li>
                        I love exploring new ideas and pushing boundaries
                    </li>
                    <li>
                        I believe in the idea that to solve bigger problem, we should start with solving smaller part of it first
                    </li>
                </ul>
                <motion.img style={{
                    width: "17em",
                    height: "fit-content",
                    borderRadius: "10%",
                }} 
                whileHover={{
                    scale: 1.1,
                    cursor: "pointer",
                    boxShadow: "0 0 2em 0 rgba(255, 255, 255, 1)",
                  }}
                src={HeadShot}/>
            </div>

        </motion.div>
    )

}