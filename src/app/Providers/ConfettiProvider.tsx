"use client";
import {
	CSSProperties,
	ReactNode,
	createContext,
	useCallback,
	useRef,
} from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles: CSSProperties = {
	position: "fixed",
	pointerEvents: "none",
	width: "100%",
	height: "100%",
	zIndex: 100,
	top: 0,
	left: 0,
};

export const ConfettiContext = createContext({
	fire: () => {},
});

function ConfettiProvider({ children }: { children: ReactNode }) {
	const refAnimationInstance = useRef<any>(null);

	const getInstance = useCallback((instance: any) => {
		refAnimationInstance.current = instance;
	}, []);

	const makeShot = useCallback((particleRatio: any, opts: any) => {
		refAnimationInstance.current &&
			refAnimationInstance.current({
				...opts,
				origin: { y: 0.7 },
				particleCount: Math.floor(200 * particleRatio),
			});
	}, []);

	const fire = useCallback(() => {
		makeShot(0.25, {
			spread: 26,
			startVelocity: 55,
		});

		makeShot(0.2, {
			spread: 60,
		});

		makeShot(0.35, {
			spread: 100,
			decay: 0.91,
			scalar: 0.8,
		});

		makeShot(0.1, {
			spread: 120,
			startVelocity: 25,
			decay: 0.92,
			scalar: 1.2,
		});

		makeShot(0.1, {
			spread: 120,
			startVelocity: 45,
		});
	}, [makeShot]);

	return (
		<ConfettiContext.Provider value={{ fire }}>
			{children}
			<ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
		</ConfettiContext.Provider>
	);
}

export default ConfettiProvider;
