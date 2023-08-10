import Spline from '@splinetool/react-spline';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const animationEffect = {
    initial: { opacity: 0, y: "30em" },
    animate: {
        opacity: 1, y: 0, transition: {
            type: "spring",
            duration: 2.5,
        }
    },
    exit: {
        opacity: 0, y: 50
    }
}


export default function Character() {
    return (
        // <div className="w-[30vw] h-[30vh] my-20"
            // key="character"
            // variants={animationEffect}
            // initial="initial"
            // animate="animate"
            // exit="exit"
        // >
            <Spline scene="https://prod.spline.design/XzwQUW7aWZMLQFKo/scene.splinecode"/>
        // </div>
    )
}