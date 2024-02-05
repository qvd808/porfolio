import Lottie from "lottie-react";
import { useState } from "react";
import Robot from "./animation/robot.json";

const animationEffect = {
  initial: { opacity: 0, y: "30em" },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 2.5,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
  },
};

export default function Character() {
  return (
    <div>
      <Lottie
        className="max-w-xl"
        autoplay
        loop={false}
        animationData={Robot}
      />
    </div>
  );
}
