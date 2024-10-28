import { ConfettiContext } from "@/app/Providers/ConfettiProvider";
import useMouseDownEffect from "@/app/utils/hooks/useMouseDownEffect";
import React, { useCallback, useContext, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonDownloadProps {
	className: string;
}

function ButtonDownload({ className }: ButtonDownloadProps) {
	const [canClick, setCanClick] = useState(true);
	const { handleMouseDown, effect } = useMouseDownEffect();

	const { fire } = useContext(ConfettiContext);

	const mergedClass = twMerge(
		`bg-green text-white flex items-center shadow-[0_10px_20px_-8px_transparent] justify-center rounded-3xl w-full py-3 hover:scale-105 font-bold transition-all duration-[.4s] ease-in-out text-xl ${
			effect && "!scale-[0.98]"
		}`,
		className
	);

	const handleClick = useCallback(() => {
		if (canClick) {
			// Fire Event (Confetti)
			fire();

			// Désactiver le clic
			setCanClick(false);

			// Réactiver le clic après 10 secondes
			setTimeout(() => {
				setCanClick(true);
			}, 10000);
		}
	}, [canClick, fire]);

	return (
		<button
			onMouseDown={handleMouseDown}
			onClick={handleClick}
			className={mergedClass}
		>
			Download
		</button>
	);
}

export default ButtonDownload;
