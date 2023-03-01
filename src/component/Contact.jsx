import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useState } from "react";

export default function Contact({onMouseDown}) {

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
                        Linkdn
                    </li>
                    <li>
                        GitHub
                    </li>
                    <li>
                        Email
                    </li>
                </ul>
            </div>

        </motion.div>
    )

}