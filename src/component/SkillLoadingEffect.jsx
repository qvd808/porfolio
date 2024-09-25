import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Complete from "./animation/Complete.json"
import { useState } from "react";

export default function SkillLoadingEffect({ onMouseDown }) {

  // const [animationComplete, setAnimationComplete] = useState(false);
const [sectorAngle, setSectorAngle] = useState(0);

 //  const skills = [
	// "Python🐍", "JavaScript", "React", "C++", "Java", "Rust🦀", "TailwindCss"
 //  ]

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

  const rotatingEffect = {
	animate: {
		opacity: 1,
		y: 0,
		rotate: 90
	},
	exit: {
	  opacity: 0, y: 50
	}
  }

  return (
	<motion.div
	  className="w-full h-full flex flex-col justify-center items-center my-4"
	  // key="info"
	  // variants={animationEffect}
	  // initial="initial"
	  // animate="animate"
	  // exit="exit"
	  // onMouseDown={onMouseDown}
	  // whileHover={{
	  //   cursor: "pointer",
	  //   boxShadow: "0 0 2em 0 rgba(245, 235, 132, 0.75)",
	  // }}
	>
		<motion.div 
		className="absolute top-[10%] w-[50%] h-auto aspect-square rounded-full bg-red-500"
		/>
		<motion.div 
		className="absolute top-[10%] w-[50%] h-auto aspect-square rounded-full bg-blue-100 clip-sector"
		animate={{
			rotate: sectorAngle,
		}}
		transition={{
			type: "tween",
			ease: "linear"
		}}
		onClick={() => {
			const adding = 180 - (sectorAngle % 360);
			setSectorAngle(sectorAngle + adding)}
		}
		/>

		<motion.div 
		className="absolute top-[10%] w-[50%] h-auto aspect-square rounded-full bg-green-100 clip-sector"
		animate={{
			rotate: (sectorAngle + 90),
		}}
		transition={{
			type: "tween",
			ease: "linear"
		}}
		onClick={() => {
			const adding = 180 - ((sectorAngle + 90) % 360);
			setSectorAngle(sectorAngle + adding)}
		}
		/>

		<motion.div 
		className="absolute top-[10%] w-[50%] h-auto aspect-square rounded-full bg-yellow-100 clip-sector"
		animate={{
			rotate: (sectorAngle + 180),
		}}
		transition={{
			type: "tween",
			ease: "linear"
		}}
		onClick={() => {
			const adding = 180 - ((sectorAngle + 180) % 360);
			setSectorAngle(sectorAngle + adding)}
		}
		/>

	</motion.div>
  )

}
