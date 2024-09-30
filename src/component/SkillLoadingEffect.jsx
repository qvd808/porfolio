import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import CircleConstellation from "./CircleSkill";
import PhysicsSkillBalls from "./PhysicsSkillBalls";

export default function SkillLoadingEffect({ onMouseDown }) {
	const [sectorAngle, setSectorAngle] = useState(0);
	const [showContent, setShowContent] = useState(false);
	const [circleSector, setCircleSector] = useState(4);
	const [windowWidth, setWindowWidth] = useState(0);

	const [currentSectorIndex, setCurrentSectorIndex] = useState(0);

	const sectorSkills = [
		{
			skill: "Development Skill",
			list: ["Docker", "Git", "Bash", "CI/CD", "Unix"],
		},
		{
			skill: "Programming Language",
			list: [
				"Python",
				"C",
				"C++",
				"HTML",
				"CSS",
				"JavaScript",
				"TypeScript",
				"Rust",
				"Java",
				"SQL",
			],
		},
		{
			skill: "Frameworks",
			list: [
				"React",
				"React Native",
				"Node.js",
				"Express.js",
				"CUnit",
				"LLVM",
				"CUDA",
				"TailwindCSS",
			],
		},
		{ skill: "Exit", list: [] },
	];
	const handleSwipeLeft = () => {
		setCurrentSectorIndex((prev) => (prev > 0 ? prev - 1 : sectorSkills.length - 2));
	};

	const handleSwipeRight = () => {
		setCurrentSectorIndex((prev) => (prev < sectorSkills.length - 2 ? prev + 1 : 0));
	};

	const currentSkill = sectorSkills[currentSectorIndex];
	const previousSkill = sectorSkills[currentSectorIndex > 0 ? currentSectorIndex - 1 : sectorSkills.length - 2];
	const nextSkill = sectorSkills[currentSectorIndex < sectorSkills.length - 2 ? currentSectorIndex + 1 : 0];


	const openingDuration = 1;
	const spinDuration = 0.5;
	const animationEffect = {
		initial: { opacity: 0, y: "100vh" },
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				opacity: { type: "spring" },
				type: "tween",
				duration: openingDuration,
			},
		},
		exit: { opacity: 0, y: 50 },
	};
	const handleSectorClick = (event, sectorNumber) => {
		event.stopPropagation();
		switch (sectorNumber) {
			case 1:
				setSectorAngle(270);
				setCircleSector(1);
				setShowContent(true);
				break;
			case 2:
				setSectorAngle(180);
				setCircleSector(2);
				setShowContent(true);
				break;
			case 3:
				setSectorAngle(90);
				setCircleSector(3);
				setShowContent(true);
				break;
			case 4:
				setSectorAngle(360);
				setShowContent(false);
				break;
		}
	};
	const sectors = [
		{ color: "#FEC771", angle: 90 },
		{ color: "#4ECB71", angle: 90 },
		{ color: "#4A9FF5", angle: 90 },
		{ color: "#FF6B6B", angle: 90 },
	];

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		// Optional: Return a cleanup function if needed
		return () => {
			// Cleanup code here
		};
	}, []); //

	return (
		<motion.div
			className="notPhone:relative w-full h-full notPhone:flex notPhone:flex-row items-center justify-center notPhone:my-4"
			key="info"
			variants={animationEffect}
			initial="initial"
			animate="animate"
			exit="exit"
			whileHover={{
				cursor: "pointer",
			}}
		>
			{
				windowWidth > 550 && (
					<>
						<motion.div
							className="w-64 h-auto aspect-square flex rounded-full overflow-hidden mx-4"
							animate={{
								rotate: sectorAngle,
								x: showContent ? "-7vw" : 0,
								// y: showContent ? "-45vh" : 0,
							}}
							transition={{
								type: "spring",
								stiffness: 260,
								damping: 20,
								duration: spinDuration,
								x: {
									duration: 1,
								},
							}}
							onAnimationComplete={() => {
								if (sectorAngle === 360) {
									onMouseDown();
								}
							}}
						>
							<div className="relative w-full h-full">
								{sectors.map((sector, index) => {
									const rotation = index * sector.angle;
									return (
										<div
											key={index}
											className="absolute w-full h-full"
											style={{
												backgroundColor: sector.color,
												clipPath: `polygon(50% 50%, 100% 0%, 100% 100%)`,
												transform: `rotate(${rotation}deg)`,
											}}
											onClick={(e) => handleSectorClick(e, index + 1)}
										>
											<div
												className="absolute top-0 right-0 w-1/2 h-full flex items-center justify-center"
												style={{
													transform: `rotate(-${sectorAngle + 90 * index}deg)`,
												}}
											>
												<p className="text-black text-sm font-bold text-center px-2 transform">
													{sectorSkills[index].skill}
												</p>
											</div>
										</div>
									);
								})}
							</div>
						</motion.div>
						{showContent && (
							<CircleConstellation
								background={sectors[circleSector - 1].color}
								skills={sectorSkills[circleSector - 1].list}
								skillName={sectorSkills[circleSector - 1].skill}
							/>
						)}
					</>
				)
			}
			{
				windowWidth < 550 && (
					<>
						{windowWidth < 550 && (
							<div className="flex flex-col items-center w-full h-full">
								<PhysicsSkillBalls
									skillList={currentSkill.list}
									skillName={currentSkill.skill}
									previousSkill={previousSkill.skill}
									nextSkill={nextSkill.skill}
									seed={Math.random()}
									onSwipeLeft={handleSwipeLeft}
									onSwipeRight={handleSwipeRight}
								/>
								<button className="bg-red-500 my-5 w-[15%] h-auto aspect-video rounded-lg" onClick={() => {
									onMouseDown()
								}}> Exit </button>
							</div>
						)}
					</>
				)
			}
		</motion.div>
	);
}
