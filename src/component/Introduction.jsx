import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Complete from "./Complete.json"
import { useState } from "react";

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
        >
            <ul>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
                <li>
                    Hello world
                </li>
            </ul>
        </motion.div>
    )

}