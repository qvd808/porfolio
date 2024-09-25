import { motion } from "framer-motion";
import { useState } from "react";

export default function SkillLoadingEffect({ onMouseDown }) {
	const [sectorAngle, setSectorAngle] = useState(0);
	const openingDuration = 1;
	const spinDuration = 0;

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
		event.stopPropagation(); // Prevent event from bubbling up
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
			default:
				setSectorAngle(0);
				break;
		}
	};

	const sectors = [
		{ color: "#FF6B6B", angle: 90 },
		{ color: "#4ECB71", angle: 90 },
		{ color: "#FEC771", angle: 90 },
		{ color: "#4A9FF5", angle: 90 },
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
					if (sectorAngle === 270) {
						onMouseDown();
					}
				}}
			>
				<div className="relative w-full h-full">
					{sectors.map((sector, index) => {
						const rotation = index * sector.angle; // Calculate rotation for each sector
						return (
							<div
								key={index}
								className="absolute w-full h-full"
								style={{
									backgroundColor: sector.color,
									clipPath: `polygon(50% 50%, 100% 0%, 100% 100%)`, // Adjust for each sector
									transform: `rotate(${rotation}deg)`,
								}}
								onClick={(e) => handleSectorClick(e, index + 1)}
							/>
						);
					})}
				</div>
			</motion.div>
		</motion.div>
	);
}
