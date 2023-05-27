import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useState } from "react";
import GitHub from "./animation/GitHub.json"
import Linkedin from "./animation/Linkedin.json"
import Mail from "./animation/Mail.json"

const LINKEDIN_WEBSITE = "https://www.linkedin.com/in/quang-vinh-dang-788ab0194/"
const GITHUB_WEBSITE = "https://github.com/qvd808"
const MAIL = ""


export default function Contact({ onMouseDown }) {

    const [isGitHubPlayed, setIsGitHubPlayed] = useState(false);
    const [isLinkedinPlayed, setIsLinkedinPlayed] = useState(false);
    const [isMailPlayed, setIsMailPlayed] = useState(false);

    const [isHovered, setIsHovered] = useState(false);

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
            className="w-4/5 h-96 bg-red-700 flex flex-col justify-evenly my-4 rounded-xl"
            key="info"
            variants={animationEffect}
            initial="initial"
            animate="animate"
            exit="exit"
            onMouseDown={() => {
                if (!isHovered) {
                    onMouseDown()
                }
            }}
            whileHover={{
                cursor: "pointer",
                boxShadow: "0 0 2em 0 rgba(245, 235, 132, 0.75)",
            }}
        >
            <div className="w-4/5 h-auto flex items-center self-center">
                <ul className="w-full flex flex-row justify-around">
                    <li>
                        <div
                            onClick={() => window.open(LINKEDIN_WEBSITE)}
                            onMouseEnter={() => { setIsLinkedinPlayed(true); setIsHovered(true) }}
                            onMouseLeave={() => { setIsLinkedinPlayed(false); setIsHovered(false) }}
                        >
                            <Lottie
                                style={{
                                    width: "5em",
                                    height: "5em"
                                }}
                                className="animation-contact"
                                animationData={Linkedin}
                                autoplay
                                loop={isLinkedinPlayed}
                            />
                            <p>
                                LinkedIn
                            </p>
                        </div>

                    </li>
                    <li>
                        <div
                            onClick={() => window.open(GITHUB_WEBSITE)}
                            onMouseEnter={() => { setIsGitHubPlayed(true); setIsHovered(true) }}
                            onMouseLeave={() => { setIsGitHubPlayed(false); setIsHovered(false) }}
                        >
                            <Lottie
                                style={{
                                    width: "5em",
                                    height: "5em"
                                }}
                                className="animation-contact"
                                animationData={GitHub}
                                autoplay
                                loop={isGitHubPlayed}
                            />
                            <p>Git Hub</p>
                        </div>

                    </li>
                    <li>

                        <div
                            onMouseEnter={() => { setIsMailPlayed(true); setIsHovered(true) }}
                            onMouseLeave={() => { setIsMailPlayed(false); setIsHovered(false) }}
                        >
                            <Lottie
                                style={{
                                    width: "5em",
                                    height: "5em",
                                    transform: "translateY(-1em)"
                                }}
                                className="animation-contact"
                                animationData={Mail}
                                autoplay
                                loop={isMailPlayed}
                            />
                            <p>
                                <a style={{
                                    textDecoration: "None",
                                    color: "inherit"
                                }}
                                    href="mailto:qvd@sfu.ca">qvd@sfu.ca</a>
                            </p>
                        </div>
                    </li>
                </ul>

            </div>

        </motion.div>
    )

}