import React, { useState, useEffect, useCallback } from "react";

const CircleConstellation = ({ background }) => {
	const [smallCircles, setSmallCircles] = useState([]);

	const bigCircleRadius = 150;
	const smallCircleRadius = bigCircleRadius / 3;
	const numSmallCircles = 8;

	const minDistance = bigCircleRadius + smallCircleRadius;
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

	const generateSmallCircles = useCallback(() => {
		const circles = [];
		for (let i = 0; i < numSmallCircles; i++) {
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
				color: colors[i % colors.length],
				phase: Math.random() * 2 * Math.PI, // Random starting phase for wiggle
				speed: 0.5 + Math.random() * 0.5, // Random speed for variety
			});
		}
		return circles;
	}, []);

	useEffect(() => {
		setSmallCircles(generateSmallCircles());
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

			{smallCircles.map((circle, index) => {
				const lineStart = getLineStart(circle.angle);
				return (
					<g key={index}>
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
					</g>
				);
			})}
		</svg>
	);
};

export default CircleConstellation;
