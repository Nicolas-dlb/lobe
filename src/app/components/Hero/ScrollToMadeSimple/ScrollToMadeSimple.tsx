"use client";
import { useScroll, animated } from "@react-spring/web";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function ScrollToMadeSimple() {
	const [active, setActive] = useState(true);

	const { scrollY } = useScroll();

	const opacity = scrollY.to((val) => {
		const range = 50; // Nombre de pixels de défilement pour atteindre une opacité de 0
		const scrollProgress = Math.min(val / range, 1); // Progression du défilement limitée à 1
		return 1 - scrollProgress; // Inversion de la progression pour obtenir l'opacité décroissante
	});

	useEffect(() => {
		const handleScroll = () => setActive(window.scrollY < 50);

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<animated.a
			href="#made-simple"
			style={{ opacity }}
			className={`hidden 900:block rounded-md outline-offset-4 absolute bottom-7 ${
				active ? "" : "pointer-events-none"
			}`}
		>
			<Image
				className="animate-float"
				src="/assets/img/see-more.svg"
				alt="see more"
				width="58"
				height="24"
			/>
		</animated.a>
	);
}

export default ScrollToMadeSimple;
