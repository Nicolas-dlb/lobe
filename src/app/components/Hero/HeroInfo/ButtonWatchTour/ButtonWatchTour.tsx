"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";

function ButtonWatchTour({ onClick }: { onClick: () => void }) {
	const [effect, setEffect] = useState(false);

	const handleMouseDown = useCallback(() => {
		setEffect(true);

		document.addEventListener(
			"mouseup",
			() => {
				setEffect(false);
			},
			{ once: true }
		);
	}, []);

	return (
		<button
			onClick={onClick}
			onMouseDown={handleMouseDown}
			className={`text-green transition-all flex items-center duration-[.4s] ease-in-out font-bold text-lg sm:text-[20px] hover:scale-105 w-36 sm:w-[168px] rounded-3xl h-11 sm:h-[50px] justify-center ${
				effect && "!scale-[0.98]"
			}`}
		>
			Watch Tour
			<Image
				className="ml-1"
				src="/assets/img/watch-tour.svg"
				alt="watch tour"
				height={32}
				width={32}
			/>
		</button>
	);
}

export default ButtonWatchTour;
