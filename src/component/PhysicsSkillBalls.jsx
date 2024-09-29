import React, { useEffect, useRef } from 'react';
import { Engine, Render, World, Bodies, Runner } from 'matter-js';

function PhysicsSkillBalls({ skillList, skillName }) {
	const scene = useRef(null);
	const engine = useRef(Engine.create());

	useEffect(() => {
		const cw = window.innerWidth * 0.9; // 90% of window width
		const ch = 300; // Fixed height as in your original design

		const render = Render.create({
			element: scene.current,
			engine: engine.current,
			options: {
				width: cw,
				height: ch,
				wireframes: false,
				background: 'transparent',
			},
		});

		const world = engine.current.world;

		// Create walls
		World.add(world, [
			Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
			Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
			Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
			Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
		]);

		// Create balls for each skill
		const balls = skillList.map((skill) => {
			return Bodies.circle(
				Math.random() * cw,
				Math.random() * (ch / 2), // Start from top half
				30, // Radius between 15 and 30
				{
					restitution: 0.8,
					friction: 0.005,
					render: {
						fillStyle: "#3B82F6",
					},
					label: skill,
				}
			);
		});

		World.add(world, balls);

		// Start the engine and renderer
		const runner = Runner.create();
		Runner.run(runner, engine.current);
		Render.run(render);

		// Custom render loop to draw labels
		const renderLoop = () => {
			// Clear the previous frame
			render.context.clearRect(0, 0, cw, ch);

			// Render the Matter.js world
			Render.world(render);

			// Draw text labels for each ball
			balls.forEach((ball) => {
				const { x, y } = ball.position;
				render.context.font = '12px Arial';
				render.context.fillStyle = 'white';
				render.context.textAlign = 'center';
				render.context.textBaseline = 'middle';
				render.context.fillText(ball.label, x, y); // Center the text
			});

			requestAnimationFrame(renderLoop);
		};
		requestAnimationFrame(renderLoop);

		return () => {
			Render.stop(render);
			World.clear(world);
			Engine.clear(engine.current);
			render.canvas.remove();
			render.canvas = null;
			render.context = null;
			render.textures = {};
		};
	}, [skillList]);

	return (
		<div className="w-full h-full flex flex-col text-center justify-center">
			<h2 className="my-4 font-bold">Swipe to see more</h2>
			<h2 className="my-4 font-bold">Current: {skillName}</h2>
			<div ref={scene} className="mx-auto border-2 border-gray-300 rounded-lg overflow-hidden" />
		</div>
	);
}

export default PhysicsSkillBalls;
