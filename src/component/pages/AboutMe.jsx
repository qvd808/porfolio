import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { chatBotAPI } from "../../api/api";
import SkillLoadingEffect from "../SkillLoadingEffect";
import Introduction from "../Introduction";
import Contact from "../Contact";
import Character from "../Character";
import Waiting from "../animation/waiting.json";
import Lottie from "lottie-react";
import BoldText from "../../textEffect/BoldText";

export default function AboutMe() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isSkillDisplayed, setIsSkillDisplayed] = useState(false);
  const [isIntroductionDisplayed, setIsIntroductionDisplayed] = useState(false);
  const [isContactDisplayed, setIsContactDisplayed] = useState(false);
  const [botMessage, setBotMessage] = useState("Hello there! ٩(^ᗜ^ )و My name is Botley. I am a chatbot created by Vinh. You can ask me anything about Vinh, his skills, and his experience. I will try my best to answer your questions. (´･ω･`)");
  // const [botMessage, setBotMessage] = useState(
  //   "My creator is Dang Quang Vinh. He is a skilled software engineer with experience in various technologies such as React, NextJs, NodeJs, Express, AWS, Java, C, bash, Python, Pytorch, and more. He has worked on projects such as VIRENTO, an online renting platform, and Forget Me Not, a mobile application for caregivers and dementia patients. He has also worked on personal projects like writing an operating system from scratch and creating a Flappy Bird bot. He has experience as an IT Associate/Junior Software Engineer at Atimi Software, where he utilized technologies like React Native, Python, Power Automate, Firebase, and more."
  // );

  const parentVariants = {
    initial: {},
    animate: { transition: { staggerChildren: 0.3, delayChildren: 0.8 } },
    exit: { transition: { staggerChildren: 0.1 } },
  };

  const childVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
      },
    },
    exit: {
      opacity: 0,
      y: 50,
    },
  };

  const getResponse = async () => {
    setBotMessage("");

    const response = await fetch(`${chatBotAPI}/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: document.getElementById("chatbox").value,
      }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        return data.answer;
      })
      .catch((err) => {
        console.log(err);
        return "There might be problem within the server. Sorry for the inconvenience. (´-ω-`)";
      });
    document.getElementById("chatbox").value = "";
    setBotMessage(response);
  };

  return (
    <motion.div
      className="flex flex-col items-center min-h-screen bg-gray-900 text-white"
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
      <div className="text-4xl mx-auto p-4">
        <h1>👋 Hello, There!!!</h1>
      </div>
      <AnimatePresence>
        {!isMouseDown && (
          <motion.div
            className="flex mx-auto py-5 justify-around items-center w-full max-w-2xl"
            key="choice"
            variants={parentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.div
              className="w-24 notPhone:w-40 h-auto aspect-square p-1 justify-center items-center text-center rounded-full flex bg-red-500 text-white text-xl notPhone:text-4xl"
              key="circle1"
              variants={childVariants}
              onMouseDown={() => {
                setIsMouseDown(true);
                setIsSkillDisplayed(true);
              }}
              whileHover={{
                cursor: "pointer",
                boxShadow: "0 0 2em 0 rgba(245, 235, 132, 0.75)",
              }}
            >
              Skills
            </motion.div>

            <motion.div
              className="w-24 notPhone:w-40 h-auto aspect-square p-1 justify-center items-center text-center rounded-full flex bg-red-500 text-white text-xl notPhone:text-4xl"
              variants={childVariants}
              key="circle2"
              onMouseDown={() => {
                setIsMouseDown(true);
                setIsIntroductionDisplayed(true);
              }}
              whileHover={{
                cursor: "pointer",
                boxShadow: "0 0 2em 0 rgba(245, 235, 132, 0.75)",
              }}
            >
              About Me
            </motion.div>

            <motion.div
              className="w-24 notPhone:w-40 h-auto aspect-square p-1 justify-center items-center text-center rounded-full flex bg-red-500 text-white text-xl notPhone:text-4xl"
              variants={childVariants}
              key="circle3"
              onMouseDown={() => {
                setIsMouseDown(true);
                setIsContactDisplayed(true);
              }}
              whileHover={{
                cursor: "pointer",
                boxShadow: "0 0 2em 0 rgba(245, 235, 132, 0.75)",
              }}
            >
              Contact
            </motion.div>
          </motion.div>
        )}

        {!isContactDisplayed &&
          !isSkillDisplayed &&
          !isIntroductionDisplayed && (
            <motion.div
              key="robot"
              className="flex justify-center flex-col items-center w-full max-w-6xl mx-auto p-4 md:flex-row-reverse"
              initial={{
                opacity: 0,
                y: "30vh",
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  type: "spring",
                  duration: 2.5,
                },
              }}
              exit={{
                opacity: 0,
                y: "5vh",
              }}
            >
              <div className="relative p-2 bg-stone-100 w-full h-auto text-black rounded-lg md:text-2xl lg:left-10 lg:top-16">
                <div className="flex mb-5 mx-3 mt-3 justify-center items-center text-center md:min-h-[300px]">
                  {botMessage.length !== 0 ? (
                    <BoldText text={botMessage} />
                  ) : (
                    <Lottie
                      key="waiting"
                      className="w-2/5 bottom-4 left-2"
                      animationData={Waiting}
                      autoplay
                      loop={true}
                    />
                  )}
                </div>
              </div>
              <div className="mx-5">
                <Character />
                <div class="grid grid-cols-[90%_10%] mx-3 my-12">
                  <input
                    class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="chatbox"
                    type="text"
                    placeholder="Ask me about Vinh!!"
                  ></input>
                  <button className="bg-white rounded-md" onClick={getResponse}>
                    <img
                      className="w-auto h-auto object-contain"
                      src="./send.svg"
                    />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        {isSkillDisplayed && (
          <SkillLoadingEffect
            key="display1"
            onMouseDown={() => {
              setIsMouseDown(false);
              setIsSkillDisplayed(false);
            }}
          />
        )}

        {isIntroductionDisplayed && (
          <Introduction
            key="display2"
            onMouseDown={() => {
              setIsMouseDown(false);
              setIsIntroductionDisplayed(false);
            }}
          />
        )}

        {isContactDisplayed && (
          <Contact
            key="display3"
            onMouseDown={() => {
              setIsMouseDown(false);
              setIsContactDisplayed(false);
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
