import React from 'react';

const SwipeBar = ({ currentSkill, previousSkill, nextSkill }) => {
	const words = currentSkill.split(' ');

	return (
		<div className="w-[90%] grid grid-cols-[20%_60%_20%] py-2 px-4 rounded-lg">
			<div className="flex items-center justify-center text-sm text-gray-500">
				{previousSkill}
			</div>
			<div className="flex items-center justify-center">
				<p className="text-lg">&lt;</p>
				<div className="flex flex-col items-center justify-center text-lg font-semibold max-w-[250px] h-[3rem] overflow-hidden mx-3">
					{words.map((word, index) => (
						<span key={index} className="block">{word}</span>
					))}
				</div>
				<p className="text-lg">&gt;</p>
			</div>
			<div className="flex items-center justify-center text-sm text-gray-500">
				{nextSkill}
			</div>
		</div >
	);
};

export default SwipeBar;
