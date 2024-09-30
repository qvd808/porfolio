import React, { useEffect, useRef, useState } from 'react';
import { Engine, Render, World, Bodies, Runner } from 'matter-js';
import SwipeBar from './SwipeBar'; // Import the new SwipeBar component

function PhysicsSkillBalls({ skillList, skillName, previousSkill, nextSkill, seed, onSwipeLeft, onSwipeRight }) {
	const scene = useRef(null);
	const engineRef = useRef(Engine.create());
	const [startX, setStartX] = useState(0);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	const updateDimensions = () => {
		const isLandscape = window.orientation === 90 || window.orientation === -90;
		const width = isLandscape ? window.innerHeight : window.innerWidth;
		const height = isLandscape ? window.innerWidth : window.innerHeight;
		setDimensions({ width: width * 0.9, height: Math.min(height * 0.5, 300) });
	};

	useEffect(() => {
		updateDimensions();
		window.addEventListener('resize', updateDimensions);
		window.addEventListener('orientationchange', updateDimensions);

		return () => {
			window.removeEventListener('resize', updateDimensions);
			window.removeEventListener('orientationchange', updateDimensions);
		};
	}, []);

	useEffect(() => {
		if (dimensions.width === 0 || dimensions.height === 0) return;

		const engine = engineRef.current;
		const world = engine.world;

		// Clear the previous world
		World.clear(world);

		const render = Render.create({
			element: scene.current,
			engine: engine,
			options: {
				width: dimensions.width,
				height: dimensions.height,
				wireframes: false,
				background: 'transparent',
			},
		});

		// Create walls
		const wallOptions = { isStatic: true, render: { fillStyle: 'transparent' } };
		World.add(world, [
			Bodies.rectangle(dimensions.width / 2, -10, dimensions.width, 20, wallOptions),
			Bodies.rectangle(-10, dimensions.height / 2, 20, dimensions.height, wallOptions),
			Bodies.rectangle(dimensions.width / 2, dimensions.height + 10, dimensions.width, 20, wallOptions),
			Bodies.rectangle(dimensions.width + 10, dimensions.height / 2, 20, dimensions.height, wallOptions),
		]);

		const colors = [
			"#FEC771",
			"#4ECB71",
			"#4A9FF5",
			"#FF6B6B",
			"#3B82F6",
		];

		const getRandomColor = () => {
			const randomIndex = Math.floor(Math.random() * colors.length);
			return colors[randomIndex];
		};

		// Create balls for each skill
		const balls = skillList.map((skill) => {
			return Bodies.circle(
				Math.random() * dimensions.width,
				Math.random() * dimensions.height / 2,
				35,
				// Math.min(dimensions.width, dimensions.height) * 0.08, // Adjust ball size based on container
				{
					restitution: 0.8,
					friction: 0.005,
					render: {
						fillStyle: getRandomColor(),
					},
					label: skill,
				}
			);
		});

		World.add(world, balls);

		const runner = Runner.create();
		Runner.run(runner, engine);
		Render.run(render);

		const renderLoop = () => {
			if (render.context) {
				render.context.clearRect(0, 0, dimensions.width, dimensions.height);
				Render.world(render);
				balls.forEach((ball) => {
					const { x, y } = ball.position;
					// render.context.font = `${Math.min(dimensions.width, dimensions.height) * 0.03}px Arial`;
					render.context.font = `12px Arial`;
					render.context.fillStyle = 'black';
					render.context.textAlign = 'center';
					render.context.textBaseline = 'middle';
					render.context.fillText(ball.label, x, y);
				});
			}
			requestAnimationFrame(renderLoop);
		};
		requestAnimationFrame(renderLoop);

		return () => {
			Render.stop(render);
			World.clear(world);
			Engine.clear(engine);
			if (render.canvas) {
				render.canvas.remove();
			}
			render.canvas = null;
			render.context = null;
			render.textures = {};
			Runner.stop(runner);
		};
	}, [dimensions, skillList, seed]);

	const handleTouchStart = (e) => {
		setStartX(e.touches[0].clientX);
	};

	const handleTouchEnd = (e) => {
		const endX = e.changedTouches[0].clientX;
		const diffX = endX - startX;

		if (diffX > 50) {
			onSwipeRight();
		} else if (diffX < -50) {
			onSwipeLeft();
		}
	};

	return (
		<div
			className="w-full h-full flex flex-col text-center justify-center items-center"
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
		>
			<h2 className="my-4 font-bold">Swipe to see more</h2>
			<SwipeBar
				currentSkill={skillName}
				previousSkill={previousSkill}
				nextSkill={nextSkill}
			/>
			<div ref={scene} className="mx-auto border-2 border-gray-300 rounded-lg overflow-hidden mt-4" />
		</div>
	);
}

export default PhysicsSkillBalls;
