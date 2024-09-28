import { motion } from "framer-motion";
import { useState } from "react";

export default function SkillLoadingEffect({ onMouseDown }) {
	const [sectorAngle, setSectorAngle] = useState(0);
	const openingDuration = 1;
	const spinDuration = 0;
	const sector_text = [
		"Development Skill",
		"Programming Language",
		"Coming soon",
		"Exit",
	];
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
		console.log(sectorNumber);
		event.stopPropagation();
		switch (sectorNumber) {
			case 1:
				setSectorAngle(270);
				break;
			case 2:
				setSectorAngle(180);
				break;
			case 3:
				setSectorAngle(90);
				break;
			case 4:
				setSectorAngle(360);
				break;
		}
	};
	const sectors = [
		{ color: "#FEC771", angle: 90 },
		{ color: "#4ECB71", angle: 90 },
		{ color: "#4A9FF5", angle: 90 },
		{ color: "#FF6B6B", angle: 90 },
	];

	return (
		<motion.div
			className="relative w-64 h-64 flex items-center justify-center my-4"
			key="info"
			variants={animationEffect}
			initial="initial"
			animate="animate"
			exit="exit"
			whileHover={{
				cursor: "pointer",
			}}
		>
			<motion.div
				className="w-full h-full rounded-full overflow-hidden"
				animate={{ rotate: sectorAngle }}
				transition={{
					type: "spring",
					stiffness: 260,
					damping: 20,
					duration: spinDuration,
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
										transform: `rotate(-${sectorAngle + 90 * index - 90}deg)`,
									}}
								>
									<p className="text-black text-sm font-bold text-center px-2 transform -rotate-90">
										{sector_text[index]}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</motion.div>
		</motion.div>
	);
}
