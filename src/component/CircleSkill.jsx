import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CircleConstellation = ({ background, skills, skillName }) => {
	const [smallCircles, setSmallCircles] = useState([]);

	const bigCircleRadius = 150;
	const smallCircleRadius = bigCircleRadius / 3;

	const minDistance = bigCircleRadius + smallCircleRadius + 10;
	const maxDistance = bigCircleRadius + smallCircleRadius * 2;

	const colors = [
		"#FF6B6B",
		"#4ECDC4",
		"#45B7D1",
		"#FED766",
		"#2AB7CA",
		"#F0B67F",
		"#FE4A49",
		"#A9E5BB",
	];

	const smallCircleAnimation = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				duration: 1,
			},
		},
		exit: {
			opacity: 0,
			y: 50,
			transition: {
				type: "spring",
				duration: 1,
			},
		},
	};

	const generateSmallCircles = useCallback(() => {
		const circles = [];

		skills.forEach((text, i) => {
			let angle, distance, x, y, overlapping;
			do {
				angle = Math.random() * 2 * Math.PI;
				distance =
					minDistance + Math.random() * (maxDistance - minDistance);
				x = Math.cos(angle) * distance;
				y = Math.sin(angle) * distance;

				overlapping = circles.some(
					(circle) =>
						Math.hypot(circle.x - x, circle.y - y) <
						smallCircleRadius * 2.2,
				);
			} while (overlapping);

			circles.push({
				baseX: x,
				baseY: y,
				x,
				y,
				angle,
				text,
				color: colors[i % colors.length],
				phase: Math.random() * 2 * Math.PI,
				speed: 0.5 + Math.random() * 0.5,
			});
		});

		return circles;
	}, [skills]);

	useEffect(() => {
		setSmallCircles(generateSmallCircles());
		// console.log(skills);
	}, [generateSmallCircles]);

	useEffect(() => {
		let animationFrameId;
		let startTime;

		const animate = (timestamp) => {
			if (!startTime) startTime = timestamp;
			const elapsedTime = timestamp - startTime;

			setSmallCircles((prevCircles) =>
				prevCircles.map((circle) => {
					const wiggleX =
						Math.cos(
							circle.phase + elapsedTime * 0.002 * circle.speed,
						) * 5;
					const wiggleY =
						Math.sin(
							circle.phase + elapsedTime * 0.002 * circle.speed,
						) * 5;
					return {
						...circle,
						x: circle.baseX + wiggleX,
						y: circle.baseY + wiggleY,
					};
				}),
			);

			animationFrameId = requestAnimationFrame(animate);
		};

		animationFrameId = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	const getLineStart = (angle) => ({
		x: Math.cos(angle) * bigCircleRadius,
		y: Math.sin(angle) * bigCircleRadius,
	});

	// Function to determine text color based on background brightness
	const getTextColor = (bgColor) => {
		const r = parseInt(bgColor.slice(1, 3), 16);
		const g = parseInt(bgColor.slice(3, 5), 16);
		const b = parseInt(bgColor.slice(5, 7), 16);
		const brightness = (r * 299 + g * 587 + b * 114) / 1000;
		return brightness > 125 ? "black" : "white";
	};

	return (
		<svg width="700" height="700" viewBox="-350 -350 700 700">
			<circle
				cx="0"
				cy="0"
				r={bigCircleRadius}
				fill={background}
				stroke="black"
				strokeWidth="2"
			/>
			<text
				x="0"
				y="0"
				textAnchor="middle"
				dominantBaseline="central"
				fill="black"
				fontWeight="bold"
				fontSize={bigCircleRadius * 0.15}
			>
				{skillName}
			</text>

			<AnimatePresence>
				{smallCircles.map((circle, index) => {
					const lineStart = getLineStart(circle.angle);
					const textColor = getTextColor(circle.color);
					return (
						<motion.g
							variants={smallCircleAnimation}
							initial="initial"
							animate="animate"
							exit="exit"
							key={index}
						>
							<line
								x1={lineStart.x}
								y1={lineStart.y}
								x2={circle.x}
								y2={circle.y}
								stroke="gray"
								strokeWidth="2"
							/>
							<circle
								cx={circle.x}
								cy={circle.y}
								r={smallCircleRadius}
								fill={circle.color}
								stroke="black"
								strokeWidth="1"
							/>
							<text
								x={circle.x}
								y={circle.y}
								textAnchor="middle"
								dominantBaseline="central"
								fill={textColor}
								fontSize={
									circle.text.length > 10
										? smallCircleRadius * 0.25
										: smallCircleRadius * 0.4
									// smallCircleRadius * 0.4
								}
								fontWeight="bold"
							>
								{circle.text}
							</text>
						</motion.g>
					);
				})}
			</AnimatePresence>
		</svg>
	);
};

export default CircleConstellation;
