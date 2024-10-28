"use client";
import { getHomeVideoTransition } from "@/app/utils/helpers";
import { animated, useTransition } from "@react-spring/web";
import React, { useEffect, useState } from "react";

const headings = [
	"identify plants",
	"see gestures",
	"counts reps",
	"feel emotions",
	"sense colors",
	"check safety",
];

function HeroHeadingDynamic() {
	const [index, setIndex] = useState(0);
	const [shouldAnimate, setShouldAnimate] = useState(false);

	const transitions = useTransition(headings[index], {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 200 },
		trail: 900,
		reset: true,
		delay: 300,
	});

	useEffect(() => {
		let transitionInProgress = false;
		const newIndex = (prevIndex: number) =>
			prevIndex === headings.length - 1 ? 0 : prevIndex + 1;

		const checkTransitions = setInterval(() => {
			if (getHomeVideoTransition()) {
				!shouldAnimate && setShouldAnimate(true);

				if (!transitionInProgress) {
					transitionInProgress = true;
					setIndex(newIndex);
					setTimeout(() => {
						transitionInProgress = false;
					}, 600);
				}
			}
		}, 100);

		return () => clearInterval(checkTransitions);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return transitions((props, item, t, key) => (
		<animated.span
			key={key}
			style={shouldAnimate ? props : {}}
			className="text-green leading-[1.05]"
		>
			{item}
		</animated.span>
	));
}

export default HeroHeadingDynamic;
