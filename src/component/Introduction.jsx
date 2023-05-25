import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Complete from "./animation/Complete.json"
import { useState } from "react";
import HeadShot from "../assets/HeadShot.jpeg"

export default function Introduction({ onMouseDown }) {

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
            className="w-4/5 h-96 bg-cyan-700 flex flex-col justify-evenly md:h-96"
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
            <div className="flex items-center">
                <ul className="w-7/12 mx-auto text-base md:text-xl md:w-8/12 xl:text-3xl">
                    <li className="pacifico py-4">
                        I enjoy solving problem around me
                    </li>
                    <li className="pacifico py-4">
                        I love exploring new ideas and pushing boundaries
                    </li>
                    <li className="pacifico py-4">
                        I believe in the idea that to solve bigger problem, we should start with solving smaller part of it first
                    </li>
                </ul>
                <div
                    className="flex items-center w-36 mx-auto md:w-60 h-36"
                >
                    <motion.img
                        style={{
                            // width: "fit-content",
                            // height: "fit-content",
                            borderRadius: "10%",
                        }}
                        whileHover={{
                            scale: 1.1,
                            cursor: "pointer",
                            boxShadow: "0 0 2em 0 rgba(255, 255, 255, 1)",
                        }}
                        src={HeadShot} />
                </div>

            </div>

        </motion.div>
    )

}