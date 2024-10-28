"use client";
import useMouseDownEffect from "@/app/utils/hooks/useMouseDownEffect";
import Image from "next/image";
import React from "react";

interface ButtonCloseModalProps {
	closeModal: () => void;
}

function ButtonCloseModal({ closeModal }: ButtonCloseModalProps) {
	const { handleMouseDown, effect } = useMouseDownEffect();

	return (
		<button
			onMouseDown={handleMouseDown}
			onClick={closeModal}
			className={`absolute right-6 top-6 hover:scale-[1.05] transition-all duration-200 ${
				effect && "!scale-[0.95]"
			}`}
		>
			<Image
				className="opacity-[.24] pointer-events-none"
				src="/assets/img/close.svg"
				alt="close modal"
				width={32}
				height={32}
			/>
		</button>
	);
}

export default ButtonCloseModal;
